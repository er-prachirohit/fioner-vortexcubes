"use client";

import { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: { access_token?: string; error?: string }) => void;
          }) => { requestAccessToken: () => void };
        };
      };
    };
  }
}

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "";

// Loads https://accounts.google.com/gsi/client once and exposes a
// `requestGoogleAccessToken` function that resolves with an OAuth access
// token from Google's token client (implicit flow), ready to be sent to
// the backend's /api/auth/google route for verification.
export function useGoogleAuth() {
  const [ready, setReady] = useState(false);
  const clientRef = useRef<{ requestAccessToken: () => void } | null>(null);
  const resolverRef = useRef<{
    resolve: (token: string) => void;
    reject: (err: Error) => void;
  } | null>(null);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return;
    if (window.google?.accounts?.oauth2) {
      initClient();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initClient;
    document.head.appendChild(script);

    function initClient() {
      if (!window.google?.accounts?.oauth2) return;
      clientRef.current = window.google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: "openid email profile",
        callback: (response) => {
          if (response.access_token) {
            resolverRef.current?.resolve(response.access_token);
          } else {
            resolverRef.current?.reject(new Error(response.error ?? "Google sign-in was cancelled."));
          }
        },
      });
      setReady(true);
    }

    return () => {
      script.remove();
    };
  }, []);

  const requestGoogleAccessToken = useCallback(() => {
    return new Promise<string>((resolve, reject) => {
      if (!GOOGLE_CLIENT_ID) {
        reject(new Error("Google sign-in isn't configured yet. Set NEXT_PUBLIC_GOOGLE_CLIENT_ID."));
        return;
      }
      if (!clientRef.current) {
        reject(new Error("Google sign-in is still loading. Please try again in a moment."));
        return;
      }
      resolverRef.current = { resolve, reject };
      clientRef.current.requestAccessToken();
    });
  }, []);

  return { ready: ready || !GOOGLE_CLIENT_ID, isConfigured: Boolean(GOOGLE_CLIENT_ID), requestGoogleAccessToken };
}

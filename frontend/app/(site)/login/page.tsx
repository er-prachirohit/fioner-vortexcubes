"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { AuthShell } from "@/components/auth/auth-shell";
import { FormField } from "@/components/auth/form-field";
import { GoogleButton } from "@/components/auth/google-button";
import { Button } from "@/components/ui/button";
import { login, loginWithGoogle } from "@/lib/auth/api";
import { useAuth } from "@/lib/auth/context";
import { useGoogleAuth } from "@/lib/auth/use-google-auth";

export default function LoginPage() {
  const router = useRouter();
  const { setSession } = useAuth();
  const { requestGoogleAccessToken } = useGoogleAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!email) nextErrors.email = "Enter your email or phone number.";
    if (!password) nextErrors.password = "Enter your password.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const data = await login({ email, password });
      setSession(data);
      router.push("/");
    } catch (err) {
      setErrors({ form: err instanceof Error ? err.message : "Unable to log in." });
    } finally {
      setSubmitting(false);
    }
  }

  async function handleGoogle() {
    setErrors({});
    setGoogleLoading(true);
    try {
      const accessToken = await requestGoogleAccessToken();
      const data = await loginWithGoogle(accessToken);
      setSession(data);
      router.push("/");
    } catch (err) {
      setErrors({ form: err instanceof Error ? err.message : "Google sign-in failed." });
    } finally {
      setGoogleLoading(false);
    }
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to manage your vehicles, safety and trips."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-blue hover:underline">
            Sign up
          </Link>
        </>
      }
    >
      <div className="space-y-4">
        <GoogleButton onClick={handleGoogle} loading={googleLoading} />

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[12px] text-tertiary">or continue with email</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {errors.form && (
            <div className="flex items-start gap-2 rounded-input border border-danger/20 bg-danger-light px-4 py-3 text-[13px] text-danger-dark">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {errors.form}
            </div>
          )}

          <FormField
            label="Email or phone number"
            type="text"
            autoComplete="username"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <div>
            <FormField
              label="Password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />
            <div className="mt-2 text-right">
              <Link href="/forgot-password" className="text-[12px] text-blue hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            {submitting ? "Logging in…" : "Log In"}
          </Button>
        </form>
      </div>
    </AuthShell>
  );
}

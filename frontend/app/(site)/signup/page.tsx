"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { AuthShell } from "@/components/auth/auth-shell";
import { FormField } from "@/components/auth/form-field";
import { GoogleButton } from "@/components/auth/google-button";
import { Button } from "@/components/ui/button";
import { signup, loginWithGoogle } from "@/lib/auth/api";
import { useAuth } from "@/lib/auth/context";
import { useGoogleAuth } from "@/lib/auth/use-google-auth";

type Errors = Partial<Record<"name" | "email" | "password" | "confirm" | "terms" | "form", string>>;

export default function SignupPage() {
  const router = useRouter();
  const { setSession } = useAuth();
  const { requestGoogleAccessToken } = useGoogleAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: Errors = {};
    if (!name.trim()) nextErrors.name = "Enter your full name.";
    if (!email) nextErrors.email = "Enter a valid email address.";
    if (!password || password.length < 8) nextErrors.password = "Use at least 8 characters.";
    if (confirm !== password) nextErrors.confirm = "Passwords don't match.";
    if (!agreed) nextErrors.terms = "Please accept the Terms to continue.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const data = await signup({ name, email, password });
      setSession(data);
      router.push("/");
    } catch (err) {
      setErrors({ form: err instanceof Error ? err.message : "Unable to create account." });
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
      title="Create your account"
      subtitle="Set up QR safety, GPS tracking and trip intelligence for your vehicles."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-blue hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <div className="space-y-4">
        <GoogleButton onClick={handleGoogle} loading={googleLoading} label="Sign up with Google" />

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[12px] text-tertiary">or sign up with email</span>
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
            label="Full name"
            autoComplete="name"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />

          <FormField
            label="Email address"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <FormField
            label="Password"
            type="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <FormField
            label="Confirm password"
            type="password"
            autoComplete="new-password"
            placeholder="Re-enter your password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            error={errors.confirm}
          />

          <div>
            <label className="flex items-start gap-2.5 text-[13px] text-secondary">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-border text-blue focus:ring-blue"
              />
              <span>
                I agree to Fioner&apos;s{" "}
                <Link href="/terms" className="text-blue hover:underline">
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue hover:underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {errors.terms && <p className="mt-1.5 text-[12px] text-danger">{errors.terms}</p>}
          </div>

          <Button type="submit" className="w-full" size="lg">
            {submitting ? "Creating account…" : "Create Account"}
          </Button>
        </form>
      </div>
    </AuthShell>
  );
}

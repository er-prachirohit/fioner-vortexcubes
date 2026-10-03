"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { AuthShell } from "@/components/auth/auth-shell";
import { FormField } from "@/components/auth/form-field";
import { Button } from "@/components/ui/button";
import { requestPasswordReset } from "@/lib/auth/api";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) {
      setError("Enter the email associated with your account.");
      return;
    }
    setError(undefined);
    setSubmitting(true);
    try {
      await requestPasswordReset(email);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthShell
      title="Reset your password"
      subtitle="We'll email you a link to reset your password."
      footer={
        <>
          Remembered it?{" "}
          <Link href="/login" className="font-medium text-blue hover:underline">
            Back to log in
          </Link>
        </>
      }
    >
      {sent ? (
        <div className="flex items-start gap-3 rounded-input border border-success/20 bg-success-light px-4 py-4 text-[13px] text-success-dark">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            If an account exists for <strong>{email}</strong>, a reset link is on its way.
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {error && (
            <div className="flex items-start gap-2 rounded-input border border-danger/20 bg-danger-light px-4 py-3 text-[13px] text-danger-dark">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {error}
            </div>
          )}
          <FormField
            label="Email address"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error ? undefined : undefined}
          />
          <Button type="submit" className="w-full" size="lg">
            {submitting ? "Sending…" : "Send Reset Link"}
          </Button>
        </form>
      )}
    </AuthShell>
  );
}

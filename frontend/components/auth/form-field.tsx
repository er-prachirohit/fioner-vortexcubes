"use client";

import { forwardRef, useId, useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
};

export const FormField = forwardRef<HTMLInputElement, FieldProps>(function FormField(
  { label, error, hint, id, type = "text", className, ...props },
  ref
) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div>
      <label htmlFor={fieldId} className="mb-1.5 block text-[13px] font-medium text-ink">
        {label}
      </label>
      <div className="relative">
        <input
          ref={ref}
          id={fieldId}
          type={isPassword ? (show ? "text" : "password") : type}
          className={cn(
            "field-input",
            isPassword && "pr-11",
            error && "!border-danger focus:!border-danger",
            className
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-tertiary hover:text-secondary"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
      </div>
      {error ? (
        <p id={`${fieldId}-error`} className="mt-1.5 text-[12px] text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={`${fieldId}-hint`} className="mt-1.5 text-[12px] text-tertiary">
          {hint}
        </p>
      ) : null}
    </div>
  );
});

"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

interface ConfirmSubmitButtonProps {
  label: string;
}

export function ConfirmSubmitButton({ label }: ConfirmSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-emerald-600 text-white hover:bg-emerald-700"
    >
      {label}
    </Button>
  );
}

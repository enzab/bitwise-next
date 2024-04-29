import { Eye } from "lucide-react";
import React from "react";

export default function TextInput({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  return (
    <div className="w-full">
      <label className="text-sm text-neutral-600">{label}</label>
      <div className="">
        <input
          type={type}
          className="h-12 w-full rounded-lg bg-neutral-50 px-3"
        />
        <button>
          <Eye />
        </button>
      </div>
    </div>
  );
}

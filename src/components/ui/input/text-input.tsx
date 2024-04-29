"use client";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function TextInput({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  const [visible, setVisible] = useState(false);

  function toggleShow() {
    setVisible(!visible);
  }
  return (
    <div className="w-full">
      <label className="text-sm text-neutral-600">{label}</label>
      <div className="flex gap-x-2 rounded-lg bg-neutral-50 px-3">
        <input
          type={!visible ? type : "text"}
          className="h-12 w-full bg-neutral-50 outline-none"
        />
        {type === "password" && (
          <button onClick={toggleShow}>{visible ? <EyeOff /> : <Eye />}</button>
        )}
      </div>
    </div>
  );
}

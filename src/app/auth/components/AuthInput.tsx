"use client";

import { EyeClosed, Eye } from "@/app/components/Icons";
import React, { forwardRef, useState } from "react";

type AuthInputProps = {
  label?: string;
  type?: string;
  name: string;
};

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  function AuthInput({ label, type = "text", name, ...others }, ref) {
    const [hide, setHide] = useState(true);

    return (
      <div className="flex flex-col gap-1 w-full">
        {!!label && <label htmlFor={name}>{label}</label>}
        <div className="relative">
          <input
            ref={ref}
            type={type === "password" ? (hide ? "password" : "text") : type}
            name={name}
            autoComplete="off"
            className="w-full bg-transparent py-2 px-3 border border-gray-600 focus-visible:outline-none"
            {...others}
          />

          {type === "password" && (
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2"
              type="button"
              onClick={() => setHide((prev) => !prev)}
            >
              {hide ? (
                <EyeClosed className="fill-gray-600 dark:fill-gray-300" />
              ) : (
                <Eye className="fill-gray-600 dark:fill-gray-300" />
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default AuthInput;

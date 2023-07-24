"use client";

import React, { useEffect, useState } from "react";
import AuthInput from "../components/AuthInput";
import { UserRectangle } from "@/app/components/Icons";
import { useForm } from "react-hook-form";
import { nextAxios } from "@/utils/setupAxios";
import Link from "next/link";
import { useDispatch, useSelector } from "@/redux/store";
import { authSlice } from "@/redux/slices/userSlice/slice";
import { selectIsAuth } from "@/redux/slices/userSlice/selector";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await nextAxios.post("api/login", {
        email: data.email,
        password: data.password,
      });

      dispatch(authSlice.actions.setUser(res.data.user));
    } catch (error: any) {
      const message = error.response.data || "Something went wrong!";
      setError(message);
    }
  });

  useEffect(() => {
    if (isAuth) {
      router.replace("/");
    }
  }, [isAuth, router]);

  return (
    <div className="py-8">
      <div className="m-auto flex flex-col gap-14 w-full max-w-[400px] border border-gray-600 py-12 px-8">
        <div className="flex flex-col items-center justify-center fill-neutral-700 text-gray-600">
          <div>
            <UserRectangle width="30" height="30" fill="inherit" />
          </div>
          <h3 className="text-2xl font-medium text-inherit">LOGIN</h3>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-center gap-2"
        >
          {error && (
            <div className="mb-4">
              <p className="text-red-400 text-center">{error}</p>
            </div>
          )}

          <AuthInput label="Email" type="email" {...register("email")} />

          <AuthInput
            label="Password"
            type="password"
            {...register("password")}
          />

          {loading ? (
            <div className="animate-pulse flex items-center justify-center cursor-default mt-2 w-full h-11 rounded-md bg-neutral-50 dark:bg-gray-700">
              <span className="opacity-40 m-auto">Please wait...</span>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center gap-4">
              <button className="border border-gray-600 p-3 mt-4 text-white dark:text-neutral-800 w-full">
                Login
              </button>
              <p className="text-sm">
                Create new account?{" "}
                <Link href="/auth/register" className="underline">
                  Register
                </Link>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

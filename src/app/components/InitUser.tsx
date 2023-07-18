"use client";

import { useAuth } from "@/hooks/useAuth";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const InitUser = ({
  authCookie,
}: {
  authCookie: RequestCookie | undefined;
}) => {
  useAuth(authCookie);

  return null;
};

export default InitUser;

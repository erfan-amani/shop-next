import { cookies } from "next/headers";

const checkUserAuth = () => {
  const authCookie = cookies().get(
    process.env.NEXT_PUBLIC_APP_COOKIE_NAME || ""
  );

  return !!authCookie?.value;
};

const useAuth = () => {
  const authCookie = cookies().get(
    process.env.NEXT_PUBLIC_APP_COOKIE_NAME || ""
  );

  return !!authCookie?.value;
};

export { useAuth, checkUserAuth };

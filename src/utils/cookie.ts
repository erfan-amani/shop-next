import { AxiosHeaders } from "axios";
import { cookies } from "next/headers";

const addCookieToHeader = (otherHeaders?: AxiosHeaders) => {
  const authCookie = cookies().get(
    process.env.NEXT_PUBLIC_APP_COOKIE_NAME || ""
  );

  return {
    headers: {
      ...otherHeaders,
      Cookie: authCookie?.name + "=" + authCookie?.value,
    },
  };
};

export { addCookieToHeader };

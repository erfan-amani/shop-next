import { AxiosHeaders } from "axios";
import { cookies } from "next/headers";

const APP_COOKIE_NAME = "auth-next-shop";

const addCookieToHeader = (otherHeaders?: AxiosHeaders) => {
  const authCookie = cookies().get(APP_COOKIE_NAME);

  return {
    headers: {
      ...otherHeaders,
      Cookie: authCookie?.name + "=" + authCookie?.value,
    },
  };
};

export { addCookieToHeader };

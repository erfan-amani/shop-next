import { appAxios } from "@/utils/setupAxios";
import { addCookieToHeader } from "@/utils/cookie";

import React from "react";

const getAccount = async () => {
  try {
    const headers = addCookieToHeader();
    const response = await appAxios.get(`user/profile`, { ...headers });

    return response;
  } catch (error: any) {
    return null;
  }
};

const Account = async () => {
  const data = await getAccount();

  console.log(data);

  return <div>Account</div>;
};

export default Account;

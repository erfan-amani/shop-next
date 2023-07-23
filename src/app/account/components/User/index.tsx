import React from "react";
import { appAxios } from "@/utils/setupAxios";
import { addCookieToHeader } from "@/utils/cookie";
import { User as UserType } from "@/types/user";
import { UserCircle } from "@/app/components/Icons";
import moment from "moment";

const getAccount = async () => {
  try {
    const headers = addCookieToHeader();
    const response = await appAxios.get(`user/profile`, {
      ...headers,
    });
    const data: UserType = response.data;

    return data;
  } catch (error: any) {
    return null;
  }
};

const Index = async () => {
  const userData = await getAccount();

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-2">
        <UserCircle size={60} weight="light" className="text-gray-600" />

        <div className="text-center">
          <p>{userData?.email}</p>
          <p className="text-xs">
            join at: {moment(userData?.createdAt).format("DD MMMM YYYY")}
          </p>
        </div>

        <div className="w-full [&>div]:flex [&>div]:justify-between mt-10">
          <div>
            <p>Watchlist</p>
            <p>12</p>
          </div>
          <div>
            <p>Spent</p>
            <p>$1,230</p>
          </div>
          <div>
            <p>Orders</p>
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

import React from "react";
import User from "./components/User";
import Detail from "./components/Detail";

const Account = async () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[250px] p-4 border-2 border-gray-600">
          {/* @ts-expect-error Server Component */}
          <User />
        </div>
        <div className="w-full flex-1">
          <Detail />
        </div>
      </div>
    </div>
  );
};

export default Account;

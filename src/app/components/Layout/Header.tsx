"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "@/redux/store";
import { selectIsAuth } from "@/redux/slices/userSlice/selector";
import CartDropdown from "./CartDropdown";

const Header = ({ className = "" }: { className?: String }) => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <header className={`flex-shrink-0 ${className}`}>
      <nav className="flex items-center justify-between py-2">
        <div>
          <Link href="/" className="font-semibold text-lg">
            Shop App
          </Link>
        </div>
        <div className="flex items-center [&>*]:px-4">
          <Link href="/shop">Shop</Link>

          {isAuth ? (
            <>
              <Link href="/account">Account</Link>
              <CartDropdown />
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="py-[2px] mx-2 border border-gray-700 rounded-sm"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

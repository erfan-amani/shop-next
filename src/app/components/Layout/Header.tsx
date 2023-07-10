import Link from "next/link";
import React from "react";
import { ShoppingCartSimple } from "@/app/components/Icons";

const Header = ({ className = "" }: { className?: String }) => {
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
          <Link href="/account">Account</Link>
          <button>
            <ShoppingCartSimple size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

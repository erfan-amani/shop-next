import Link from "next/link";
import React from "react";

const Footer = ({ className = "" }: { className?: String }) => {
  return (
    <footer className={`flex-shrink-0 ${className}`}>
      <div className="border-t border-neutral-200">
        <div className="py-6 flex items-center justify-between">
          <div>
            <Link href="/" className="font-semibold text-lg">
              Shop App
            </Link>
          </div>

          <div className="flex items-center [&>*]:px-4">
            <Link href="/">Home</Link>
            <Link href="/blogs">Blogs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

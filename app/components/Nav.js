import React from "react";
import Link from "next/link";

const Nav = () => {

const inactiveLink = 'flex gap-1'
const activeLink = 'bg-white text-blue-900 rounded-l-lg'

  return (
    <aside className="text-white bg-blue-900 h-screen p-4">
      <Link href={"/"} className="flex gap-1 mb-4">
        {/* replace div with icon */}
        <div>icon</div>
        <span>EcommerceAdmin</span>
      </Link>

      <nav className="flex flex-col gap-2">
        <Link href={"/dashboard"} className={activeLink}>
          {/* replace div with icon */}
          <div>icon</div>
          Dashboard
        </Link>

        <Link href={"/products"}className="flex gap-2" >
          {/* replace div with icon */}
          <div>icon</div>
          Products
        </Link>

        <Link href={"/orders"}className="flex gap-2">
          {/* replace div with icon */}
          <div>icon</div>
          Orders
        </Link>
        <Link href={"/settings"}className="flex gap-2">
          {/* replace div with icon */}
          <div>icon</div>
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Nav;

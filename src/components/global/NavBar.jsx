import React from "react";
import Link from "next/link";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";

function NavBar({ session }) {
  return (
    <div className="navbar p-0 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/dihes">Home</Link>
            </li>
            <li>
              <Link href="/dishes">All Dishes</Link>
            </li>
            {!session?.user && <SignInLink />}
            {session?.user && <SignOutLink />}
          </ul>
        </div>
        <a className="text-xl">DishCraft</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dishes">All Dishes</Link>
          </li>
          {!session?.user && <SignInLink />}
          {session?.user && (
            <li>
              <Link href="/add-dish">Add Dish</Link>
            </li>
          )}
          {session?.user && <SignOutLink />}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="">Button</a>
      </div>
    </div>
  );
}

export default NavBar;

"use client";
import React from "react";

import Container from "./Container";
import Link from "next/link";

import MyLink from "./MyLink";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  const links = (
    <>
      <MyLink href="/">Home</MyLink>
      <MyLink href="">All Labourers</MyLink>
      <MyLink href="">About Us</MyLink>
      <MyLink href="">Help & Support</MyLink>
    </>
  );

  return (
    <div className=" bg-primary shadow-sm ">
      <Container className="navbar">
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
              tabIndex="-1"
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className=" text-2xl font-bold text-white">
            E - Labour
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex justify-center items-center gap-5 px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {status === "loading" ? (
            <div className="skeleton w-18 h-10"></div>
          ) : session ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                {" "}
                <Image
                  src={
                    session?.user?.image
                      ? session.user.image
                      : "/userDefaultImage.avif"
                  }
                  alt={session?.user?.name}
                  width={50}
                  height={50}
                  className="rounded-full cursor-pointer"
                ></Image>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content  bg-gray-600 text-white rounded-box z-200 min-w-52 p-3 shadow-sm"
              >
                <li className="capitalize text-nowrap text-sm mb-2">
                  {session?.user?.name}
                </li>
                <li className="hover:bg-gray-800 rounded-sm  px-3 py-1 cursor-pointer">
                  Add Labour
                </li>
                <li className="hover:bg-gray-800 rounded-sm  px-3 py-1 cursor-pointer">
                  Manage Labour
                </li>
                <li
                  className="hover:bg-gray-800 rounded-sm  px-3 py-1 cursor-pointer"
                  onClick={() => signOut()}
                >
                  Log Out
                </li>
              </ul>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn bg-gray-800 border-none outline-none shadow-none hover:bg-gray-700 text-secondary "
            >
              Log In
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

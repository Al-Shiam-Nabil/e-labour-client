"use client";

import Container from "./Container";
import Link from "next/link";

import MyLink from "./MyLink";

import Image from "next/image";
import useAuthHook from "@/Hook/useAuthHook";
import Swal from "sweetalert2";
import { lazy } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { user, loading, setUser, logOutUser } = useAuthHook();
  const pathname=usePathname()

  console.log(user);

  const links = (
    <>
      <MyLink href="/">Home</MyLink>
      <MyLink href="/all-labourers">All Labourers</MyLink>
      <MyLink href="">About Us</MyLink>
      <MyLink href="">Help & Support</MyLink>
    </>
  );

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have logged out successfully.",
          showConfirmButton: false,
          timer: 2000,
        });

        setUser(null);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error.code}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

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
          {loading ? (
            <div className="skeleton  w-18 h-10"></div>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                <Image
                  src={
                    user?.photoURL  ? user?.photoURL : "/userDefaultImage.avif"
                  }
                  alt={user?.displayName}
                  width={50}
                  height={50}
                  
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 cursor-pointer"
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content backdrop-blur-lg bg-black/40 text-white space-y-1 rounded-box z-200 min-w-56 p-5 shadow-sm"
              >
                <li className="text-nowrap text-sm capitalize">
                  {user?.displayName}
                </li>
                <li className="text-nowrap text-sm pb-2 border-b border-white/50">
                  {user?.email}
                </li>

                <li  >
                  <Link href="/add-labour" className={`block ${pathname === '/add-labour' ? 'bg-secondary' : ''} hover:bg-secondary py-1 px-3 rounded-lg mt-2 cursor-pointer`}>Add Labour</Link>
                </li>
                <li >
                  <Link href="" className={`block ${pathname === '' ? 'bg-secondary' : ''} hover:bg-secondary py-1 px-3 rounded-lg mt-2 cursor-pointer`}>Manage Labour</Link>
                </li>
                <li
                  className="hover:bg-secondary py-1 px-3 rounded-lg cursor-pointer  block"
                  onClick={handleLogOut}
                >
                  Log out
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/login">
              <button className="btn bg-gray-800  text-secondary  outline-none border-none shadow-none hover:bg-gray-700 ">
                Log in
              </button>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

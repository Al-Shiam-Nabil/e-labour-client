import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-20 text-white">
      <Container>
        <div className=" text-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-11 gap-8 lg:gap-2 pb-[50px] border-b border-gray-600">
          <div className="col-span-full lg:col-span-3 space-y-3 text-left mb-0 md:mb-7 lg:mb-0 lg:pr-[60px]">
            <h3 className="font-semibold text-2xl">
              <span className="text-primary">E-Labour</span>
            </h3>
            <p>
              Welcome to <strong>E-Labour</strong> — where quality work meets
              trust! We connect you with skilled, reliable, and affordable
              labourers. Get the right expertise and build with confidence.
            </p>
          </div>

          <div className="space-y-3  md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Company</h3>
            <ul className="space-y-2 flex flex-col">
              <li>
                {" "}
                <span className="hover:underline cursor-pointer inline-block">
                  About Us
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Our Mission
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Services</h3>
            <ul className="space-y-2 flex flex-col">
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Products & Services
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Customer Stories
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Download Apps
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Information</h3>
            <ul className="space-y-2">
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Terms & Conditions
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Join Us
                </span>
              </li>
            </ul>
          </div>

          <div className=" space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Social Links</h3>
            <ul className="space-y-2 flex flex-col">
              <li>
                <Link
                  className="inline-flex items-center gap-2 hover:underline cursor-pointer "
                  href="https://x.com/"
                  target="_blank"
                >
                  {" "}
                  <FaSquareXTwitter /> X
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex items-center gap-2 hover:underline cursor-pointer "
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  {" "}
                  <ImLinkedin />
                  LinkeDin
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex items-center gap-2 hover:underline cursor-pointer "
                  href="https://www.facebook.com/nabilswear"
                  target="_blank"
                >
                  {" "}
                  <FaFacebookSquare /> Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex flex-wrap items-center gap-2 hover:underline cursor-pointer "
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                >
                  {" "}
                  <MdEmail className="text-lg  min-w-5" />
                  elabour@.gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm py-7">
          © 2025 E-Labour - All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

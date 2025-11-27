
import Container from "@/Components/Shared/Container";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function NotFound() {
  return (
    <Container className="bg-gray-50 h-screen grid place-items-center py-10">
      <div className="text-center">
        <Image
          src="/error.png"
          alt="404 error image"
          width={500}
          height={500}
        ></Image>

        <h2 className="font-semibold text-2xl sm:text-3xl">
          Opps ! Page Not Found.
        </h2>
        <p className="mt-2 mb-3">
          The page you are looking for is not available.
        </p>
        <Link
          href="/"
          className="btn btn-primary hover:btn-secondary text-white outline-none border-none"
        >
          Back To Home
        </Link>
      </div>
    </Container>
  );
}

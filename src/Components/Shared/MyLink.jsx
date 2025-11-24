'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({children,href}) => {
    const pathname=usePathname()
    return (
       <li>
        <Link
          href={href}
          className={`text-base font-medium inline-block duration-200 hover:text-accent/80 ${
            pathname === href ? "text-accent underline" : "text-accent"
          }`}
        >
          {children}
        </Link>
      </li>
    );
};

export default MyLink;
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({children,href}) => {
    const pathname=usePathname()
    return (
       <li>
        <Link
          href={href}
          className={`text-base font-medium inline-block duration-300 hover:scale-110 ${
            pathname === href ? "text-accent" : "text-base-content"
          }`}
        >
          {children}
        </Link>
      </li>
    );
};

export default MyLink;
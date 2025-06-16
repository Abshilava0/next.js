'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {

  const pathname = usePathname();

  const isActive = (href) => pathname === href; 
  // Function to check if the link is active

  return (
    <nav>
      <h1>Black & White Cinema</h1>
      <ul>
        <li>
          <Link href="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={isActive("/about") ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={isActive("/contact") ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

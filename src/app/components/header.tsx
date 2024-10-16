import Link from "next/link";
import Image from "next/image";
import logoSVG from "../assets/logo-new.svg";

export default function Header() {
  return (
    <header className="flex justify-between w-full items-center py-5 max-w-3xl mx-auto">
      <div className="flex items-center">
        <Link href="/">
          <Image src={logoSVG} alt="Reach Out Logo" width={60} height={60} className="mr-2" />
        </Link>
        <h1 className="text-2xl">Reach Out</h1>
      </div>
      <nav className="flex items-center">
        <ul className="flex space-x-5">
          <li>
            <Link href="/" className="font-bold hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-bold hover:text-blue-600">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/blog" className="font-bold hover:text-blue-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/team" className="font-bold hover:text-blue-600">
              Team
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

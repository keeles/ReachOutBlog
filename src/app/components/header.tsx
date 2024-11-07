import Link from "next/link";
import Image from "next/image";
import logoSVG from "../../assets/logo-new.svg";

export default function Header() {
  return (
    <header className="flex justify-between w-full items-center py-5 px-2 flex-col">
      <div className="flex justify-between w-full max-w-3xl py-5 flex-col sm:flex-row">
        <div className="flex items-center self-start py-2 px-1">
          <Link href="/">
            <Image src={logoSVG} alt="Reach Out Logo" width={60} height={60} className="mr-2" />
          </Link>
          <h1 className="text-2xl">ReachOut</h1>
        </div>
        <nav className="flex items-center px-2 self-center">
          <ul className="flex space-x-5">
            <li>
              <Link aria-label="Home" href="/" className="font-bold hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link aria-label="Contact" href="/contact" className="font-bold hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link aria-label="Blog" href="/blog" className="font-bold hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link aria-label="Team" href="/team" className="font-bold hover:text-blue-600">
                Team
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

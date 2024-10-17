import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-gray-800 dark:bg-gray-950 text-white w-full text-center p-5 mt-10 self-end">
      <p className="text-sm">&copy; {new Date().getFullYear()} ReachOut. All rights reserved.</p>
      <p className="text-sm mt-2">555 Seymour St, Vancouver, BC V6B 3H6</p>
      <p className="text-sm mt-2">
        <a href="/contact" className="text-blue-400 hover:underline">
          Contact Us
        </a>
      </p>
      <div className="flex justify-center space-x-4 mt-3">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaInstagram />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}

import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

const links = [
  { href: "https://www.facebook.com", icon: <FaFacebookF /> },
  { href: "https://www.twitch.com", icon: <FaTwitch /> },
  { href: "https://www.instagram.com", icon: <FaInstagram /> },
  { href: "https://www.discord.com", icon: <FaDiscord /> },
  { href: "https://www.github.com", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-10">
        <p className="text-center text-sm font-light md:text-left">
          &copy; 2025 Zentry. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 items-center">
          {links.map(({ href, icon }) => (
            <a
              target="_blank"
              rel="noreferrer noopener" // security measure to prevent XSS attacks
              key={href}
              href={href}
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;

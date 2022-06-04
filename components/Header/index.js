import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { HidingHeader, useHidingHeader } from "hiding-header-react";
import "hiding-header/dist/style.css";

export default function Header({ isCollapsible = false }) {
  return (
    <>
      {isCollapsible ? (
        <HidingHeader>
          <Content />
        </HidingHeader>
      ) : (
        <Content />
      )}
    </>
  );
}

function Content() {
  return (
    <div className="w-full sticky top-0 md:h-20 backdrop-blur-sm px-8 md:px-32 z-20">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="py-6 md:py-2">
          <Link href="/">
            <a className="block">
              <div className="text-white text-xl md:text-base">
                {"Jaagrav Seal's"}
              </div>
              <div className="text-white text-4xl">Code Abode</div>
            </a>
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="https://github.com/Jaagrav">
            <a className="text-white text-2xl" target="_blank">
              <FiGithub />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/Jaagrav">
            <a className="text-white text-2xl" target="_blank">
              <FiLinkedin />
            </a>
          </Link>
          <Link href="mailto:contact@jaagrav.in">
            <a className="text-white text-2xl" target="_blank">
              <FiMail />
            </a>
          </Link>
          <Link href="https://jaagrav.in/">
            <a className="text-white text-2xl" target="_blank">
              <FiExternalLink />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { ComponentPropsWithRef, forwardRef } from "react";

interface FooterType extends ComponentPropsWithRef<"div"> {}

const Footer = forwardRef<HTMLDivElement, FooterType>(() => {
  return (
    <footer className="bg-white text-black py-4 border-t border-gray-300">
      <div className="w-full px-4">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

export default Footer;

import React from "react";

function Footer() {
  return (
    <footer className="flex  min-h-20 w-full justify-center items-center text-sm font-bold uppercase py-4 bg-black text-white">
      <h1 className="mx-2">SpaceX © 2025</h1>
      <h1 className="mx-2 cursor-pointer hover:text-gray-400 transition-all">
        Privacy Policy
      </h1>
      <h1 className="mx-2 cursor-pointer hover:text-gray-400 transition-all">
        Suppliers
      </h1>
    </footer>
  );
}

export default Footer;

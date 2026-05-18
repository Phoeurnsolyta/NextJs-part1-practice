"use client";
import Link from "next/link";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Docs"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Cookie Policy"],
};

export function FooterComponent() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-[220px]">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                <img src="/favicon.svg" className="h-4 w-4" alt="logo" />
              </div>
              <span className="text-[15px] font-semibold text-gray-900 tracking-tight">
                Flowbite React
              </span>
            </Link>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              Build beautiful interfaces faster with our component library.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="flex flex-col gap-3">
                <p className="text-[12px] font-semibold text-gray-900 uppercase tracking-widest">
                  {group}
                </p>
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-[13px] text-gray-400 hover:text-gray-900 transition-colors duration-150"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-gray-400">
            © {new Date().getFullYear()} Flowbite React. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "GitHub", "Discord"].map((platform) => (
              <Link
                key={platform}
                href="#"
                className="text-[12px] text-gray-400 hover:text-gray-900 transition-colors duration-150"
              >
                {platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

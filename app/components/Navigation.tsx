"use client";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

import NavLink from "@/app/components/NavLink";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

const links = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Craft", href: "/craft" },
  { label: "Gear", href: "/gear" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic sub-pages

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="shrink-0 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 26 28"
            version="1.2"
          >            
                <path
                  d="M8.5004 13.6992C7.8369 14.8556 1.2414 23.6827 0.34378 25.4173C-0.47578 29.1177 3.19274 27.8457 3.89523 26.9977C4.20783 26.6203 7.1735 21.9867 7.7979 20.8688C7.9886 20.5275 8.2779 19.6967 8.3968 19.5197C8.467 19.4152 9.2514 19.3253 9.281 19.5197C9.7493 22.6034 10.6079 26.3424 14.0813 27.4217C16.86 28.2851 19.6621 26.4452 20.7159 25.4173C21.041 24.1838 21.846 21.6784 21.0655 22.3259C20.0898 23.1354 19.2183 24.1067 17.0473 24.1067C14.4517 24.1067 13.1056 20.6247 12.7544 19.0571C18.6865 18.2477 27.1163 13.6992 25.5942 6.18268C23.4868 -2.06621 13.691 0.16947 11.5055 0.97894C9.4223 1.75053 2.85721 4.79502 1.16334 9.3435C-0.0855201 12.697 4.09036 13.3908 5.37825 10.0759C6.66614 6.76088 9.7493 4.75647 12.1299 3.75427C14.5106 2.75207 18.4133 3.29172 19.5451 4.37101C20.6768 5.45031 22.1989 7.99437 20.3256 11.6177C18.827 14.5164 14.4585 16.1019 12.4422 16.4745C11.9736 15.5271 11.82 12.8359 10.4908 12.6585C10.0095 12.5942 9.0312 12.7741 8.5004 13.6992Z" 
                  fill="currentColor"
                />
          </svg>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex h-8 w-8 items-center justify-center md:ml-0">
          <ThemeSwitcher />
        </div>

        <Popover className="relative md:hidden">
          <Popover.Button className="flex h-8 w-8 items-center justify-center rounded-lg text-secondary">
            <Bars3Icon className="h-5 w-5 cursor-pointer text-secondary transition-colors hover:text-primary" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl bg-contrast p-2 text-base shadow-md focus:outline-none sm:text-sm">
              <div className="grid">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "rounded-md px-4 py-2 transition-colors hover:text-primary",
                      pathname === link.href
                        ? "bg-secondary font-medium"
                        : "font-normal",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </nav>
    </header>
  );
}

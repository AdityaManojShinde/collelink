"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import ModeToggle from "../ModeToggle";
import Image from "next/image";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Search", link: "/" },
    { name: "Clubs", link: "/" },
    { name: "Events", link: "/" },
    { name: "More", link: "/" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-2">
            <Image
              width={100}
              height={100}
              src="/logo.svg"
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-primary">ColleLink</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, idx) => (
              <Link key={idx} href={item.link} passHref>
                <span className="text-xl font-normal text-foreground hover:text-primary hover:font-bold transition-all transform hover:scale-110 cursor-pointer">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Auth + Dashboard (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <Link href="/sign-up" passHref>
                <span className="px-4 py-1 border border-primary rounded-full text-sm font-medium text-primary hover:bg-muted transition-colors cursor-pointer">
                  Sign Up
                </span>
              </Link>
              <Link href="/sign-in" passHref>
                <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-colors cursor-pointer">
                  Sign In
                </span>
              </Link>
            </SignedOut>

            <SignedIn>
              <Link href="/dashboard" passHref>
                <Button variant={"outline"}>Dashboard</Button>
              </Link>
              <UserButton />
            </SignedIn>
            <ModeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-background/90 backdrop-blur-md">
          <SignedIn>
            <div className="flex flex-row items-center justify-between py-2">
              <Link href="/dashboard" passHref>
                <Button variant={"outline"}>Dashboard</Button>
              </Link>
              <div className="flex justify-center pt-2">
                <UserButton />
              </div>
            </div>
          </SignedIn>
          <div className="flex flex-row items-center justify-between">
            <div className="block text-foreground hover:text-primary hover:font-bold font-medium py-2  transition-all transform hover:scale-105">
              Theme
            </div>{" "}
            <ModeToggle />
          </div>
          {navItems.map((item, idx) => (
            <Link key={idx} href={item.link} passHref>
              <div className="block text-foreground hover:text-primary hover:font-bold font-medium py-2  transition-all transform hover:scale-105">
                {item.name}
              </div>
            </Link>
          ))}

          {/* Auth + Dashboard (Mobile) */}
          <div className="flex flex-col space-y-2 pt-2">
            <SignedOut>
              <Link href="/sign-up" passHref>
                <span className="block w-full text-center px-4 py-2 border border-primary rounded-full text-sm font-medium text-primary hover:bg-muted transition-colors cursor-pointer">
                  Sign Up
                </span>
              </Link>
              <Link href="/sign-in" passHref>
                <span className="block w-full text-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-colors cursor-pointer">
                  Sign In
                </span>
              </Link>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

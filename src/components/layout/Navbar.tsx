"use client";

import { cn } from "@/lib/utils";
import {
  LogInIcon,
  MenuIcon,
  Search,
  ShoppingCart,
  UserRoundPlus,
} from "lucide-react";
import Link from "next/link";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { CommandDialog, CommandInput } from "../ui/command";
import Image from "next/image";

const navigationItems = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/" },
  { label: "Order", href: "/" },
];

const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="lg:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col gap-4 px-4">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}

          <hr className="my-2" />

          <Link href="/login" className="text-sm font-medium">
            Sign In
          </Link>
          <Link href="/register" className="text-sm font-medium">
            Sign Up
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

type SearchCommandDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SearchCommandDialog = ({
  open,
  onOpenChange,
}: SearchCommandDialogProps) => {
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Cari Produk..." />
    </CommandDialog>
  );
};

export const Navbar = () => {
  const [searchCommandDialogIsOpen, setSearchCommandDialogIsOpen] =
    useState(false);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full ",
        "border-b bg-background/70 backdrop-blur-md",
        "h-16 px-4 lg:px-8",
        "flex items-center"
      )}
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="relative h-8 w-32">
            <Image
              src="/logo/logo-nav.png"
              alt="logo dbs"
              fill
              className="object-contain"
              priority
            />
          </div> */}
          <h1 className="font-bold">
            DBS STORE <span className="text-primary">MGV</span>
          </h1>
        </Link>
      </div>

      {/* CENTER MENU  */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium">
        {navigationItems.map((item) => (
          <Link
            key={item.label}                                                                                          
            href={item.href}
            className="hover:text-primary transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* RIGHT */}
      <div className="ml-auto flex items-center gap-2 lg:gap-4">
        {/* Search Desktop */}
        <InputGroup className="hidden lg:flex w-72">
          <InputGroupAddon>
            <Search className="text-primary" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search products..." />
        </InputGroup>

        {/* Search Mobile */}
        <Button
          onClick={() => setSearchCommandDialogIsOpen(true)}
          size="icon"
          variant="ghost"
          className="lg:hidden"
        >
          <Search />
        </Button>

        {/* Cart */}
        <Button size="icon" variant="ghost">
          <ShoppingCart />
        </Button>

        {/* Mobile Menu */}
        <NavigationSheet />

        {/* Auth Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              <LogInIcon />
              Sign In
            </Button>
          </Link>

          <Link href="/register">
            <Button size="sm">
              <UserRoundPlus />
              Sign Up
            </Button>
          </Link>
        </div>
      </div>

      <SearchCommandDialog
        open={searchCommandDialogIsOpen}
        onOpenChange={setSearchCommandDialogIsOpen}
      />
    </nav>
  );
};

"use client";

import { cn } from "@/lib/utils";
import {
  LogInIcon,
  Menu,
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

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/",
  },
  {
    label: "Orders",
    href: "/",
  },
];

const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button size={"icon"} variant={"ghost"} className="lg:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        <div className="px-4 grid grid-cols-1 gap-6">
          {navigationItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href={"/login"}>Sign In</Link>
          <Link href={"/register"}>Sign Up</Link>
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
  onOpenChange,
  open,
}: SearchCommandDialogProps) => {
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search Products..." />
    </CommandDialog>
  );
};

export const Navbar = () => {
  const [searchCommandDialogIsOpen, setSearchCommandDialogIsOpen] =
    useState(false);

  return (
    <nav
      className={cn(
        "bg-background/50 backdrop-blur-md",
        "sticky top-0 z-50",
        "w-full border-b h-16 py-2 px-8",
        "flex items-center justify-between"
      )}
    >
      {/* left side */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingCart className="text-primary" />
            <h1 className="text-xl font-bold">DBS STORE</h1>
          </Link>
        </div>

        <div className="font-medium gap-4 text-sm hidden lg:flex">
          {navigationItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex font-medium gap-4 text-sm">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>Orders</Link>
        </div>
      </div>

      {/* right side */}
      <div className="flex items-center gap-4">
        <InputGroup className="w-80 hidden lg:flex">
          <InputGroupAddon>
            <Search className="text-primary" />
          </InputGroupAddon>

          <InputGroupInput placeholder="Search products..." />
        </InputGroup>

        <Button
          onClick={() => setSearchCommandDialogIsOpen(true)}
          size={"icon"}
          variant={"ghost"}
          className="lg:hidden"
        >
          <Search />
        </Button>

        <Button size="icon" variant="ghost">
          <ShoppingCart />
        </Button>

        <NavigationSheet />

        <div className=" items-center gap-2 justify-between hidden lg:flex">
          <Link href={"/login"}>
            <Button variant="ghost">
              <LogInIcon />
              Sign In
            </Button>
          </Link>

          <Link href={"/register"}>
            <Button>
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

"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Benefits from "../components/Benefits";
import CTASection from "../components/CTASection";

export default function Home() {
  const handleLogout = async () => {
    await authClient.signOut();

    alert("signed out");
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <Benefits />
      <CTASection />
    </div>
  );
}

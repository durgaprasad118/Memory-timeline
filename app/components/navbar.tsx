"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/app/components/theme-provider";
import { PlusCircle } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn("border-b", className)}>
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            Timeline<span className="text-blue-500">Photos</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/collections" className="text-sm font-medium hover:underline">
              Collections
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/collections/new">
            <Button size="sm" className="rounded-full gap-1">
              <PlusCircle className="h-4 w-4" />
              <span className="hidden sm:inline">New Collection</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
} 
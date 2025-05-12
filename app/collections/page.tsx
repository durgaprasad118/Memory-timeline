"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock collections data for demo
const mockCollections = [
  {
    id: "1",
    title: "Travel Adventures",
    description: "My journeys around the world",
    coverImage: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1080",
    isPublic: true,
    entryCount: 12,
  },
  {
    id: "2",
    title: "Fitness Journey",
    description: "Tracking my progress at the gym",
    coverImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1080",
    isPublic: false,
    entryCount: 8,
  },
  {
    id: "3",
    title: "Cooking Experiments",
    description: "Trying new recipes and techniques",
    coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1080",
    isPublic: true,
    entryCount: 15,
  },
];

export default function Collections() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Collections</h1>
        <Link href="/collections/new">
          <Button className="rounded-full flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            New Collection
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCollections.map((collection) => (
          <Link key={collection.id} href={`/collections/${collection.id}`}>
            <Card className="h-full cursor-pointer overflow-hidden transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={collection.coverImage}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                {!collection.isPublic && (
                  <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded-full text-xs font-medium">
                    Private
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{collection.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-muted-foreground text-sm">{collection.description}</p>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">
                {collection.entryCount} {collection.entryCount === 1 ? "memory" : "memories"}
              </CardFooter>
            </Card>
          </Link>
        ))}

        {/* Create new collection card */}
        <Link href="/collections/new">
          <Card className="h-full cursor-pointer transition-all hover:shadow-md border-dashed">
            <div className="flex flex-col items-center justify-center h-full p-8">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <PlusCircle className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">Create New Collection</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Start a new timeline of memories
              </p>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
} 
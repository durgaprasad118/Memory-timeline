"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Timeline } from "@/app/components/ui/timeline";
import { Button } from "@/components/ui/button";

// Demo collection data
const demoCollection = {
  id: "demo",
  title: "Travel Adventures Demo",
  description: "A demo timeline showing a travel journey through different locations.",
  coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1080",
  isPublic: true,
  createdAt: new Date("2023-01-01"),
};

// Demo timeline entries with a travel theme
const demoEntries = [
  {
    id: "demo1",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1080",
    date: new Date("2023-12-15"),
    description: "Paris, France. The view from the Eiffel Tower was breathtaking! We spent the entire day exploring the city's charming streets and cafes.",
  },
  {
    id: "demo2",
    image: "https://images.unsplash.com/photo-1601823984263-b87b59798b70?q=80&w=1080",
    date: new Date("2023-12-10"),
    description: "Santorini, Greece. The white buildings against the blue sea created a perfect contrast. Sunsets here are simply magical.",
  },
  {
    id: "demo3",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1080",
    date: new Date("2023-12-05"),
    description: "New York City, USA. The hustle and bustle of Times Square is electrifying. We caught a Broadway show and walked through Central Park.",
  },
  {
    id: "demo4",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1080",
    date: new Date("2023-11-28"),
    description: "Tokyo, Japan. The blend of tradition and modernity is fascinating. The food was amazing and the city lights at night were spectacular.",
  },
  {
    id: "demo5",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1080",
    date: new Date("2023-11-20"),
    description: "Venice, Italy. Gondola rides through the canals and getting lost in the narrow streets was an unforgettable experience.",
  },
];

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Collection Hero */}
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src={demoCollection.coverImage}
          alt={demoCollection.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <Link href="/" className="flex items-center text-sm mb-4 font-medium hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {demoCollection.title}
            </h1>
            <p className="text-muted-foreground mt-2 max-w-3xl">
              {demoCollection.description}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              This is a demo collection to showcase the Timeline Photos app functionality. 
              Create your own collections and start building your memory timelines!
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Travel Timeline</h2>
          <Link href="/collections/new">
            <Button className="rounded-full">
              Create Your Own Timeline
            </Button>
          </Link>
        </div>
        
        <Timeline data={demoEntries} />
      </div>
    </div>
  );
} 
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Plus, Share2, Settings } from "lucide-react";
import { Timeline } from "@/app/components/ui/timeline";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

// Mock data for a collection
const mockCollection = {
  id: "1",
  title: "Travel Adventures",
  description: "My journeys around the world, capturing beautiful moments and memories.",
  coverImage: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1080",
  isPublic: true,
  createdAt: new Date("2023-01-15"),
};

// Mock entries for the collection
const mockEntries = [
  {
    id: "entry1",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1080",
    date: new Date("2023-10-15"),
    description: "Exploring the mountains in Colorado. The view from the summit was breathtaking!",
  },
  {
    id: "entry2",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1080",
    date: new Date("2023-09-20"),
    description: "Prepared a special dinner with friends. The food was delicious and the company was even better.",
  },
  {
    id: "entry3",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1080",
    date: new Date("2023-08-05"),
    description: "First day at the gym! Starting my fitness journey with enthusiasm and determination.",
  },
  {
    id: "entry4",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1080",
    date: new Date("2023-06-18"),
    description: "Beautiful day in Italy. The architecture and history are simply amazing.",
  },
];

export default function CollectionPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Collection Hero */}
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src={mockCollection.coverImage}
          alt={mockCollection.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <Link href="/collections" className="flex items-center text-sm mb-4 font-medium hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Collections
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{mockCollection.title}</h1>
              <p className="text-muted-foreground mt-2">{mockCollection.description}</p>
              <p className="text-sm text-muted-foreground mt-1">Created {formatDate(mockCollection.createdAt)}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Timeline</h2>
          <Link href={`/collections/${params.id}/new`}>
            <Button size="sm" className="rounded-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Memory
            </Button>
          </Link>
        </div>
        
        {mockEntries.length > 0 ? (
          <Timeline data={mockEntries} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-muted h-20 w-20 rounded-full flex items-center justify-center mb-4">
              <Plus className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No memories yet</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Start adding photos to build your timeline of memories
            </p>
            <Link href={`/collections/${params.id}/new`}>
              <Button className="rounded-full">
                <Plus className="h-4 w-4 mr-2" />
                Add First Memory
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 
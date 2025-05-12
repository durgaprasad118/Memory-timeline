"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Image as ImageIcon, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export default function NewCollection() {
  const router = useRouter();
  const [isPublic, setIsPublic] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [coverImage, setCoverImage] = useState<string | null>(null);

  // Mock file upload preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/collections");
    }, 1500);
  };

  return (
    <div className="container max-w-3xl py-8">
      <Link href="/collections" className="flex items-center text-sm mb-8 font-medium hover:underline">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Collections
      </Link>
      
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Create New Collection</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Cover Image Upload */}
        <div className="space-y-2">
          <Label htmlFor="coverImage">Cover Image</Label>
          <div 
            className={`border-2 border-dashed rounded-lg p-4 text-center ${
              coverImage ? "" : "border-muted-foreground/25 hover:border-muted-foreground/50"
            } transition-all cursor-pointer h-64 flex flex-col items-center justify-center relative overflow-hidden`}
            onClick={() => document.getElementById("coverImage")?.click()}
          >
            <input
              id="coverImage"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleFileChange}
            />
            
            {coverImage ? (
              <div className="absolute inset-0">
                <img src={coverImage} alt="Cover preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button variant="outline" size="sm" type="button" className="bg-background/80">
                    <Upload className="h-4 w-4 mr-2" />
                    Change Image
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <ImageIcon className="h-12 w-12 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Drag and drop or click to upload</p>
                <p className="text-xs text-muted-foreground">Recommended size: 1200 × 800 pixels</p>
              </>
            )}
          </div>
        </div>

        {/* Collection Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="My Travel Adventures" required />
        </div>

        {/* Collection Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Documenting my journeys around the world..." className="min-h-[100px]" />
        </div>

        {/* Privacy Setting */}
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="isPublic">Make Collection Public</Label>
            <p className="text-sm text-muted-foreground">
              Public collections can be viewed by anyone with the link
            </p>
          </div>
          <Switch
            id="isPublic"
            checked={isPublic}
            onCheckedChange={setIsPublic}
          />
        </div>

        <div className="flex gap-4 pt-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Collection"}
          </Button>
        </div>
      </form>
    </div>
  );
} 
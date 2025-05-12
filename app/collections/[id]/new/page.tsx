"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, ImageIcon, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewMemory({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [memoryImage, setMemoryImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [memoryDate, setMemoryDate] = useState("");

  // Mock file upload preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setMemoryImage(event.target?.result as string);
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
      router.push(`/collections/${params.id}`);
    }, 1500);
  };

  return (
    <div className="container max-w-3xl py-8">
      <Link href={`/collections/${params.id}`} className="flex items-center text-sm mb-8 font-medium hover:underline">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Collection
      </Link>
      
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Add a Memory</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Memory Image Upload */}
        <div className="space-y-2">
          <Label htmlFor="memoryImage">Photo</Label>
          <div 
            className={`border-2 border-dashed rounded-lg p-4 text-center ${
              memoryImage ? "" : "border-muted-foreground/25 hover:border-muted-foreground/50"
            } transition-all cursor-pointer h-64 flex flex-col items-center justify-center relative overflow-hidden`}
            onClick={() => document.getElementById("memoryImage")?.click()}
          >
            <input
              id="memoryImage"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleFileChange}
              required
            />
            
            {memoryImage ? (
              <div className="absolute inset-0">
                <img src={memoryImage} alt="Memory preview" className="w-full h-full object-cover" />
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
                <p className="text-sm text-muted-foreground mb-1">Upload a photo for this memory</p>
                <p className="text-xs text-muted-foreground">JPG, PNG, or GIF up to 10MB</p>
              </>
            )}
          </div>
        </div>

        {/* Memory Date */}
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input 
              id="date" 
              type="date" 
              value={memoryDate}
              onChange={(e) => setMemoryDate(e.target.value)}
              className="pl-10"
              required 
            />
          </div>
        </div>

        {/* Memory Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea 
            id="description" 
            placeholder="Describe this memory..." 
            className="min-h-[100px]" 
          />
        </div>

        <div className="flex gap-4 pt-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add to Timeline"}
          </Button>
        </div>
      </form>
    </div>
  );
} 
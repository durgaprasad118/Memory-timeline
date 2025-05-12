import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/app/components/ui/timeline";

// Mock data for demo purposes
const timelineData = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1080",
    date: new Date("2023-10-15"),
    description: "Exploring the mountains in Colorado. The view from the summit was breathtaking!",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1080",
    date: new Date("2023-09-20"),
    description: "Prepared a special dinner with friends. The food was delicious and the company was even better.",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1080",
    date: new Date("2023-08-05"),
    description: "First day at the gym! Starting my fitness journey with enthusiasm and determination.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Life's Journey in a Beautiful Timeline
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground">
            Create collections of your memories, organize them by categories, and share your story with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections">
              <Button size="lg" className="rounded-full">
                Get Started
              </Button>
            </Link>
            <Link href="/collections/demo">
              <Button size="lg" variant="outline" className="rounded-full">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Create Collections</h3>
              <p className="text-muted-foreground">
                Organize your memories into categories like Travel, Fitness, Family, or Events.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Add Memories</h3>
              <p className="text-muted-foreground">
                Upload photos with dates and descriptions to build your timeline.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Share Your Journey</h3>
              <p className="text-muted-foreground">
                Keep your memories private or share them with friends and family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Timeline Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">See It in Action</h2>
          <p className="text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
            Scroll through this demo timeline to see how your memories will look.
          </p>
          <Timeline data={timelineData} />
        </div>
      </section>
    </div>
  );
}

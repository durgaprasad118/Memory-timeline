import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AuthForm from "@/app/auth/components/auth-form";

export default function SignInPage() {
  return (
    <div className="container max-w-screen-lg mx-auto py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-8 text-sm font-medium hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="flex flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to continue with Timeline Photos
          </p>
        </div>

        <AuthForm mode="signin" />
      </div>
    </div>
  );
} 
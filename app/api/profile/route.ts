import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { name, image } = await request.json();
    
    // Basic validation
    if (!name) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
      );
    }
    
    // Update user in database
    const user = await prisma.user.update({
      where: { id: session.user.id as string },
      data: {
        name,
        image,
      },
    });
    
    return NextResponse.json({
      message: "Profile updated successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while updating the profile" },
      { status: 500 }
    );
  }
} 
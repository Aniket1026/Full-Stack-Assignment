import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function Get() {
  try {
    const students = await prisma.student.findMany();
    return NextResponse.json(students);
  } catch (error: any) {
    console.log("Error in fetching students", error.message);
    throw error.message;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const student = await prisma.student.create({
      data: {
        name: body.name,
        cohort: body.cohort,
        status: body.status,
      },
    });
    return NextResponse.json(student);
  } catch (error: any) {
    console.log("Error in new student creation : ", error.message);
    throw error.message;
  }
}

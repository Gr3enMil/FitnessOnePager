// src/app/api/blog/route.js
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blogs = querySnapshot.docs.map(doc => ({ 
      id: doc.id, ...doc.data() }));     
      return NextResponse.json(blogs);
    } catch (error) {
      console.error("Chyba při načítání blogů:", error);
      return NextResponse.json({ error: "Chyba při načítání blogů." }, { status: 500 });
    }
  }

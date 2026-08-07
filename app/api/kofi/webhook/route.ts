import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const data = JSON.parse(form.get("data") as string);

    const email = data.email;
    const productCode = data.shop_item_id;

    if (!email || !productCode) {
      return NextResponse.json(
        { error: "Missing data" },
        { status: 400 }
      );
    }

    // Pronađi kurs po Ko-fi kodu
    const { data: course, error: courseError } = await supabase
      .from("courses")
      .select("id")
      .eq("kofi_product_code", productCode)
      .single();

    if (courseError || !course) {
      throw new Error("Course not found.");
    }

    // Pronađi korisnika po emailu
    const { data: users, error: usersError } =
      await supabase.auth.admin.listUsers();

    if (usersError) throw usersError;

    const user = users.users.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json({
        success: true,
        message: "User is not registered yet.",
      });
    }

    // Dodijeli kurs korisniku
    const { error: insertError } = await supabase
      .from("user_courses")
      .insert({
        user_id: user.id,
        course_id: course.id,
      });

    if (insertError) throw insertError;

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
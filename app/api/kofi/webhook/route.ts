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
    const courseId = data.shop_item_name;

    if (!email || !courseId) {
      return NextResponse.json(
        { error: "Nedostaju podaci." },
        { status: 400 }
      );
    }

    const { data: users, error: userError } =
      await supabase.auth.admin.listUsers();

    if (userError) throw userError;

    const user = users.users.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json({
        success: true,
        message: "Korisnik još nije registrovan.",
      });
    }

    const { error } = await supabase
      .from("user_courses")
      .insert({
        user_id: user.id,
        course_id: courseId,
      });

    if (error) throw error;

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
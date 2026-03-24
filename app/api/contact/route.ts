import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "contact@frontline.rentals",
        to: "alex@frontline.rentals",
        subject: `Contact Form: ${data.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phone || "N/A"}</li>
            <li><strong>Subject:</strong> ${data.subject}</li>
          </ul>
          <h3>Message</h3>
          <p>${data.message}</p>
        `,
      });
    } else {
      console.log("Contact Form Received:", JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}

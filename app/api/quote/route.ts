import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const equipmentLabels: Record<string, string> = {
      "elise-1200": "FirstGreen Elise 1200",
      "cbl-1200": "FirstGreen CBL 1200",
      "drone-lidar": "Drone LiDAR Services",
      "not-sure": "Not sure - need guidance",
    };

    const equipmentList = (data.equipment || [])
      .map((e: string) => equipmentLabels[e] || e)
      .join(", ");

    // If RESEND_API_KEY is set, send via Resend
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "quotes@frontline.rentals",
        to: "alex@frontline.rentals",
        subject: `New Quote Request: ${equipmentList}`,
        html: `
          <h2>New Quote Request</h2>
          <h3>Equipment</h3>
          <p>${equipmentList}</p>
          <h3>Project Details</h3>
          <ul>
            <li><strong>Type:</strong> ${data.projectType}</li>
            <li><strong>Location:</strong> ${data.projectLocation}, ${data.zipCode}</li>
            <li><strong>Start Date:</strong> ${data.startDate}</li>
            <li><strong>Duration:</strong> ${data.duration}</li>
            <li><strong>Delivery:</strong> ${data.deliveryPreference}</li>
          </ul>
          <h3>Contact Information</h3>
          <ul>
            <li><strong>Name:</strong> ${data.contactName}</li>
            <li><strong>Company:</strong> ${data.companyName || "N/A"}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Heard About Us:</strong> ${data.hearAboutUs || "N/A"}</li>
          </ul>
          ${data.notes ? `<h3>Notes</h3><p>${data.notes}</p>` : ""}
          ${data.needDvbeDocs ? "<p><strong>DVBE documentation requested</strong></p>" : ""}
        `,
      });
    } else {
      // Log to console when no API key is configured
      console.log("Quote Request Received:", JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit quote request" },
      { status: 500 }
    );
  }
}

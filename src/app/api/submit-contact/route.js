// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const text = await req.text();
//     const params = new URLSearchParams(text);

//     const fullName = params.get("fullName");
//     const email = params.get("email");
//     const contactNo = params.get("contactNo");
//     const projectDetails = params.get("projectDetails");

//     if (!fullName || !email || !contactNo) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     // Construct the payload to Google Sheets (rename as needed)
//     const sheetData = new URLSearchParams();
//     sheetData.append("fullName", fullName);
//     sheetData.append("email", email);
//     sheetData.append("contactNo", contactNo);
//     sheetData.append("projectDetails", projectDetails || "");
//     sheetData.append("timestamp", new Date().toISOString());

//     // ✅ Replace with your actual Google Apps Script Web App URL
//     const res = await fetch("https://script.google.com/macros/s/AKfycbwKrJ5j0kMLfFbJqvMzVlLrns0vaG08uTzX3Ffd0LkM0BfcgRwzmGv267lH4Rp__ags/exec", {
//       method: "POST",
//       body: sheetData,
//     });

//     if (!res.ok) {
//       return NextResponse.json({ error: "Failed to write to sheet" }, { status: 502 });
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("❌ API error:", error);
//     return NextResponse.json({ error: "Internal error" }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.text();
    const params = new URLSearchParams(body);

    const fullName = params.get("fullName");
    const email = params.get("email");
    const contactNo = params.get("contactNo");
    const projectDetails = params.get("projectDetails");

    if (!fullName || !email || !contactNo) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("Received data:", { fullName, email, contactNo, projectDetails });

    const sheetData = new URLSearchParams();
    sheetData.append("fullName", fullName);
    sheetData.append("email", email);
    sheetData.append("contactNo", contactNo);
    sheetData.append("projectDetails", projectDetails || "");
    sheetData.append("timestamp", new Date().toISOString());

    const googleAppsScriptURL = "https://script.google.com/macros/s/AKfycbwKrJ5j0kMLfFbJqvMzVlLrns0vaG08uTzX3Ffd0LkM0BfcgRwzmGv267lH4Rp__ags/exec"; // 👈 Replace this

    const res = await fetch(googleAppsScriptURL, {
      method: "POST",
      body: sheetData,
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to write to Google Sheet" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

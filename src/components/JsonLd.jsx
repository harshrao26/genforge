// components/JsonLd.jsx
"use client";
import Script from "next/script";

export default function JsonLd({ data, id }) {
  return (
    <Script
      id={id || "jsonld-" + Math.random().toString(36).slice(2)}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
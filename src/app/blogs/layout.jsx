 import "../globals.css";
import Header from "@/components/Header2";
import Footer from "@/components/Footer2";

 

export const metadata = {
  title: "GenForge Blog – Tips & Stories for Business Growth",
  description: "Explore expert insights, case studies, and digital strategies on the GenForge blog.",
  keywords: ["GenForge blog", "website tips", "business growth", "SEO strategies"],
  openGraph: {
    title: "GenForge Blog – Tips & Stories for Business Growth",
    description: "Explore expert insights, case studies, and digital strategies on the GenForge blog.",
    url: "https://genforgestudio.com/blogs",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "GenForge Blog Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenForge Blog",
    description: "Explore insights & stories for business growth.",
    images: ["/logo.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />

      <body
       >
        {children}
      </body>
      <Footer/> 
    </html>
  );
}

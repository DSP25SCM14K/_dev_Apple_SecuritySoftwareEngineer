import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dsp25scm14k.github.io/_dev_Apple_SecuritySoftwareEngineer/"),
  title: {
    default: "Dev Kumar — Systems & OS Security Engineer",
    template: "%s · Dev Kumar",
  },
  description:
    "Systems and OS security engineering across containment, mandatory access control, policy engines, kernel, userland, and Apple platforms.",
  openGraph: {
    title: "Dev Kumar — Systems & OS Security Engineer",
    description: "Build the boundary. Prove the path.",
    images: ["./security-system.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Kumar — Systems & OS Security Engineer",
    description: "Build the boundary. Prove the path.",
    images: ["./security-system.png"],
  },
  icons: {
    icon: "./favicon.svg",
    shortcut: "./favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#090b0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SleepSync — Correlate Sleep with Work Performance",
  description: "Connect sleep tracking data with calendar events and productivity metrics to identify optimal sleep patterns for peak performance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="76700d19-80d7-472b-a2f9-adf3c0060396"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

import { Metadata } from "next";
import ClientRedirect from "./page.client";

export const metadata: Metadata = {
  title: "Redirecting...",
  other: {
    refresh: "0; url=/publications",
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://aspirelabiith.github.io/publications",
  },
};

export default function ResearchPage() {
  return <ClientRedirect />;
}

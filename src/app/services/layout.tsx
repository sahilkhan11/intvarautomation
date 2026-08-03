import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Intvar Suite",
  description: "Explore our AI automation services designed for modern businesses.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

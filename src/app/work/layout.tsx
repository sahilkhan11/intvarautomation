import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Intvar Suite",
  description: "Explore our case studies and successful automation implementations.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

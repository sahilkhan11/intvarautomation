import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Intvar Suite",
  description: "Get in touch with us to start automating your business.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Restaurant POS Software in Alwar | Food Delivery Software",
  description: "Modern POS and restaurant management software in Alwar. Manage billing, KOT, inventory, and online orders from a single dashboard.",
  alternates: {
    canonical: "/industries/restaurants"
  }
};

export default function RestaurantsIndustryPage() {
  const schemaDescription = "Restaurant POS Software, KOT Management, and Food Delivery Automation for restaurants and cafes in Alwar, Rajasthan.";
  
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceSchema 
        serviceName="Restaurant POS Software" 
        description={schemaDescription}
        areaServed={["Alwar", "Rajasthan"]}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Industries", item: "https://intvarautomation.online/industries" },
          { name: "Restaurants", item: "https://intvarautomation.online/industries/restaurants" }
        ]}
      />

      <PageHero 
        variant="dark"
        eyebrow="FOOD & BEVERAGE"
        title="Restaurant POS Software Alwar"
        subtitle="Stop losing money to missed orders and ingredient waste. We build all-in-one Restaurant POS and food delivery software that manages your billing, kitchen, and inventory from a single screen."
      />

      <Section variant="dark" className="py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">The Friction of Manual KOTs & Billing</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Running a successful restaurant in Alwar is chaotic enough without worrying about lost paper tickets or delayed orders. Manual Kitchen Order Tickets (KOTs) slow down your service and lead to inevitable miscommunications between your waitstaff and the kitchen. When bills are calculated manually or on outdated systems during the weekend rush, mistakes happen, tables turn over slower, and customers leave frustrated. And without strict raw material tracking, silent pilferage and food waste can quietly eat away at your profit margins.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold uppercase">Our Smart POS System</h2>
            <p className="opacity-70 leading-relaxed text-lg">
              Our smart Restaurant POS system brings absolute clarity to your operations. As soon as an order is punched in, digital KOTs are instantly fired to the kitchen displays—eliminating shouting matches and lost tickets. The software seamlessly handles table management, split bills, and integrations with food delivery apps (like Zomato and Swiggy) right from a single dashboard. Meanwhile, the backend continuously tracks recipe-level inventory, so you know exactly how much cheese, flour, and oil is being consumed versus what's actually sitting in your storeroom.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-3xl font-heading font-bold uppercase">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Can it handle multiple outlets?</h3>
                <p className="opacity-70">Yes. Our cloud-based architecture allows you to manage multiple branches, cafes, or cloud kitchens from a centralized master dashboard. You can track live sales, update menus, and compare outlet performance on your smartphone while sitting anywhere in the world.</p>
              </div>
              <div className="border-b border-foreground/10 pb-6">
                <h3 className="font-bold text-xl mb-2">Does it track raw material inventory?</h3>
                <p className="opacity-70">Absolutely. We implement recipe-level (BOM) inventory management. If you sell a pizza, the software automatically deducts the exact grams of cheese, dough, and toppings from your stock. This prevents theft, reduces wastage, and triggers alerts when raw materials run low.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 items-center text-center border-t border-foreground/10 pt-16">
            <h2 className="text-2xl font-bold uppercase">Ready to streamline your restaurant?</h2>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Demo
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm opacity-60">
              <span>Related Services:</span>
              <Link href="/services/software-development" className="underline hover:opacity-100">Custom Software</Link>
              <span>|</span>
              <Link href="/services/business-automation" className="underline hover:opacity-100">Business Automation</Link>
              <span>|</span>
              <Link href="/locations/alwar" className="underline hover:opacity-100">IT Company in Alwar</Link>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}

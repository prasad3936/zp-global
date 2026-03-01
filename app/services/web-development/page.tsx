import ServicePricing from "@/components/ServicePricing";
import ServicePortfolio from "@/components/ServicePortfolio";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceLeadForm from "@/components/ServiceLeadForm";
import { title } from "process";

export default function WebDevelopment() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Web Development Services</h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Custom websites and scalable web applications designed for growth.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
        <ul className="text-gray-400 space-y-2">
          <li>✔ Corporate Websites</li>
          <li>✔ SaaS Platforms</li>
          <li>✔ Admin Dashboards</li>
          <li>✔ API Integrations</li>
          <li>✔ Performance Optimization</li>
        </ul>
      </section>

      {/* Pricing */}
      <ServicePricing
        plans={[
          {
            name: "Starter",
            price: "₹9,999",
            features: [
              "5 Pages (Home, About, Gallery, Contact, Donate)",
              "Mobile Responsive",
              "Contact Form",
              "Basic UPI Donation Link",
              "1 Revision",
              "With Hosting + Domain (1 Year): ₹10,999",
            ],
          },
          {
            name: "Standard",
            price: "₹17,999",
            features: [
              "Everything in Starter",
              "Events Section",
              "Sticky Donate Button",
              "Engagement Popup",
              "Bilingual (English + Marathi)",
              "Basic SEO",
              "2 Revisions",
              "With Hosting + Domain (1 Year): ₹20,999",
            ],
          },
          {
            name: "Enterprise",
            price: "₹29,000",
            features: [
              "Everything in Standard",
              "Admin Panel",
              "Advanced Donation Setup",
              "Blog Section",
              "Advanced SEO",
              "1 Month Support",
              "With Hosting + Domain (1 Year): ₹33,999",
            ],
          },
        ]}
      />

      {/* Testimonials */}
      <ServiceTestimonials
        projects={[
          {
            title: "Healthcare SaaS",
            image: "/products/medisync-1.jpg",
            link: "https://harmonyhomeocare-b4rt.onrender.com",
          },
          {
            title: "Inventory Platform",
            image: "/products/stock8ease-1.png",
            link: "https://stock8easev1.onrender.com/",
          },
          {title:"NGO Website", image:"/portfolio/ngo.png", link:"https://indiansocialwelfare.netlify.app/"},    
        ]}
      />

      {/* Lead Capture */}
      <ServiceLeadForm />
    </div>
  );
}

import ServicePricing from "@/components/ServicePricing";
import ServicePortfolio from "@/components/ServicePortfolio";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceLeadForm from "@/components/ServiceLeadForm";

export default function MobileDevelopment() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Mobile App Development</h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Scalable Android & iOS applications designed for performance,
          reliability and business growth.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
        <ul className="text-gray-400 space-y-2">
          <li>✔ Android Applications</li>
          <li>✔ iOS Applications</li>
          <li>✔ Cross-platform (React Native / Flutter)</li>
          <li>✔ Backend API Integration</li>
          <li>✔ App Store Deployment</li>
        </ul>
      </section>

      {/* Portfolio */}
      <ServicePortfolio
        projects={[
          {
            title: "Healthcare Mobile App",
            image: "/products/medisync-1.jpg",
            link: "https://your-live-mobile-link.com",
          },
          {
            title: "Inventory Mobile Panel",
            image: "/products/stock8ease-1.png",
            link: "https://your-live-mobile-link.com",
          },
        ]}
      />

      {/* Pricing */}
      <ServicePricing
        plans={[
          {
            name: "Starter App",
            price: "₹79,999",
            features: ["Single Platform", "Basic UI", "API Integration"],
          },
          {
            name: "Business App",
            price: "₹1,49,999",
            features: ["Android + iOS", "Advanced UI", "Push Notifications"],
          },
          {
            name: "Enterprise App",
            price: "Custom",
            features: ["Full Backend", "Scalable Infra", "Ongoing Support"],
          },
        ]}
      />

      {/* Testimonials */}
      <ServiceTestimonials
        projects={[
          {
            title: "Healthcare Mobile App",
            image: "/products/medisync-1.jpg",
            link: "https://your-live-mobile-link.com",
          },
          {
            title: "Inventory Mobile Panel",
            image: "/products/stock8ease-1.png",
            link: "https://your-live-mobile-link.com",
          },
        ]}
      />

      {/* Lead Capture */}
      <ServiceLeadForm />
    </div>
  );
}

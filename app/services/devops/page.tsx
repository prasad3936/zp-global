import ServicePricing from "@/components/ServicePricing";
import ServicePortfolio from "@/components/ServicePortfolio";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceLeadForm from "@/components/ServiceLeadForm";

export default function DevOps() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">DevOps & Cloud Services</h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Cloud-native infrastructure, CI/CD automation and scalable deployment
          strategies.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
        <ul className="text-gray-400 space-y-2">
          <li>✔ AWS Infrastructure Setup</li>
          <li>✔ CI/CD Pipeline Automation</li>
          <li>✔ Docker & Kubernetes</li>
          <li>✔ Monitoring & Logging</li>
          <li>✔ Cost Optimization</li>
        </ul>
      </section>

      {/* Portfolio */}
      <ServicePortfolio
        projects={[
          {
            title: "CI/CD Automation for SaaS",
            image: "/products/ledger-1.png",
            link: "https://your-live-devops-project.com",
          },
          {
            title: "Cloud Deployment Architecture",
            image: "/products/stock8ease-1.png",
            link: "https://your-live-devops-project.com",
          },
        ]}
      />

      {/* Pricing */}
      <ServicePricing
        plans={[
          {
            name: "Startup Infra",
            price: "₹49,999",
            features: [
              "Basic Cloud Setup",
              "Single Environment",
              "Docker Setup",
            ],
          },
          {
            name: "Growth Infra",
            price: "₹1,29,999",
            features: ["Multi Env Setup", "CI/CD Pipeline", "Monitoring"],
          },
          {
            name: "Enterprise DevOps",
            price: "Custom",
            features: ["Kubernetes", "Auto Scaling", "High Availability"],
          },
        ]}
      />

      {/* Testimonials */}
      <ServiceTestimonials
        projects={[
          {
            name: "Client Name",
            title: "Company Role",
            feedback: "Great DevOps services that transformed our infrastructure.",
            image: "/testimonials/client-1.png",
          },
          {
            name: "Another Client",
            title: "Company Role",
            feedback: "Excellent CI/CD pipeline setup and support.",
            image: "/testimonials/client-2.png",
          },
        ]}
      />

      {/* Lead Capture */}
      <ServiceLeadForm />
    </div>
  );
}

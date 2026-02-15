import ScreenshotSection from "@/components/ScreenshotSection";
import FeatureGrid from "@/components/FeatureGrid";
import PricingSection from "@/components/PricingSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import UseCasesSection from "@/components/UseCasesSection";
import DemoForm from "@/components/DemoForm";

export default function Stock8Ease() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Stock8Ease</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Smart Inventory & Supply Chain Management Platform built for scalable
          multi-branch operations.
        </p>
      </section>

      {/* Features */}
      <FeatureGrid
        features={[
          "Real-Time Stock Tracking",
          "Multi-Warehouse Management",
          "Supplier Integration",
          "Low Stock Alerts",
          "Sales Analytics",
          "Secure Access Controls",
        ]}
      />

      {/* Screenshot Section */}
      <ScreenshotSection
        images={[
          "/products/stock8ease-1.png",
          "/products/stock8ease-2.png",
          "/products/stock8ease-3.png",
        ]}
        //videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      />

      {/* Optional: Add second screenshot if you have it */}
      {/* <ScreenshotSection image="/products/stock8ease-2.png" /> */}

      {/* Architecture */}
      <ArchitectureSection />

      {/* Use Cases */}
      <UseCasesSection
        cases={[
          "Retail Chains",
          "Wholesale Distributors",
          "Pharma Warehouses",
          "E-commerce Businesses",
        ]}
      />

      {/* Pricing */}
      <PricingSection />

      {/* Demo Form */}
      <DemoForm product="Stock8Ease" />
    </div>
  );
}

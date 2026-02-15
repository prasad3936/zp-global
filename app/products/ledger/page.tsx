import ScreenshotSection from "@/components/ScreenshotSection";

export default function Ledger() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Ledger</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Enterprise Financial & Accounting Automation Platform designed for
          modern businesses.
        </p>
      </section>

      {/* Screenshot + Video Section */}
      <ScreenshotSection
        images={[
          "/products/ledger-1.png",
          "/products/ledger-2.png",
          "/products/ledger-3.png",
        ]}
       // videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      />

      {/* Problem */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
        <p className="text-gray-400 leading-relaxed">
          Many businesses rely on manual bookkeeping, fragmented financial
          tools, and disconnected reporting systems leading to inefficiencies
          and compliance risks.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Our Solution</h2>
        <p className="text-gray-400 leading-relaxed">
          Ledger automates accounting workflows, centralizes financial data, and
          provides real-time reporting dashboards to improve transparency and
          strategic financial decision-making.
        </p>
      </section>

      {/* Features */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-10">Core Features</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Expense & Income Tracking",
            "Automated Invoicing",
            "Financial Reporting",
            "Multi-Business Support",
            "Tax-Ready Structure",
            "Secure Role Permissions",
          ].map((feature) => (
            <div
              key={feature}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">
          Architecture & Compliance
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Designed with scalable SaaS architecture and secure cloud deployment,
          Ledger supports growing businesses while maintaining financial data
          integrity, audit traceability, and compliance readiness.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-6">
          Modernize Your Financial Operations
        </h2>
        <button className="bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-500 transition">
          Schedule Consultation
        </button>
      </section>
    </div>
  );
}

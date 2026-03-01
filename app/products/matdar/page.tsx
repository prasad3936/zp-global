import ScreenshotSection from "@/components/ScreenshotSection";

export default function Matdar() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Matdar</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Built for candidates, karyakartas and booth teams who need real-time,
          accurate voter data.Digital Electoral Data & Political Intelligence
          Platform built for structured campaign management and data-driven
          electoral strategy.
        </p>
      </section>

      {/* Screenshot + Video Section */}
      <ScreenshotSection
        images={[
          "/products/matdar-1.png",
          "/products/matdar-2.png",
          "/products/matdar-3.png",
        ]}
        videoUrl="https://www.youtube.com/embed/HCNbg-RxXwE"
      />

      {/* Overview */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Platform Overview</h2>
        <p className="text-gray-400 leading-relaxed">
          Matdar enables structured electoral data management, voter
          segmentation, campaign coordination, booth-level intelligence, and
          analytics-driven political strategy development. Designed for
          scalability and secure data handling, it supports modern digital
          campaign operations.
        </p>
      </section>

      {/* Core Capabilities */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-10">Core Capabilities</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Smart Voter Search",
            "Filtered Voter Lists & Live Charts",
            "Advanced Analytics & Insights",
            "Family Tree & Voter Linkage",
            "Voter PDF Lists & Custom Voter Cards",
            "EVM Simulation & Booth-Level Data",
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

      {/* Architecture & Security */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">
          Architecture & Data Security
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Built on a scalable SaaS architecture with secure data access layers,
          Matdar ensures confidentiality, structured access control, and
          performance across large electoral datasets.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-6">
          Power Your Campaign with Data Intelligence
        </h2>
        <button className="bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-500 transition">
          Request Platform Demo
        </button>
      </section>
    </div>
  );
}

import ScreenshotSection from "@/components/ScreenshotSection";

export default function MediSync() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">MediSync</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Enterprise-grade Healthcare & Hospital Management Platform designed
          for scalable, secure, multi-tenant deployment.
        </p>
      </section>

      {/* Screenshot + Video Section */}
      <ScreenshotSection
        images={[
          "/products/medisync-1.jpg",
          "/products/medisync-2.png",
          "/products/medisync-3.png",
        ]}
        //videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      />

      {/* Problem */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
        <p className="text-gray-400 leading-relaxed">
          Healthcare institutions struggle with fragmented systems, manual
          workflows, disconnected patient data, and inefficient operational
          coordination across departments.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Our Solution</h2>
        <p className="text-gray-400 leading-relaxed">
          MediSync provides a centralized, cloud-native healthcare
          infrastructure enabling hospitals and clinics to manage appointments,
          billing, patient records, analytics, reporting, and operational
          workflows seamlessly.
        </p>
      </section>

      {/* Features */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-10">Core Features</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Patient Record Management",
            "Doctor Scheduling & Appointments",
            "Billing & Digital Payments",
            "Analytics & Reporting Dashboard",
            "Multi-Clinic & Multi-Branch Support",
            "Secure Role-Based Access Control",
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
        <h2 className="text-3xl font-semibold mb-6">Architecture & Security</h2>
        <p className="text-gray-400 leading-relaxed">
          Built on cloud-native microservices architecture with multi-tenant
          SaaS design, MediSync ensures scalability, secure patient data
          handling, audit logging, and compliance readiness for modern
          healthcare institutions.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-6">
          Ready to Transform Healthcare Operations?
        </h2>
        <button className="bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-500 transition">
          Request Demo
        </button>
      </section>
    </div>
  );
}

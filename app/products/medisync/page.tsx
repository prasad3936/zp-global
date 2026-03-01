import DemoForm from "@/components/DemoForm";
import ScreenshotSection from "@/components/ScreenshotSection";

export default function MediSync() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          🌿 MediSync – Virtual Practice Management
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          A complete digital practice system designed specifically for
          Homeopathy Clinics. Built for single-doctor virtual consultation
          workflows with full control and transparency.
        </p>
        <p className="text-green-400 mt-4 font-semibold">
          Current Version: Single Doctor Model
        </p>
      </section>

      {/* Screenshot Section */}
      <ScreenshotSection
        images={[
          "/products/medisync-1.jpg",
          "/products/medisync-2.png",
          "/products/medisync-3.png",
        ]}
      />

      {/* Core Structure Overview */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">
          Complete Virtual Practice Workflow
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-400">
          <div>
            <h4 className="text-white font-semibold mb-2">
              Public Clinic Page
            </h4>
            <p>
              Doctor profile, consultation details, booking system and
              appointment status tracking — all in one hosted web app.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">
              Slot & Appointment Management
            </h4>
            <p>
              Admin-controlled slot creation with one-patient-per-slot structure
              and transparent booking reference generation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">
              Manual Payment & Confirmation
            </h4>
            <p>
              Secure manual verification workflow with screenshot upload and
              controlled appointment confirmation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">
              Consultation & Prescription Handling
            </h4>
            <p>
              Report uploads, meeting link sharing, prescription PDF management
              and internal record tracking.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">
              Medicine Dispatch Tracking
            </h4>
            <p>
              Manual dispatch status updates with courier tracking visibility
              for patients.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">
              Appointment Transparency
            </h4>
            <p>
              Patients can check booking ID status including payment,
              confirmation and dispatch progress.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          💰 Pricing Plans
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Basic Plan */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              🌿 Basic
            </h3>

            <p className="text-gray-400 mb-6">
              Hosted web platform for single-doctor virtual practice.
            </p>

            <p className="text-4xl font-bold mb-6">
              ₹1,499
              <span className="text-lg text-gray-400"> /month</span>
            </p>

            <ul className="text-gray-400 space-y-2 mb-8">
              <li>✔ Web App Hosting</li>
              <li>✔ Appointment & Slot Management</li>
              <li>✔ Manual Payment Workflow</li>
              <li>✔ Prescription & Report Handling</li>
            </ul>

            <button className="w-full bg-green-600 hover:bg-green-500 py-3 rounded-xl transition">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-white/5 border border-blue-500 rounded-2xl p-10 scale-105 shadow-xl">
            <span className="absolute top-4 right-4 bg-blue-600 text-sm px-3 py-1 rounded-full">
              Recommended
            </span>

            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              🚀 Pro
            </h3>

            <p className="text-gray-400 mb-6">
              Complete digital practice solution with mobile access.
            </p>

            <p className="text-4xl font-bold mb-6">
              ₹3,499
              <span className="text-lg text-gray-400"> /month</span>
            </p>

            <ul className="text-gray-400 space-y-2 mb-8">
              <li>✔ Everything in Basic</li>
              <li>✔ Mobile App Access</li>
              <li>✔ Push Notifications</li>
              <li>✔ Enhanced Branding</li>
            </ul>

            <button className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl transition">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-6">
          Digitize Your Homeopathy Practice Today
        </h2>
        <button className="bg-green-600 px-8 py-3 rounded-xl hover:bg-green-500 transition">
          Request Demo
        </button>
      </section>
      {/* Demo Form */}
            <DemoForm product="MediSync" /> 
    </div>
  );
}

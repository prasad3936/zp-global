export default function CaseStudies() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Real-world digital solutions delivered across healthcare, SaaS,
          infrastructure and automation.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">
            Real-Time Server Monitoring SaaS
          </h3>
          <p className="text-gray-400">
            Designed and deployed a containerized monitoring platform with
            real-time metrics and dashboard visualization.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">
            Virtual Homeopathy Practice System
          </h3>
          <p className="text-gray-400">
            Built end-to-end virtual consultation system with slot booking,
            payment workflow and prescription management.
          </p>
        </div>
      </div>
    </div>
  );
}

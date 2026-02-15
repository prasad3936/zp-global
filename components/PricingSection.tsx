export default function PricingSection() {
  return (
    <section className="my-24 text-center">
      <h2 className="text-3xl font-semibold mb-10">Pricing Model</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Starter</h3>
          <p className="text-gray-400 mb-4">For Small Teams</p>
          <p className="text-3xl font-bold mb-6">₹999/mo</p>
        </div>

        <div className="bg-blue-600/20 border border-blue-500 p-8 rounded-xl scale-105">
          <h3 className="text-xl font-semibold mb-4">Professional</h3>
          <p className="text-gray-400 mb-4">Growing Businesses</p>
          <p className="text-3xl font-bold mb-6">₹2999/mo</p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
          <p className="text-gray-400 mb-4">Custom Deployment</p>
          <p className="text-3xl font-bold mb-6">Custom</p>
        </div>
      </div>
    </section>
  );
}

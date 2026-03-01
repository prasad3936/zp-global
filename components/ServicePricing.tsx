export default function ServicePricing({ plans }: { plans: any[] }) {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Pricing Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>

            <p className="text-3xl font-bold mb-4">{plan.price}</p>

            <ul className="text-gray-400 space-y-2 mb-6">
              {plan.features.map((feature: string, i: number) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <a
              href={`https://wa.me/919637354092?text=Hi%20I%20am%20interested%20in%20the%20${plan.name}%20web%20development%20package`}
              target="_blank"
              className="block text-center w-full bg-blue-600 py-2 rounded-xl hover:bg-blue-500 transition"
            >
              Enquire Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

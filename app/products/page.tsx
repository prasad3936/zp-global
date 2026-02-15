import Link from "next/link";

const products = [
  {
    name: "MediSync",
    desc: "Healthcare Infrastructure Platform",
    link: "/products/medisync",
  },
  {
    name: "Matdar",
    desc: "Electoral Intelligence System",
    link: "/products/matdar",
  },
  {
    name: "Stock8Ease",
    desc: "Inventory & Supply Chain Platform",
    link: "/products/stock8ease",
  },
  {
    name: "Ledger",
    desc: "Financial Automation Platform",
    link: "/products/ledger",
  },
];

export default function Products() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-16">
        Our Enterprise Platforms
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {products.map((p) => (
          <Link key={p.name} href={p.link}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl hover:scale-105 transition">
              <h2 className="text-2xl font-semibold mb-4">{p.name}</h2>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

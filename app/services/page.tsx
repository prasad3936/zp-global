import Link from "next/link";

export default function Services() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          We design, build and deploy scalable digital infrastructure across
          web, mobile and cloud ecosystems.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-10">
        <Link href="/services/web-development">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-400">
              Modern, scalable web applications tailored to business needs.
            </p>
          </div>
        </Link>

        <Link href="/services/mobile-development">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-green-500 transition">
            <h3 className="text-2xl font-semibold mb-4">Mobile Development</h3>
            <p className="text-gray-400">
              High-performance Android & iOS applications with modern UX.
            </p>
          </div>
        </Link>

        <Link href="/services/devops">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-purple-500 transition">
            <h3 className="text-2xl font-semibold mb-4">DevOps Services</h3>
            <p className="text-gray-400">
              Cloud infrastructure, CI/CD automation and scalable deployments.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

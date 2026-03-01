import Image from "next/image";

export default function ServicePortfolio({ projects }: { projects: any[] }) {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-semibold mb-12">Project Portfolio</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover"
            />

            <div className="p-6">
              <h3 className="font-semibold mb-2">{project.title}</h3>

              <a
                href={project.link}
                target="_blank"
                className="text-blue-400 text-sm"
              >
                View Live Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

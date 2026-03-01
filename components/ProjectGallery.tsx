import Image from "next/image";

export default function ProjectGallery() {
  const projects = [
    { title: "Healthcare SaaS", image: "/products/medisync-1.jpg" },
    { title: "Inventory Platform", image: "/products/stock8ease-1.png" },
    { title: "Accounting System", image: "/products/ledger-1.png" },
  ];

  return (
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
            <h3 className="text-lg font-semibold">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

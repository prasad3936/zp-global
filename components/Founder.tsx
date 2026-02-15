import Image from "next/image";

export default function Founder() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-20 px-6">
      
      <div className="flex justify-center">
        <Image
          src="/founder1000.jpg"
          alt="Founder"
          width={400}
          height={600}
          className="rounded-2xl shadow-2xl object-cover"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Founder</h2>
        <p className="text-gray-400 leading-relaxed">
          Founder of ZP Global Systems, focused on designing scalable,
          cloud-native SaaS platforms across healthcare, governance,
          retail, and finance ecosystems.
        </p>
      </div>
    </div>
  );
}

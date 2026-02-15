import Founder from "@/components/Founder";

export default function About() {
  return (
    <div className="pt-32">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          ZP Global Systems is focused on designing and operating scalable,
          multi-tenant SaaS platforms.
        </p>
      </div>
      <Founder />
    </div>
  );
}

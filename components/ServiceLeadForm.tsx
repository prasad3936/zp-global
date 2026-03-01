"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ServiceLeadForm({
  service = "General",
}: {
  service?: string;
}) {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1️⃣ Save to Supabase
    const { error } = await supabase.from("service_leads").insert([
      {
        name: form.name,
        email: form.email,
        message: form.message,
        service,
      },
    ]);

    if (error) {
      alert("Something went wrong. Please try again.");
      return;
    }

    // 2️⃣ Trigger WhatsApp
    const text = `New Service Enquiry:
Service: ${service}
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`;

    const encodedText = encodeURIComponent(text);

    window.open(`https://wa.me/919637354092?text=${encodedText}`, "_blank");

    // 3️⃣ Redirect to Thank You Page
    router.push("/thank-you");
  };

  return (
    <section className="mb-24">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Request Consultation</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full p-3 bg-black border border-gray-700 rounded-xl"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            required
            placeholder="Email"
            className="w-full p-3 bg-black border border-gray-700 rounded-xl"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            required
            placeholder="Project Requirements"
            className="w-full p-3 bg-black border border-gray-700 rounded-xl"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-green-600 py-3 rounded-xl hover:bg-green-500 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

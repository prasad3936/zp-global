"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DemoForm({ product }: { product: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase
      .from("demo_requests")
      .insert([{ ...form, product }]);

    if (!error) {
      setSuccess(true);
      setForm({ name: "", email: "", company: "", message: "" });
    }
  };

  return (
    <section className="my-24">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Request a Demo
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white/5 p-8 rounded-xl border border-white/10"
      >
        <input
          placeholder="Name"
          className="w-full mb-4 p-3 bg-gray-800 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          placeholder="Email"
          className="w-full mb-4 p-3 bg-gray-800 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          placeholder="Company"
          className="w-full mb-4 p-3 bg-gray-800 rounded"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />

        <textarea
          placeholder="Message"
          className="w-full mb-4 p-3 bg-gray-800 rounded"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="bg-blue-600 w-full py-3 rounded-lg">Submit</button>

        {success && (
          <p className="text-green-400 mt-4 text-center">
            Demo request submitted!
          </p>
        )}
      </form>
    </section>
  );
}

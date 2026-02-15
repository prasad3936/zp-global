"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.from("contact_messages").insert([form]);

    if (!error) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="pt-32 flex justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-10 rounded-2xl w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full mb-4 p-3 rounded bg-gray-700"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-4 p-3 rounded bg-gray-700"
          required
        />

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full mb-4 p-3 rounded bg-gray-700"
          required
        />

        <button className="bg-blue-600 w-full py-3 rounded-lg">
          Send Message
        </button>

        {success && (
          <p className="text-green-400 mt-4 text-center">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}

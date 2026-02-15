"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [demos, setDemos] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    checkUser();
    fetchData();
  }, []);

  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      router.push("/admin/login");
    }
  };

  const fetchData = async () => {
    const { data: contactData } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    const { data: demoData } = await supabase
      .from("demo_requests")
      .select("*")
      .order("created_at", { ascending: false });

    setContacts(contactData || []);
    setDemos(demoData || []);
  };

  const updateStatus = async (table: string, id: string, status: string) => {
    await supabase.from(table).update({ status }).eq("id", id);
    fetchData();
  };

  const deleteEntry = async (table: string, id: string) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      await supabase.from(table).delete().eq("id", id);
      fetchData();
    }
  };

  const statusColor = (status: string) => {
    if (status === "New") return "bg-yellow-500/20 text-yellow-400";
    if (status === "Contacted") return "bg-blue-500/20 text-blue-400";
    if (status === "Closed") return "bg-green-500/20 text-green-400";
    return "bg-gray-500/20";
  };

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

      {/* CONTACTS */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Contact Messages</h2>

        <div className="space-y-6">
          {contacts.map((c) => (
            <div
              key={c.id}
              className="bg-white/5 border border-white/10 p-6 rounded-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${statusColor(
                    c.status,
                  )}`}
                >
                  {c.status}
                </span>

                <button
                  onClick={() => deleteEntry("contact_messages", c.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  Delete
                </button>
              </div>

              <p>
                <strong>Name:</strong> {c.name}
              </p>
              <p>
                <strong>Email:</strong> {c.email}
              </p>
              <p>
                <strong>Message:</strong> {c.message}
              </p>

              <div className="mt-4 flex gap-3">
                {["New", "Contacted", "Closed"].map((status) => (
                  <button
                    key={status}
                    onClick={() =>
                      updateStatus("contact_messages", c.id, status)
                    }
                    className="bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO REQUESTS */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Demo Requests</h2>

        <div className="space-y-6">
          {demos.map((d) => (
            <div
              key={d.id}
              className="bg-white/5 border border-white/10 p-6 rounded-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${statusColor(
                    d.status,
                  )}`}
                >
                  {d.status}
                </span>

                <button
                  onClick={() => deleteEntry("demo_requests", d.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  Delete
                </button>
              </div>

              <p>
                <strong>Product:</strong> {d.product}
              </p>
              <p>
                <strong>Name:</strong> {d.name}
              </p>
              <p>
                <strong>Email:</strong> {d.email}
              </p>
              <p>
                <strong>Company:</strong> {d.company}
              </p>
              <p>
                <strong>Message:</strong> {d.message}
              </p>

              <div className="mt-4 flex gap-3">
                {["New", "Contacted", "Closed"].map((status) => (
                  <button
                    key={status}
                    onClick={() => updateStatus("demo_requests", d.id, status)}
                    className="bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

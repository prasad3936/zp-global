export default function UseCasesSection({ cases }: { cases: string[] }) {
  return (
    <section className="my-24">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Industry Use Cases
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((c) => (
          <div
            key={c}
            className="bg-white/5 border border-white/10 p-6 rounded-xl"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}

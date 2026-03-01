import TechBadge from "@/components/TechBadge";

export default function Technology() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Technology Stack</h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Modern, cloud-native and scalable engineering technologies.
        </p>
      </section>

      {/* DevOps */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-10 text-blue-400">
          DevOps & Cloud
        </h2>

        <div className="grid md:grid-cols-5 gap-8">
          <TechBadge name="AWS" logo="/tech/aws.svg" />
          <TechBadge name="Azure" logo="/tech/azure.svg" />
          <TechBadge name="Docker" logo="/tech/docker.svg" />
          <TechBadge name="Kubernetes" logo="/tech/kubernetes.svg" />
          <TechBadge name="Terraform" logo="/tech/terraform.svg" />
          <TechBadge name="OpenTofu" logo="/tech/opentofu.svg" />
          <TechBadge name="Jenkins" logo="/tech/jenkins.svg" />
          <TechBadge name="ArgoCD" logo="/tech/ArgoCD.svg" />
          <TechBadge name="Grafana" logo="/tech/grafana.svg" />
          <TechBadge name="Prometheus" logo="/tech/prometheus.svg" />
        </div>
      </section>

      {/* Web Development */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-10 text-green-400">
          Web Development
        </h2>

        <div className="grid md:grid-cols-5 gap-8">
          <TechBadge name="Python" logo="/tech/python.svg" />
          <TechBadge name="Flask" logo="/tech/flask.svg" />
          <TechBadge name="Django" logo="/tech/django.svg" />
          <TechBadge name="Next.js" logo="/tech/nextjs.svg" />
          <TechBadge name="Node.js" logo="/tech/nodejs.svg" />
          <TechBadge name="Supabase" logo="/tech/supabase.svg" />
          <TechBadge name="MongoDB" logo="/tech/mongodb.svg" />
          <TechBadge name="PostgreSQL" logo="/tech/postgres.jpeg" />
          <TechBadge name="MySQL" logo="/tech/mysql.svg" />
          <TechBadge name="SQLite" logo="/tech/sqlite.svg" />
        </div>
      </section>

      {/* Mobile */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-10 text-purple-400">
          Mobile Development
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <TechBadge name="Kotlin" logo="/tech/kotlin.svg" />
          <TechBadge name="Supabase" logo="/tech/supabase.svg" />
          <TechBadge name="SQLite" logo="/tech/sqlite.svg" />
        </div>
      </section>
    </div>
  );
}

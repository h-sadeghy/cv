export default function Work() {
  return (
    <main className="min-h-screen bg-base-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold">Work</h1>
          <p className="mt-4 text-base-content/70 max-w-2xl">
            Selected projects showcasing my approach to problem solving, design,
            and clean engineering.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCard
            title="Project Name"
            description="Short description of the project and the value it provides."
            tech="React · Node · PostgreSQL"
          />

          <ProjectCard
            title="Another Project"
            description="What problem it solves and why it matters."
            tech="Next.js · Tailwind · API"
          />
        </div>
      </div>
    </main>
  );
}

function ProjectCard({ title, description, tech }) {
  return (
    <div className="card bg-base-100 border border-base-300 hover:shadow-lg transition">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-base-content/70">{description}</p>
        <p className="text-sm text-base-content/60 mt-2">{tech}</p>

        <div className="card-actions mt-4">
          <button className="btn btn-sm btn-outline">Details</button>
          <button className="btn btn-sm btn-ghost">Live</button>
        </div>
      </div>
    </div>
  );
}

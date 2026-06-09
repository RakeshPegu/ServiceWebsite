const Profile = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          {/* Cover */}
          <div className="h-48 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600" />

          {/* Profile Info */}
          <div className="relative px-8 pb-8">
            <div className="-mt-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-4 md:flex-row md:items-end">
                {/* Avatar */}
                <div className="flex h-32 w-32 items-center justify-center rounded-3xl border-4 border-white bg-slate-200 text-4xl font-bold text-slate-700">
                  RP
                </div>

                {/* User Info */}
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">
                    Rakesh Pegu
                  </h1>

                  <p className="mt-1 text-lg text-slate-600">
                    Full-Stack Developer
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                      React
                    </span>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      Node.js
                    </span>

                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                      MongoDB
                    </span>

                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100">
                  Share Profile
                </button>

                <button className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Left Sidebar */}
          <div className="space-y-8">
            {/* About */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                About
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                Self-taught full-stack developer passionate about building
                modern web applications and helping businesses grow online.
              </p>
            </div>

            {/* Contact Info */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                Contact Information
              </h2>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>
                  <p className="font-medium text-slate-900">
                    your@email.com
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    LinkedIn
                  </p>
                  <p className="font-medium text-slate-900">
                    linkedin.com/in/yourprofile
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>
                  <p className="font-medium text-slate-900">
                    Assam, India
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                Stats
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-50 p-4 text-center">
                  <h3 className="text-2xl font-bold text-blue-600">
                    20+
                  </h3>
                  <p className="text-sm text-slate-600">
                    Projects
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 text-center">
                  <h3 className="text-2xl font-bold text-blue-600">
                    2+
                  </h3>
                  <p className="text-sm text-slate-600">
                    Years
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Experience
              </h2>

              <div className="mt-8 space-y-8">
                <div className="border-l-2 border-blue-600 pl-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Freelance Full-Stack Developer
                  </h3>

                  <p className="mt-1 text-slate-500">
                    2024 - Present
                  </p>

                  <p className="mt-3 text-slate-600">
                    Building modern web applications, business websites,
                    dashboards, and custom software solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Projects */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Recent Projects
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <div className="h-36 rounded-xl bg-slate-100" />

                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    Business Website
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Modern responsive website for a local business.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <div className="h-36 rounded-xl bg-slate-100" />

                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    CRM Dashboard
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Custom dashboard for managing customers and sales.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Skills & Technologies
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Docker",
                  "Redis",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
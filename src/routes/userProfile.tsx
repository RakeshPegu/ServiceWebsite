const UserProfile = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          My Profile
        </h1>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
                RP
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                Rakesh Pegu
              </h2>

              <p className="text-slate-500">
                rakesh@example.com
              </p>

              <span className="mt-3 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Pro Plan
              </span>
            </div>

            <div className="mt-8 space-y-2">
              <button className="w-full rounded-xl bg-slate-100 px-4 py-3 text-left font-medium">
                Profile
              </button>

              <button className="w-full rounded-xl px-4 py-3 text-left text-slate-600 hover:bg-slate-100">
                Security
              </button>

              <button className="w-full rounded-xl px-4 py-3 text-left text-slate-600 hover:bg-slate-100">
                Billing
              </button>

              <button className="w-full rounded-xl px-4 py-3 text-left text-slate-600 hover:bg-slate-100">
                Notifications
              </button>

              <button className="w-full rounded-xl px-4 py-3 text-left text-red-600 hover:bg-red-50">
                Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Personal Info */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">
                Personal Information
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value="Rakesh Pegu"
                    className="w-full rounded-xl border px-4 py-3"
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    value="rakesh@example.com"
                    className="w-full rounded-xl border px-4 py-3"
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Assam, India"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>
              </div>

              <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">
                Save Changes
              </button>
            </div>

            {/* Account Stats */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-slate-500">Projects</p>
                <h3 className="mt-2 text-3xl font-bold">12</h3>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-slate-500">Member Since</p>
                <h3 className="mt-2 text-3xl font-bold">2026</h3>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">
                Recent Activity
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-slate-50 p-4">
                  Updated profile information
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  Changed account password
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  Upgraded to Pro Plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
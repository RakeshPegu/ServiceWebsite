const SignUp = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <a
            href="/"
            className="text-3xl font-bold text-slate-900"
          >
            Rakesh<span className="text-blue-600">.</span>
          </a>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Create an Account
          </h1>

          <p className="mt-2 text-slate-600">
            Join us and start building your next project.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />

              <span className="text-sm text-slate-600">
                I agree to the{" "}
                <a
                  href="/terms_of_service"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy_policy"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="px-4 text-sm text-slate-500">or</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.35 11.1H12v2.92h5.33c-.23 1.48-1.75 4.33-5.33 4.33a6.34 6.34 0 1 1 0-12.67c2.04 0 3.4.87 4.18 1.62l2.85-2.76C17.2 2.8 14.87 1.75 12 1.75a10.25 10.25 0 1 0 0 20.5c5.92 0 9.84-4.16 9.84-10.02 0-.67-.07-1.17-.16-1.63Z"
              />
            </svg>

            Continue with Google
          </button>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <a
              href="/signin"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign In
            </a>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-slate-500">
          © 2026 Rakesh. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default SignUp; 
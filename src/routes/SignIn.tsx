import { lazy, Suspense } from "react";
import SignInSkeleton from "../components/forms/signInForm/SignInFormSkeleton"
const  SignInForm = lazy(()=>import("../components/forms/signInForm/SignInForm")) ;

const SignIn = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
            <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <a href="/" className="text-3xl font-bold text-slate-900">
            Rakesh<span className="text-blue-600">.</span>
          </a>
          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-slate-600">
            Sign in to access your account.
          </p>
        </div>

        {/* Form with Suspense */}
        <Suspense fallback={<SignInSkeleton />}>
          <SignInForm />
        </Suspense>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-slate-500">
          © 2026 Rakesh. All rights reserved.
        </p>
      </div>

    </section>
  );
};

export default SignIn;
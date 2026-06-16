import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const SignInSkeleton = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="space-y-5">
        {/* Email skeleton */}
        <div>
          <Skeleton height={20} width="40%" className="mb-2" />
          <Skeleton height={45} className="rounded-xl" />
        </div>

        {/* Password skeleton */}
        <div>
          <Skeleton height={20} width="30%" className="mb-2" />
          <Skeleton height={45} className="rounded-xl" />
        </div>

        {/* Checkbox skeleton */}
        <Skeleton height={20} width="25%" />

        {/* Button skeleton */}
        <Skeleton height={45} className="rounded-xl" />
      </div>

      {/* Divider */}
      <div className="my-6 flex items-center">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="px-4 text-sm text-slate-500">or</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Google button skeleton */}
      <Skeleton height={45} className="rounded-xl" />

      {/* Sign up link skeleton */}
      <Skeleton height={20} width="50%" className="mt-8 mx-auto" />
    </div>
  )
}
export default SignInSkeleton;
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
function TechStackSkeleton(){
    return(
        <div className="rounded-2xl">
            <Skeleton height={50} />

        </div>
    )
}
export default TechStackSkeleton;
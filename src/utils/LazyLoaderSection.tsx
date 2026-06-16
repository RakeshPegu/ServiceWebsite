import { Suspense } from 'react';
import {useInView} from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css"
function LazyLoaderSection({ 
  Component, 
  height, 
  count 
}: { 
  Component: React.ComponentType<any>
  height: number
  count: number 
}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  
  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={<Skeleton height={height} count={count} />}>
          <Component />
        </Suspense>
      ) : (
        <Skeleton height={height} count={count} />
      )}
    </div>
  )
}
export default LazyLoaderSection
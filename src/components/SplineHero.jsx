import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div>Loading 3D scene...</div>, // Optional loader
});

const SplineHero = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      {inView && (
        <Spline
          scene="https://prod.spline.design/C7nwG3zqB1OFx3Mq/scene.splinecode"
          className="absolute inset-0 z-0"
        />
      )}
    </div>
  );
};

export default SplineHero;

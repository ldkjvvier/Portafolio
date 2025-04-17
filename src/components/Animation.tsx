import Spline from '@splinetool/react-spline';

interface AnimationProps {
  url: string;
}

const Animation = ({ url }: AnimationProps) => {
  return (
    <div className="hidden sm:block">
      <div className="h-[600px] w-[544px]">
        <Spline scene={url} aria-label="Animación 3D interactiva" title={'Animación 3D interactiva'} />
      </div>
    </div>
  );
};
export default Animation;

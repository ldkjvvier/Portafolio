import { INSPIRATIONS } from '@/constants/Inspirations';
export const Inspiration = () => {
  return (
    <div className="grid place-items-center border border-slate-600 rounded-lg px-4 py-6 sm:px-8 sm:py-10 my-32 ">
      <div className="grid grid-rows-2 place-items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-gray-200 sm:text-4xl mb-3">
          Personas que me inspiran
        </h2>
        <p className="z-20 leading-normal text-muted-foreground sm:text-lg sm:leading-7 md:max-w-[65%] text-gray-400">
          Quizás te interesen los siguientes perfiles. Los cuales me han ayudado y motivado a seguir adelante con este
          mundo de la informática.
        </p>
      </div>
      <div className="grid grid-cols-5 place-items-center sm:grid-cols-5 w-[65%] md:w-[45%] mt-8">
        {INSPIRATIONS.map((inspiration) => (
          <a
            className="z-50 w-16 h-16 rounded-full cursor-pointer border-4 overflow-hidden border-slate-500/20 sm:border-white/10"
            target="_blank"
            href={inspiration.url}
            rel="noreferrer"
            key={inspiration.id}
          >
            <img src={inspiration.icon} alt={`avatar ${inspiration.username}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

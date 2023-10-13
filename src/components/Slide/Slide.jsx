import { useState } from 'react';

export const Slide = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSlide = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className={`fixed inset-0 z-50  duration-300	transition-transform transform ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="h-full w-full bg-white dark:bg-slate-800 opacity-0 absolute inset-0" onClick={toggleSlide}></div>
      <div className="bg-white dark:bg-slate-800 h-full w-full p-4 overflow-y-auto flex justify-center items-center gap-48" onClick={toggleSlide}>
        <p className='text-black dark:text-white'>Bienvenido a mi portafolio</p>
        <div className='text-5xl'>⟩</div>
      </div>
    </section>
    
  );
};

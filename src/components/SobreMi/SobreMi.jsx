export const SobreMi = () => {
  return (
    <section className="flex justify-center items-center gap-20 h-96 ">
    
      <div className="flex flex-col  text-start w-3/12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to bg-cyan-500 bg-clip-text text-transparent mb-2">
          Javier Madariaga
        </h1>
        <h1 className="text-step-2 font-bold capitalize font-code text-black dark:text-white">
          FullStack Developer
        </h1>
        <p className="text-slate-400">
          Analista Programador de inacap con 2 años de experiencia en el
          desarrollo de aplicaciones web y móviles, con conocimientos en React,
          NodeJS, MongoDB, MySQL, Firebase, Git, entre otros.
        </p>
      </div>
      <div>
        <p>Imagen</p>
      </div>
    </section>
    
  );
};

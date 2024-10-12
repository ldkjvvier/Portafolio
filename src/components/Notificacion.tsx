interface NotificacionProps {
  message: string;
}
export const Notificacion = ({ message }: NotificacionProps) => {
  return (
    <div className="fixed z-50 bottom-0 right-0 p-4 m-4 bg-slate-100/80 dark:bg-slate-800/40 rounded-md  border border-gray-200 dark:border-slate-500  shadow-2xl">
      <p className="text-black dark:text-white">{message}</p>
    </div>
  );
};

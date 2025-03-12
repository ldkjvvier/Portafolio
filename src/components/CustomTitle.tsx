interface CustomTitleProps {
  title: string;
  icon: React.ReactNode;
}

export const CustomTitle = ({ title, icon }: CustomTitleProps) => {
  return (
    <div className="my-20 py-3 border-b border-slate-600 dark:border-slate-400">
      <h2 className="flex items-center text-3xl gap-x-4 text-gray-900 dark:text-gray-100">
        <span className="p-2 rounded-full bg-neutral-200/50 text-black dark:bg-neutral-800 dark:text-white shadow-md ">
          {icon}
        </span>
        <span className="font-bold">{title}</span>
      </h2>
    </div>
  );
};

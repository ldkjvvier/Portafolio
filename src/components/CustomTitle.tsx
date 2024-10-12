import { DevIcon } from './Icons/Icons';
interface CustomTitleProps {
  title: string;
  icon?: React.ReactNode;
}
export const CustomTitle = ({ title, icon = <DevIcon /> }: CustomTitleProps) => {
  return (
    <div className="my-20 border-b border-slate-600 ">
      <h2 className="flex items-center mb-2 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        {icon}
        {title}
      </h2>
    </div>
  );
};

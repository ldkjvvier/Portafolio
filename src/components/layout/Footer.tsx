import { ABOUT_ME } from '@/constants/AboutMeData';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-transparent transition-all text-center p-5  font-medium">
      <p>
        © {year} {ABOUT_ME.name}
      </p>
    </footer>
  );
};

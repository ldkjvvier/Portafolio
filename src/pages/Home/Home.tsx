import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CvViewer } from '@/components/cv/CvViewer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Toast } from '@/components/ui/Toast';
import { PAGE_SECTIONS, SECTION_ID } from '@/constants/PageSections';
import { useToast } from '@/hooks/useToast';

export const Home = () => {
  const toast = useToast();

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <Toast message={toast.message} visible={toast.visible} />
      <CvViewer />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
        {PAGE_SECTIONS.map((section) => {
          const Component = section.component;
          const isHero = section.id === SECTION_ID.About;

          return (
            <section
              key={section.id}
              id={section.id}
              aria-label={section.title}
              className={isHero ? 'scroll-mt-16' : 'scroll-mt-16 border-t border-line py-14 md:py-20'}
            >
              {!isHero && <SectionHeading title={section.title} description={section.description} />}
              <Component />
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
};

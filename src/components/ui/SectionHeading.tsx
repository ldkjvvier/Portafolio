interface SectionHeadingProps {
  title: string;
  description?: string;
}

export const SectionHeading = ({ title, description }: SectionHeadingProps) => (
  <div className="mb-10 max-w-2xl md:mb-12">
    <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
    {description && <p className="mt-3 text-base leading-7 text-ink-muted">{description}</p>}
  </div>
);

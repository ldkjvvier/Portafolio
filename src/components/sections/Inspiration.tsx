import { INSPIRATIONS } from '@/constants/Inspirations';
import { withBase } from '@/lib/assets';

const Inspiration = () => (
  <ul className="flex flex-wrap gap-3">
    {INSPIRATIONS.map((inspiration) => (
      <li key={inspiration.id}>
        <a
          href={inspiration.url}
          target="_blank"
          rel="noreferrer"
          className="card flex items-center gap-3 py-2 pl-2 pr-4 transition-colors hover:border-line-strong"
        >
          <img
            src={withBase(inspiration.icon)}
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-lg object-cover"
            loading="lazy"
            decoding="async"
          />
          <span className="text-sm font-medium text-ink">{inspiration.username}</span>
        </a>
      </li>
    ))}
  </ul>
);

export default Inspiration;

interface RichTextProps {
  text: string;
  /** Clases del fragmento resaltado. */
  strongClassName?: string;
}

/**
 * Muestra texto de las constantes resaltando en negrita los fragmentos
 * escritos entre `**`, p. ej. `'… alcanzando el **100%** de …'`.
 * Sirve para destacar logros y palabras clave que buscan los reclutadores.
 */
export const RichText = ({ text, strongClassName = 'font-semibold text-ink' }: RichTextProps) => (
  <>
    {text.split('**').map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className={strongClassName}>
          {part}
        </strong>
      ) : (
        part
      )
    )}
  </>
);

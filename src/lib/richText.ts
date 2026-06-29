// Convertit un texte contenant des balises HTML mathématiques (ex `2<sup>4</sup>`)
// en texte brut lisible, pour les contextes où le HTML ne peut pas être rendu
// (options de <select>, synthèse vocale). Les exposants deviennent `^` et les
// indices `_` afin de ne pas perdre le sens (ex `x<sup>2</sup>` -> `x^2`).
export function htmlToReadable(input: string): string {
  return input
    .replace(/<sup>(.*?)<\/sup>/gi, '^$1')
    .replace(/<sub>(.*?)<\/sub>/gi, '_$1')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&times;/g, '×')
    .replace(/&divide;/g, '÷')
    .replace(/\s+/g, ' ')
    .trim();
}

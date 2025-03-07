export const renderHighlightedText = (text: string) => {
  if (!text) return null;

  // Replace <b> tags with styled spans
  const parts = text.split(/<b>|<\/b>/);

  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <span key={index} className="font-bold text-purple-600 hover:[filter:saturate(2);] transition-[filter]">{part}</span>;
    }
    return <span key={index}>{part}</span>;
  });
};
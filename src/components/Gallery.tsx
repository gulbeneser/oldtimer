const images = [
  {
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
    alt: 'Bergpanorama',
  },
  {
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    alt: 'Landschaftsroute',
  },
  {
    url: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80',
    alt: 'Oldtimer Detail',
  },
  {
    url: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80',
    alt: 'Sportwagen auf der Straße',
  },
];

export default function Gallery() {
  return (
    <div className="gallery-strip" role="region" aria-label="Bildstrecke">
      {images.map((img) => (
        <div
          key={img.url}
          role="img"
          aria-label={img.alt}
          style={{ backgroundImage: `url('${img.url}')` }}
        />
      ))}
    </div>
  );
}

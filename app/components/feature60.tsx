interface Feature60Props {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

const Feature60 = ({
  title = "Unsere Smash Burger Technik",
  description = "Bei BY THE WAY werden unsere Burger auf der heissen Platte perfekt gesmashed. Das Ergebnis: Eine knusprige Kruste aussen und saftiges, aromatisches Fleisch innen. Ein Geschmackserlebnis, das Sie nicht vergessen werden.",
  imageSrc = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  imageAlt = "Smash Burger von BY THE WAY",
  imagePosition = "left",
  removeTopPadding = false,
}: Feature60Props & { removeTopPadding?: boolean }) => {
  const imageBlock = (
    <div className="lg:w-1/2">
      <div className="mb-6 md:mb-8 lg:mb-0 overflow-hidden rounded-2xl border border-border bg-input">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="aspect-4/3 w-full object-cover"
        />
      </div>
    </div>
  );

  const textBlock = (
    <div className="lg:w-1/2">
      <div>
        <h3 className="mb-4 lg:mb-6">{title}</h3>
        <p className="text-muted-foreground text-body-lg">{description}</p>
      </div>
    </div>
  );

  return (
    <section className={`${removeTopPadding ? 'pb-20 md:pb-32' : 'py-20 md:py-32'} bg-background`}>
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center gap-12">
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export { Feature60 };

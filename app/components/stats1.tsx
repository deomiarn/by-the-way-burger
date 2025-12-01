interface Stats1Props {
  variant?: "default" | "muted";
}

const Stats1 = ({ variant = "default" }: Stats1Props) => {
  return (
    <section className={`py-16 md:py-20 ${variant === "muted" ? "bg-input" : "bg-background"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-center">
          BY THE WAY in Zahlen
        </h2>
        <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
          <div className="text-center">
            <p className="text-muted-foreground text-sm font-medium">
              Zufriedene Kunden
            </p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10">500+</p>
            <p className="text-muted-foreground text-body-lg font-semibold">
              Happy Customers
            </p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-sm font-medium">
              Handverlesene Gerichte
            </p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10">38</p>
            <p className="text-muted-foreground text-body-lg font-semibold">
              auf unserer Karte
            </p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-sm font-medium">
              Schweizer Rindfleisch
            </p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10">100%</p>
            <p className="text-muted-foreground text-body-lg font-semibold">
              Premium Qualität
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats1 };

const Feature32 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="mb-14 text-center">
          Loved by clients
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-accent rounded-lg p-16 md:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="flex h-full flex-col justify-between gap-14">
              <q className="pt-8 text-body-lg font-medium lg:pt-14">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ipsum perspiciatis consectetur assumenda incidunt.
              </q>
              <div className="text-sm">
                <p className="font-semibold">John Doe</p>
                <p>CEO, Company Example</p>
              </div>
            </div>
          </div>
          <div className="bg-accent rounded-lg p-10">
            <div className="flex flex-col gap-14">
              <q className="text-body-lg font-medium">
                Lorem ipsum dolor sit amet consecte adipisicing elit.
              </q>
              <div className="text-sm">
                <p className="font-semibold">John Doe</p>
                <p>CEO, Company Example</p>
              </div>
            </div>
          </div>
          <div className="bg-accent rounded-lg p-10">
            <div className="flex flex-col gap-14">
              <q className="text-body-lg font-medium">
                Lorem ipsum dolor sit amet consecte adipisicing elit.
              </q>
              <div className="text-sm">
                <p className="font-semibold">John Doe</p>
                <p>CEO, Company Example</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature32 };

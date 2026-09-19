function RemoteServices() {
  const services = [
    {
      number: "01",
      title: "ISP Service",
      description:
        "Advanced device memory and motherboard servicing using supported ISP-based techniques for eligible devices.",
    },
    {
      number: "02",
      title: "KG Service",
      description:
        "Assistance with supported Samsung Knox Guard (KG) related device and software services.",
    },
    {
      number: "03",
      title: "FRP Service",
      description:
        "Assistance with Factory Reset Protection related issues on supported Android devices, subject to applicable ownership and security requirements.",
    },
    {
      number: "04",
      title: "iCloud ID Service",
      description:
        "Assistance with Apple ID and iCloud-related issues on supported iPhone and iPad devices.",
    },
  ];

  return (
    <section
      id="remote-services"
      className="bg-zinc-950 px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Remote & Software Services
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Advanced Device Services
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
            Specialized assistance for supported mobile devices, including
            software, security, memory, and account-related services.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-white/10 bg-black p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-black/30"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-sm font-semibold text-amber-400">
                  {service.number}
                </span>

                <div className="h-px w-12 bg-white/10 transition-all duration-300 group-hover:w-16 group-hover:bg-amber-400/50" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 rounded-2xl border border-amber-400/10 bg-amber-400/5 px-6 py-5 text-center">
          <p className="text-sm leading-6 text-gray-400">
            Services are available for supported devices and are subject to
            device eligibility, ownership verification, and applicable
            security requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RemoteServices;
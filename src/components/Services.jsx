function Services() {
  const services = [
    {
      icon: "📱",
      title: "Mobile and Laptop Chip-Level Repair",
      description:
        "Professional motherboard and chip-level repair services for smartphones and Laptops.",
    },
    {
      icon: "💻",
      title: "Remote unlock and iCloud Assistance",
      description:
        "Remote Assistance for eligible Android devices with supported unlocking and software issues,Iphone iCloud services.",
    },
    {
      icon: "🔧",
      title: "Motherboard Repair",
      description:
        "Component-level troubleshooting and repair of damaged motherboards.",
    },
    {
      icon: "⚡",
      title: "Power & Charging Issues",
      description:
        "Diagnosis and repair of charging, power, and related motherboard issues.",
    },
    {
      icon: "🔬",
      title: "IC & Component Repair",
      description:
        "Specialized repair and replacement of faulty ICs and electronic components.",
    },
    {
      icon: "🛠️",
      title: "Advanced Diagnosis",
      description:
        "Detailed inspection to identify hardware and motherboard-level faults.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-zinc-950 px-5 py-24 sm:px-8 lg:px-10"
    >
      {/* Background glow */}
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Services
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400">
            Specialized chip-level repair solutions for mobile phones,
            laptops, and electronic motherboards.
          </p>

        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.05]"
            >

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-400">
                {service.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-8 text-center sm:p-10">

          <h3 className="text-2xl font-bold text-white">
            Have a device problem?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Contact us and tell us about your mobile or laptop issue.
          </p>

          <a
            href="https://wa.me/919562830655"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-amber-400 px-7 py-3 font-semibold text-black transition hover:bg-amber-300"
          >
            Contact Us on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;
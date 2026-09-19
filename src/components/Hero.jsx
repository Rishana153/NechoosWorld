function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">

        {/* Left Content */}
        <div className="relative z-10">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Mobile & Laptop Chip Level Service
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Expert
            <span className="text-amber-400"> Chip-Level </span>
            Repair for Mobile & Laptop
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            Professional motherboard and chip-level repair services
            for mobile phones and laptops. Get your device diagnosed
            and repaired with specialized technical service.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="tel:+919562830655"
              className="rounded-full bg-amber-400 px-7 py-3.5 text-center font-semibold text-black transition-all duration-200 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919562830655"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3.5 text-center font-semibold text-white transition-all duration-200 hover:border-amber-400 hover:text-amber-400"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:najeerriyadh@gmail.com"
              className="inline-flex rounded-full bg-amber-400 px-6 py-3 text-center font-semibold text-black transition hover:bg-amber-300">
              Email Us
              </a>


          </div>

          {/* Small trust information */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-500">
            <div>
              <span className="text-amber-400">✓</span>
              {" "}Mobile Repair
            </div>

            <div>
              <span className="text-amber-400">✓</span>
              {" "}Laptop Repair
            </div>

            <div>
              <span className="text-amber-400">✓</span>
              {" "}Chip-Level Service
            </div>
          </div>

        </div>

        {/* Right Visual */}
        <div className="relative z-10">

          <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 p-3 shadow-2xl shadow-black/50">

            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800 to-black">

              <div className="text-center px-6">

                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10">
                  <span className="text-4xl text-amber-400">
                    ⚡
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white">
                  NECHOOS WORLD
                </h2>

                <p className="mt-2 text-sm uppercase tracking-widest text-amber-400">
                  Chip Level Service
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

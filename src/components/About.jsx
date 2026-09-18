import A3Image from '../assets/images/A2.jpeg';
function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">

              <img
                src={A3Image}
                alt="Nechoo's World chip level service"
                className="h-[400px] w-full object-cover sm:h-[500px]"
              />

            </div>

            {/* Experience badge - change/remove when actual information is available */}
            <div className="absolute -bottom-6 right-5 rounded-2xl border border-amber-400/20 bg-zinc-900 px-6 py-4 shadow-xl sm:right-10">
              <p className="text-sm text-gray-400">
                Specialized
              </p>

              <p className="font-bold text-amber-400">
                Chip-Level Service
              </p>
            </div>

          </div>

          {/* Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              About Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Specialized Repair.
              <br />
              Professional Service.
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              Nechoo's World provides specialized chip-level repair
              services for mobile phones and laptops.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              We focus on motherboard-level diagnosis and electronic
              component repair to help solve hardware problems that
              may require advanced technical attention.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-white">
                  Mobile & Laptop
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Repair services for multiple device types.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-white">
                  Chip-Level Expertise
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Focused on motherboard and component-level issues.
                </p>
              </div>

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-amber-400 px-7 py-3.5 font-semibold text-black transition hover:bg-amber-300"
            >
              Contact Us
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

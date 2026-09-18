import repair1 from "../assets/images/about/A10.jpeg";
import repair2 from "../assets/images/about/A3.jpeg";
import repair3 from "../assets/images/about/A7.jpeg";
import repair4 from "../assets/images/about/A11.jpeg";
import repair5 from "../assets/images/about/A5.jpeg";
import repair6 from "../assets/images/about/A8.jpeg";

function Gallery() {
  const images = [
    {
      src: repair1,
      title: "Chip Level Repair",
    },
    {
      src: repair2,
      title: "Motherboard Service",
    },
    {
      src: repair3,
      title: "Mobile Repair",
    },
    {
      src: repair4,
      title: "Laptop Repair",
    },
    {
      src: repair5,
      title: "Electronic Component Service",
    },
    {
      src: repair6,
      title: "Advanced Diagnosis",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-zinc-950 px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Our Work
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            
          </h2>

          <p className="mt-5 text-gray-400">
            Take a look at our repair work and service environment.
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((image) => (
            <div
              key={image.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-white">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;
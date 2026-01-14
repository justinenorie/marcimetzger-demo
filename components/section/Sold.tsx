import Image from "next/image";
import Typography from "../ui/Typography";

const soldData = [
  {
    title: "Top Residential Sales Last 5 Years",
    description:
      "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
    image: "/sold/sold1.png",
  },
  {
    title: "Don't Just List it...",
    description:
      "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    image: "/sold/sold2.png",
  },
  {
    title: "Guide to Buyers",
    description:
      "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    image: "/sold/sold3.png",
  },
];

export default function Sold() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="mb-16 text-center">
          <Typography
            variant="h2"
            className="text-foreground tracking-[0.3em] uppercase"
          >
            Get It Sold
          </Typography>
        </div>

        {/* Content Rows */}
        <div className="space-y-24 md:space-y-32">
          {soldData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-12 md:flex-row md:gap-20 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-4/3 w-full overflow-hidden shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full text-center md:w-1/2">
                <Typography
                  variant="h2"
                  className="mb-6 text-2xl font-medium text-gray-700 md:text-3xl"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="p"
                  className="mx-auto max-w-md leading-relaxed text-gray-500"
                >
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

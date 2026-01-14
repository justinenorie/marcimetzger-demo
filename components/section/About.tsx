import Image from "next/image";
import Typography from "../ui/Typography";

export default function About() {
  return (
    <section className="bg-foreground flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-4xl space-y-12 text-center">
        <Typography variant="h2" className="text-muted uppercase">
          Marci Metzger
        </Typography>

        <div className="relative flex justify-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-gray-800 md:h-80 md:w-80">
            <Image
              src="/about.png"
              alt="Marci Metzger"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <Typography variant="h3" className="text-muted uppercase">
            Realtor for nearly 3 decades!
          </Typography>

          <Typography variant="p" className="text-muted">
            206-919-6886
          </Typography>
        </div>
      </div>
    </section>
  );
}

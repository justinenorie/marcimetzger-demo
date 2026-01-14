import Image from "next/image";
import Typography from "../ui/Typography";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover brightness-60"
        />
      </div>

      <div className="space-y-4 text-center">
        <Typography variant="p" className="text-muted">
          MARCI METZGER - THE RIDGE REALTY GROUP
        </Typography>

        <Typography variant="h1" className="text-muted">
          Pahrump Realtor
        </Typography>

        <a href="tel:(206)919-6886">
          <Button
            size="lg"
            className="bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-4xl px-15 py-7 uppercase"
          >
            <Typography variant="p" className="text-foreground font-bold">
              Call now
            </Typography>
          </Button>
        </a>
      </div>
    </section>
  );
}

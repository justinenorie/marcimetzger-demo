import Typography from "../ui/Typography";

export default function Map() {
  return (
    <section className="bg-foreground w-full">
      <div className="mx-auto px-4 py-12 text-center">
        <Typography
          variant="h2"
          className="text-muted mb-4 font-light tracking-[0.3em] uppercase"
        >
          Visit Our Office
        </Typography>
        <Typography variant="p" className="text-muted/80 mx-auto max-w-md">
          3190 NV-160 Suite F, Pahrump, NV 89048
        </Typography>
      </div>

      <div className="group relative h-120 w-full overflow-hidden">
        <iframe
          title="The Ridge Realty Group Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.787729272828!2d-115.9866326235142!3d36.1473659724125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c739760f7b12f3%3A0xa05207dd285dd73c!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048!5e0!3m2!1sen!2sus!4v1705420000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="opacity-80 contrast-125 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Subtle decorative border overlay */}
        <div className="pointer-events-none absolute inset-0 border-16 border-white/10" />
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Star } from "lucide-react";
import Typography from "../ui/Typography";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-4 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center space-y-8">
        <div className="flex space-x-6 text-gray-400">
          <Link
            href="https://www.facebook.com/MarciHomes/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
          >
            <Image
              src="/icons/facebook.svg"
              alt="whatsapp"
              width={30}
              height={30}
            />
          </Link>

          <Link
            href="https://www.instagram.com/marciandlauren_nvrealtors/"
            className="transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram.svg"
              alt="instagram"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/marci-metzger-30642496/"
            className="transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
            className="transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/yelp.svg" alt="yelp" width={30} height={30} />
          </Link>
        </div>

        <div className="space-y-2 text-center">
          <Typography
            variant="small"
            className="text-muted tracking-[0.2em] uppercase"
          >
            Copyright © {currentYear} Marci Metzger Homes - All Rights Reserved
          </Typography>
        </div>

        <div className="w-12 bg-gray-800" />

        <div className="flex flex-col items-center space-y-1">
          <Typography variant="small" className="text-muted/80 uppercase">
            Powered by
          </Typography>
          <div className="flex items-center gap-1 font-bold tracking-tight">
            <Image
              src="/icons/godaddy.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
            <Typography variant="p" className="text-muted">
              GoDaddy
            </Typography>
            <Typography variant="p" className="text-muted">
              Airo
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

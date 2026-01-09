import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/50 border-t border-border">
      <div className="flex flex-col items-center justify-center px-4 py-16">
        {/* Top Section */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
            lg:gap-12
          "
        >
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-display text-xl font-bold text-primary-foreground">
                  D
                </span>
              </div>
              <span className="font-display text-xl font-bold text-foreground tracking-wide">
                DBS STORE
                <span className="text-primary"> OFFICIAL</span>
              </span>
            </Link>

            <p className="text-muted-foreground max-w-xs">
              Your trusted source for premium motorcycle parts and accessories
              since 2014.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-10 h-10
                    rounded-full
                    bg-muted
                    flex items-center justify-center
                    hover:bg-primary
                    transition-colors
                    group
                  "
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Shop All",
                "New Arrivals",
                "Best Sellers",
                "Clearance",
                "About Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              {[
                "Engine Parts",
                "Brake System",
                "Electrical",
                "Accessories",
                "Tires & Wheels",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {/* <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Jl. Otista Raya No. 29A, Kel. Bidara Cina, Kec. Jatinegara,
                  Jakarta Timur, INDONESIA.
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (123) 456-7890
                </a>
              </li> */}

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:info@motoparts.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@dbsofficialstore.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-16
            pt-8
            border-t
            border-border
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © 2026 DBS BY MGV. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Shipping Info"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

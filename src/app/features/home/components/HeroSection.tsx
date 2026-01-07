import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(image/hero-bg.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              DBS OFFICIAL STORE
            </span>
          </div>

          <h1
            className="uppercase font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Maksimalkan
            <br />
            performa
            <br />
            <span className="text-primary">motor anda</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button>
              Belanja Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">Lihat Semua Produk</Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                15K+
              </div>
              <div className="text-sm text-muted-foreground">
                Produk Tersedia
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">
                Pelanggan Puas
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                99%
              </div>
              <div className="text-sm text-muted-foreground">
                Tingkat Kepuasan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

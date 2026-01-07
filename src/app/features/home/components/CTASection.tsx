import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-primary/10 to-primary/20" />
      <div className="absolute inset-0 bg-[radial-linear(ellipse_at_center,var(--tw-linear-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="flex flex-col items-center justify-center px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            SIAP UPGRADE
            <br />
            <span className="text-gradient">MOTOR KAMU?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Jelajahi koleksi lengkap sparepart dan aksesoris motor premium dari
            DBS Official Store. Dipercaya ribuan rider di seluruh Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group">
              Mulai Belanja
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">Hubungi Kami</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { Award, Shield, Truck } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Produk Original & Terjamin",
    description:
      "Sparepart original dan aftermarket berkualitas tinggi dengan jaminan keaslian serta garansi resmi.",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    description:
      "Pesanan diproses di hari yang sama sebelum jam 14.00. Pengiriman aman ke seluruh Indonesia.",
  },
  {
    icon: Award,
    title: "Toko Terpercaya",
    description:
      "DBS Official Store telah dipercaya ribuan pelanggan dengan rating tinggi dan pelayanan profesional.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <div className="flex flex-col items-center justify-center px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Kenapa Pilih Kami
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            KEUNGGULAN DBS OFFICIAL STORE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen menghadirkan sparepart motor terbaik dengan
            pelayanan cepat, aman, dan terpercaya untuk semua pengendara.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

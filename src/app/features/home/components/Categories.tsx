import { Cog, Disc, Lightbulb, Wrench } from "lucide-react";

const categories = [
  {
    icon: Cog,
    name: "Mesin & Komponen",
    description: "Piston, gasket, klep, dan komponen mesin lainnya",
    count: "2.500+ produk",
  },
  {
    icon: Disc,
    name: "Sistem Pengereman",
    description: "Kampas rem, cakram, kaliper, selang rem",
    count: "1.200+ produk",
  },
  {
    icon: Lightbulb,
    name: "Kelistrikan",
    description: "Aki, lampu, saklar, dan kabel kelistrikan",
    count: "3.000+ produk",
  },
  {
    icon: Wrench,
    name: "Aksesori Motor",
    description: "Spion, handgrip, tuas, standar motor",
    count: "5.000+ produk",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20">
      <div className="flex flex-col items-center justify-center px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Pilih Berdasarkan Kategori
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            BELANJA PER KATEGORI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan sparepart dan aksesori motor yang Anda butuhkan dengan
            katalog DBS Official Store yang tersusun rapi dan mudah dijelajahi.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group card-metallic p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {category.description}
              </p>
              <span className="text-primary font-semibold text-sm">
                {category.count}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

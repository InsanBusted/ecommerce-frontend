import shock from "produk/shock.png";
import ProductCard from "./ui/ProductCard";

const products = [
  {
    id: 1,
    image: "/produk/shock.png",
    name: "SHOCK DBS-8894 GP Series",
    price: 45.99,
    originalPrice: 59.99,
    rating: 5,
    reviews: 128,
  },
  {
    id: 2,
    image: "/produk/shock.png",
    name: "SHOCK DBS-8894 GP Series",
    price: 89.99,
    rating: 4,
    reviews: 85,
  },
  {
    id: 3,
    image: "/produk/shock.png",
    name: "SHOCK DBS-8894 GP Series",
    price: 32.99,
    rating: 5,
    reviews: 256,
  },
  {
    id: 4,
    image: "/produk/shock.png",
    name: "SHOCK DBS-8894 GP Series",
    price: 15.99,
    originalPrice: 19.99,
    rating: 4,
    reviews: 342,
  },
  {
    id: 5,
    image: "/produk/shock.png",
    name: "SHOCK DBS-8894 GP Series",
    price: 189.99,
    rating: 5,
    reviews: 67,
  },
  {
    id: 6,
    image: "/produk/shock.png",
    name: "SHOCK DBS-8894 GP Series",
    price: 54.99,
    rating: 4,
    reviews: 198,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="flex flex-col items-center justify-center px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Produk Unggulan
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            PRODUK TERLARIS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Koleksi sparepart motor pilihan dari DBS Official Store, dipercaya
            oleh ribuan rider untuk kualitas, ketahanan, dan performa maksimal.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Lihat Semua Produk
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

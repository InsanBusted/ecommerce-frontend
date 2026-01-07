import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
}

const ProductCard = ({
  image,
  name,
  price,
  originalPrice,
  rating,
  reviews,
}: ProductCardProps) => {
  return (
    <div
      className="
        group
        w-full
        max-w-[320px]
        card-metallic
        rounded-xl
        overflow-hidden
        border
        border-border
        hover:border-primary/50
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {originalPrice && (
          <div className="absolute top-3 left-3 bg-primary px-2 py-1 rounded text-xs font-bold text-primary-foreground">
            SALE
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-primary text-primary" : "text-muted"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            ({reviews})
          </span>
        </div>

        {/* Name */}
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-display text-xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Button */}
        <Button className="w-full mt-auto group/btn">
          <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

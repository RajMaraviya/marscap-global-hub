import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Dehydrated Onion",
    description: "Flakes, minced, chopped, powder & granules",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&q=80",
    featured: true,
  },
  {
    id: 2,
    name: "Dehydrated Garlic",
    description: "Flakes, minced, chopped, powder & granules",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2f78?w=600&q=80",
    featured: true,
  },
  {
    id: 3,
    name: "Dehydrated Potato",
    description: "Flakes, dices, powder & granules",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82ber53?w=600&q=80",
    featured: false,
  },
  {
    id: 4,
    name: "Other Vegetables",
    description: "Cabbage, carrot, beetroot, tomato & more",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
    featured: false,
  },
  {
    id: 5,
    name: "Fried & Roasted",
    description: "Fried onion, roasted garlic & specialty items",
    image: "https://images.unsplash.com/photo-1594137612043-b8b2c3e8b5e5?w=600&q=80",
    featured: false,
  },
  {
    id: 6,
    name: "Spices & Seasonings",
    description: "Turmeric, coriander, cumin & custom blends",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    featured: true,
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3">Our Products</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Dehydrated Products
          </h2>
          <p className="text-lg text-muted-foreground">
            From farm-fresh vegetables to perfectly preserved ingredients, our range meets the highest international quality standards.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {product.featured && (
                  <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight, Award, Globe, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80')] bg-cover bg-center opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-secondary-foreground text-sm font-medium">ISO & BRC Certified Manufacturer</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-secondary-foreground mb-6 animate-fade-up animation-delay-100">
            Premium Dehydrated
            <span className="block text-accent">Vegetables & Spices</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            From the heart of Gujarat to global kitchens. Quality ingredients that preserve nature's goodness.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl">
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Request Catalog
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up animation-delay-400">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-accent">10 MT</p>
              <p className="text-secondary-foreground/70 text-sm mt-1">Daily Capacity</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-accent">5000 MT</p>
              <p className="text-secondary-foreground/70 text-sm mt-1">Cold Storage</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-accent">27K+</p>
              <p className="text-secondary-foreground/70 text-sm mt-1">Sq. Yards Plant</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-accent">5+</p>
              <p className="text-secondary-foreground/70 text-sm mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-secondary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

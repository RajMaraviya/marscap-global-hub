import { CheckCircle2, Factory, Leaf, MapPin, Microscope, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Factory,
    title: "State-of-the-Art Infrastructure",
    description: "27,000+ sq. yards processing plant with 5,000 MT cold storage capacity for optimal preservation.",
  },
  {
    icon: Leaf,
    title: "Premium Raw Materials",
    description: "Sourced from Gujarat's finest farms, meeting international food standards from the very first step.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Based in Mahuva, Asia's second-largest dehydrated food hub, with easy access to Pipavav & Mundra ports.",
  },
  {
    icon: Microscope,
    title: "Advanced R&D",
    description: "Continuous innovation to enhance nutritional value and product quality through rigorous research.",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description: "We honor client specifications and deliver exactly what's needed, without unnecessary delays.",
  },
  {
    icon: Shield,
    title: "Stringent Quality Control",
    description: "BRC & ISO certified with GFSI inspections. Third-party lab testing from SGS, QSS, and GEO-CHEM.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image & Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=800&q=80"
                alt="MarsCap facility"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-8 md:right-8 bg-card rounded-2xl p-6 shadow-elevated border border-border">
              <p className="text-4xl font-serif font-bold text-primary">10 MT</p>
              <p className="text-muted-foreground">Daily Production</p>
              <div className="flex items-center gap-2 mt-3 text-sm text-secondary">
                <CheckCircle2 className="w-4 h-4" />
                <span>Consistent quality output</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-primary font-semibold mb-3">About MarsCap</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              5+ Years of Excellence in Dehydrated Foods
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              MarsCap promotes eternal good health with the finest dehydrated vegetables, herbs, and spices. After tremendous domestic success, we're now serving the global market with the same commitment to quality and authenticity.
            </p>

            <div className="space-y-4">
              {values.slice(0, 3).map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {values.slice(3).map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-warm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

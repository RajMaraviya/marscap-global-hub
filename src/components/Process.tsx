import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Farm to Factory",
    description: "Visual inspection of all products upon arrival. Thorough contamination checks before processing.",
  },
  {
    number: "02",
    title: "Washing & Cleaning",
    description: "Multi-stage washing process with quality checks to ensure only the best produce continues.",
  },
  {
    number: "03",
    title: "Peeling & Preparation",
    description: "Careful peeling to remove external contaminants while preserving the vegetable's integrity.",
  },
  {
    number: "04",
    title: "Slicing & Cutting",
    description: "Precision cutting to customer specifications for uniform dehydration and quality.",
  },
  {
    number: "05",
    title: "Dehydration Process",
    description: "State-of-the-art drying technology preserving nutrients, flavor, and natural color.",
  },
  {
    number: "06",
    title: "Sorting & Grading",
    description: "Automated and manual sorting ensures consistent quality across every batch.",
  },
  {
    number: "07",
    title: "Metal Detection",
    description: "Advanced detection removes all ferrous, non-ferrous impurities and stainless steel particles.",
  },
  {
    number: "08",
    title: "Lab Testing",
    description: "In-house and third-party testing (SGS, QSS, GEO-CHEM) for international compliance.",
  },
  {
    number: "09",
    title: "Packaging & Dispatch",
    description: "Hygienic packaging with proper quantity allocation for optimal product conservation.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3">Our Process</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quality at Every Step
          </h2>
          <p className="text-lg text-muted-foreground">
            From farm to final packaging, every step is monitored to ensure the highest quality standards.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex items-start gap-6 md:gap-12 group"
              >
                {/* Number */}
                <div className="relative z-10 w-16 h-16 bg-card border-2 border-border rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                  <span className="font-serif text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8 border-b border-border last:border-0 group-hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                  <p className="text-muted-foreground max-w-2xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Shield, Award, FileCheck, Leaf } from "lucide-react";

const certifications = [
  { name: "FSSAI", description: "Food Safety Standards Authority" },
  { name: "FSSC 22000", description: "Food Safety System Certification" },
  { name: "US FDA", description: "U.S. Food & Drug Administration" },
  { name: "Spices Board", description: "Spices Board of India" },
  { name: "APEDA", description: "Agricultural Export Development" },
  { name: "BRC & ISO", description: "Global Food Safety Standards" },
];

export const Certifications = () => {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <p className="font-serif font-bold text-foreground">Globally Certified</p>
              <p className="text-sm text-muted-foreground">Trusted by international buyers</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center group cursor-default">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

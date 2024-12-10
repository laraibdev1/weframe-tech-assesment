import { Clock, Package, Truck, CreditCard } from 'lucide-react';

export function Features() {
  // Define an array of features with their respective icons, titles, and descriptions
  const features = [
    {
      icon: Truck,  // Icon for "Livraison & Retours"
      title: "Livraison & Retours",
      description: "Livraison gratuite"
    },
    {
      icon: Package,  // Icon for "Garantie Produit"
      title: "Garantie Produit",
      description: "Garantie 2 ans"
    },
    {
      icon: Clock,  // Icon for "Click & Collect"
      title: "Click & Collect",
      description: "Retrait en magasin"
    },
    {
      icon: CreditCard,  // Icon for "Paiement sécurisé"
      title: "Paiement sécurisé",
      description: "100% sécurisé"
    }
  ];

  return (
    // Section wrapper with padding and a border on the top and bottom
    <section className="py-12 border-y">
      <div className="container">
        {/* Grid layout for feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Loop through each feature and render a card */}
          {features.map((feature, i) => (
            <div
              key={i}
              // Apply animation with a delay based on the index of the feature
              className={`flex items-center gap-4 opacity-0 translate-y-5 animate-fade-up delay-${i * 100}`}
            >
              {/* Render the icon for the feature */}
              <feature.icon className="h-10 w-10 text-[#00C896]" />
              <div>
                {/* Feature title */}
                <h3 className="font-medium text-sm">{feature.title}</h3>
                {/* Feature description */}
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

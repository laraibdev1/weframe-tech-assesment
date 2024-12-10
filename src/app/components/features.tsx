import { Clock, Package, Truck, CreditCard } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Truck,
      title: "Livraison & Retours",
      description: "Livraison gratuite"
    },
    {
      icon: Package,
      title: "Garantie Produit",
      description: "Garantie 2 ans"
    },
    {
      icon: Clock,
      title: "Click & Collect",
      description: "Retrait en magasin"
    },
    {
      icon: CreditCard,
      title: "Paiement sécurisé",
      description: "100% sécurisé"
    }
  ];

  return (
    <section className="py-12 border-y">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 opacity-0 translate-y-5 animate-fade-up delay-${i * 100}`}
            >
              <feature.icon className="h-10 w-10 text-[#00C896]" />
              <div>
                <h3 className="font-medium text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

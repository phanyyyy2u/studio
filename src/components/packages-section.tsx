import { CheckCircle2, Star, Gem, Crown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "./ui/card";
import { Button } from "./ui/button";

export default function PackagesSection() {
  const packages = [
    {
      title: "Essential Elegance",
      icon: <Star className="h-8 w-8 mb-4 text-primary" />,
      price: "$5,000",
      description: "Perfect for intimate gatherings and simple, elegant events.",
      features: [
        "5-hour venue rental",
        "Tables and chairs for up to 50 guests",
        "Standard lighting package",
        "Access to gardens for photos",
      ],
    },
    {
      title: "Diamond Dream",
      icon: <Gem className="h-8 w-8 mb-4 text-primary" />,
      price: "$10,000",
      description: "Our most popular package for weddings and quinceañeras.",
      features: [
        "8-hour venue rental",
        "Tables, chairs, and linens for up to 150 guests",
        "Premium lighting and sound system",
        "Pool area access",
        "Event coordinator",
      ],
      popular: true,
    },
    {
      title: "Royal Affair",
      icon: <Crown className="h-8 w-8 mb-4 text-primary" />,
      price: "$18,000",
      description: "The ultimate luxury experience for an unforgettable event.",
      features: [
        "Full-day venue rental (12 hours)",
        "Complete setup for up to 300 guests",
        "Customizable LED lighting and decor",
        "Full access to all areas, including bridal suite",
        "Valet parking service",
      ],
    },
  ];

  return (
    <section id="packages" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold">Our Curated Packages</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Choose a package that suits your needs or contact us for a custom quote.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.title}
              className={`flex flex-col ${pkg.popular ? "border-primary border-2 shadow-lg" : ""}`}
            >
              <CardHeader className="items-center text-center">
                {pkg.icon}
                <CardTitle className="font-headline text-2xl">{pkg.title}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <p className="text-3xl font-bold mb-4">{pkg.price}</p>
                <a href="#contact" className="w-full">
                  <Button className="w-full" variant={pkg.popular ? "default" : "secondary"}>
                    Inquire Now
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

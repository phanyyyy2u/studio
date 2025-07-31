"use client";
import { CheckCircle2, Calendar, Users, DollarSign, Flame, ParkingSquare, Armchair } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "@/lib/language-provider";
import { dictionary } from "@/lib/i18n";

export default function PackagesSection() {
  const { language } = useLanguage();
  const t = dictionary[language];

  const packages = [
    {
      title: t.packages.weekday.title,
      price: "$2,500 MXN",
      description: t.packages.weekday.description,
    },
    {
      title: t.packages.weekend.title,
      price: "$3,000 MXN",
      description: t.packages.weekend.description,
      popular: true,
    },
  ];

  const features = [
      { name: t.packages.features.pool, icon: <Users className="h-8 w-8 text-primary" /> },
      { name: t.packages.features.grills, icon: <Flame className="h-8 w-8 text-primary" /> },
      { name: t.packages.features.furniture, icon: <Armchair className="h-8 w-8 text-primary" /> },
      { name: t.packages.features.parking, icon: <ParkingSquare className="h-8 w-8 text-primary" /> },
  ]

  return (
    <section id="packages" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold">{t.packages.title}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            {t.packages.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.title}
              className={`flex flex-col ${pkg.popular ? "border-primary border-2 shadow-lg" : ""}`}
            >
              <CardHeader className="items-center text-center">
                <Calendar className="h-8 w-8 mb-4 text-primary" />
                <CardTitle className="font-headline text-2xl">{pkg.title}</CardTitle>
                 <p className="text-3xl font-bold pt-2">{pkg.price}</p>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col items-center">
                <a href="#contact" className="w-full">
                  <Button className="w-full" variant={pkg.popular ? "default" : "secondary"}>
                    {t.packages.checkAvailabilityButton}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="max-w-4xl mx-auto mt-12">
            <Card className="shadow-lg">
                <CardHeader className="items-center">
                    <CardTitle className="font-headline text-2xl">{t.packages.includedTitle}</CardTitle>
                </CardHeader>
                 <CardContent>
                    <ul className="grid grid-cols-2 gap-4 text-center md:flex md:justify-around">
                        {features.map(feature => (
                          <li key={feature.name} className="flex flex-col items-center gap-2">
                            {feature.icon}
                            <span>{feature.name}</span>
                          </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}

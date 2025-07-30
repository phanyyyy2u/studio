import { CheckCircle2, Calendar, Users, DollarSign, Flame, ParkingSquare, Armchair } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "./ui/card";
import { Button } from "./ui/button";

export default function PackagesSection() {
  const packages = [
    {
      title: "Renta de Lunes a Jueves",
      icon: <Calendar className="h-8 w-8 mb-4 text-primary" />,
      price: "$2,500 MXN",
      description: "Disfruta de nuestras instalaciones a un precio especial entre semana.",
    },
    {
      title: "Renta de Fin de Semana",
      icon: <Calendar className="h-8 w-8 mb-4 text-primary" />,
      price: "$3,000 MXN",
      description: "Perfecto para tus eventos de Viernes a Domingo.",
      popular: true,
    },
  ];

  const features = [
      "Acceso a la alberca",
      "Asadores disponibles",
      "Mobiliario (sillas y mesas)",
      "Estacionamiento privado",
  ]

  return (
    <section id="packages" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold">Nuestros Precios</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Elige la opción que mejor se adapte a tu evento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.title}
              className={`flex flex-col ${pkg.popular ? "border-primary border-2 shadow-lg" : ""}`}
            >
              <CardHeader className="items-center text-center">
                {pkg.icon}
                <CardTitle className="font-headline text-2xl">{pkg.title}</CardTitle>
                 <p className="text-3xl font-bold pt-2">{pkg.price}</p>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col items-center">
                <a href="#contact" className="w-full">
                  <Button className="w-full" variant={pkg.popular ? "default" : "secondary"}>
                    Consultar Disponibilidad
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="max-w-4xl mx-auto mt-12">
            <Card className="shadow-lg">
                <CardHeader className="items-center">
                    <CardTitle className="font-headline text-2xl">Todas las rentas incluyen</CardTitle>
                </CardHeader>
                 <CardContent>
                    <ul className="grid grid-cols-2 gap-4 text-center md:flex md:justify-around">
                        <li className="flex flex-col items-center gap-2">
                           <Users className="h-8 w-8 text-primary" />
                           <span>Alberca</span>
                        </li>
                        <li className="flex flex-col items-center gap-2">
                           <Flame className="h-8 w-8 text-primary" />
                           <span>Asadores</span>
                        </li>
                        <li className="flex flex-col items-center gap-2">
                           <Armchair className="h-8 w-8 text-primary" />
                           <span>Mobiliario</span>
                        </li>
                        <li className="flex flex-col items-center gap-2">
                           <ParkingSquare className="h-8 w-8 text-primary" />
                           <span>Estacionamiento</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}

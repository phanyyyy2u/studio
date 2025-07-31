"use client";
import { CalendarDays, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useLanguage } from "@/lib/language-provider";
import { dictionary } from "@/lib/i18n";

export default function AvailabilitySection() {
  const { language } = useLanguage();
  const t = dictionary[language];

  return (
    <section id="availability" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <CalendarDays className="h-12 w-12 mx-auto text-primary" />
          <h2 className="text-4xl font-headline font-bold mt-4">{t.availability.title}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            {t.availability.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <Card className="lg:col-span-2 shadow-lg">
                <CardContent className="p-2 sm:p-4">
                    <Calendar
                        mode="multiple"
                        className="w-full"
                        disabled={{ before: new Date() }}
                        defaultMonth={new Date()}
                     />
                </CardContent>
            </Card>
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">{t.availability.bookingTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                        {t.availability.bookingDescription}
                    </p>
                    <div className="space-y-3">
                         <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-primary"/>
                            <span>(555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-primary"/>
                            <span>contact@qs-events.com</span>
                        </div>
                    </div>
                    <a href="#contact" className="block pt-2">
                        <Button className="w-full">{t.availability.quoteButton}</Button>
                    </a>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}

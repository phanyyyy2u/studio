"use client";
import { useState, useEffect } from "react";
import { CalendarDays, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { useLanguage } from "@/lib/language-provider";
import { dictionary } from "@/lib/i18n";

export default function AvailabilitySection() {
  const { language } = useLanguage();
  const t = dictionary[language];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="availability" className="bg-secondary animate-fade-in-up" style={{animationDuration: '1.2s'}}>
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
                <CardContent className="p-2 sm:p-4 min-h-[385px] flex items-center justify-center">
                    {isClient ? (
                      <Calendar
                        mode="multiple"
                        className="w-full"
                        disabled={{ before: new Date() }}
                        defaultMonth={new Date() }
                        modifiers={{
                          booked: [(date) => date.getFullYear() === 2025 && date.getMonth() === 7 && date.getDate() === 4]
                        }}
                        modifiersClassNames={{
                          booked: "bg-red-500 text-white !opacity-100 border-2 border-red-700"
                        }}
                        modifiersStyles={{
                          booked: { backgroundColor: '#ef4444', color: '#fff', border: '2px solid #b91c1c', opacity: 1 }
                        }}
                      />
                    ) : (
                      <div className="w-full p-4">
                        <div className="flex justify-between items-center mb-4">
                          <Skeleton className="h-8 w-24" />
                          <Skeleton className="h-8 w-32" />
                          <Skeleton className="h-8 w-24" />
                        </div>
                         <div className="grid grid-cols-7 gap-2">
                            {[...Array(35)].map((_, i) => (
                              <Skeleton key={i} className="h-12 w-12 rounded-md" />
                            ))}
                        </div>
                      </div>
                    )}
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
                            <span>844 254 5235</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-primary"/>
                            <span>qsevents67@gmail.com</span>
                        </div>
                    </div>
                    <a href="#availability" className="block pt-2">
                        <Button className="w-full">{t.availability.quoteButton}</Button>
                    </a>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}

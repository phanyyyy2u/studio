"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MailCheck } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";
import { dictionary } from "@/lib/i18n";


const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  phone: z.string().min(7, "Ingresa un número válido."),
  eventDate: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres.").max(500, "El mensaje debe ser menor a 500 caracteres."),
});

export default function ContactSection() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = dictionary[language];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      eventDate: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://formspree.io/f/xkgzzbzk", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "Nombre": values.name,
          "Teléfono": values.phone,
          "Fecha del evento": values.eventDate,
          "Mensaje": values.message
        })
      });
      if (response.ok) {
        toast({
          title: t.contact.toast.title,
          description: t.contact.toast.description,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "No se pudo enviar el mensaje. Intenta de nuevo más tarde.",
          variant: "destructive"
        });
      }
    } catch (e) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Intenta de nuevo más tarde.",
        variant: "destructive"
      });
    }
  }

  return (
    <section id="contact" className="container animate-fade-in-up" style={{animationDuration: '1.2s'}}>
      <div className="text-center mb-12">
        <MailCheck className="h-12 w-12 mx-auto text-primary" />
        <h2 className="text-4xl font-headline font-bold mt-4">{t.contact.title}</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>
      </div>
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{t.contact.formTitle}</CardTitle>
          <CardDescription>{t.contact.formDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.form.date}</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormDescription>
                        {t.contact.form.dateHint}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.form.message}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.contact.form.messagePlaceholder}
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {t.contact.form.submitButton}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

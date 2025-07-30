"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { suggestEventLayout, type SuggestEventLayoutOutput } from "@/ai/flows/suggest-event-layout";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Bot, Lightbulb, Map, Palette } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const formSchema = z.object({
  numberOfGuests: z.coerce.number().min(1, "Please enter the number of guests."),
  eventType: z.string().min(1, "Please select an event type."),
  userPreferences: z.string().min(10, "Please describe your preferences in a bit more detail."),
});

export default function AiPlannerSection() {
  const [result, setResult] = useState<SuggestEventLayoutOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numberOfGuests: 100,
      eventType: "",
      userPreferences: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const res = await suggestEventLayout(values);
      setResult(res);
      toast({
        title: "Suggestions Ready!",
        description: "Your personalized event plan is here.",
      });
    } catch (error) {
      console.error("Error generating event layout:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "We couldn't generate suggestions. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-planner" className="container">
      <div className="text-center mb-12">
        <Bot className="h-12 w-12 mx-auto text-primary" />
        <h2 className="text-4xl font-headline font-bold mt-4">AI-Powered Event Planner</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Describe your vision and let our AI assistant craft the perfect layout and decor suggestions for your event.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <Lightbulb />
              Tell Us Your Dream
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="numberOfGuests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Guests</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 150" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an event type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Wedding">Wedding</SelectItem>
                            <SelectItem value="Quinceañera">Quinceañera</SelectItem>
                            <SelectItem value="Corporate Meeting">Corporate Meeting</SelectItem>
                            <SelectItem value="Birthday Party">Birthday Party</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="userPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Preferences</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your desired style, colors, ambiance, etc. For example: 'A rustic-chic wedding with blush and gold colors, lots of natural light and greenery.'"
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Generating Ideas..." : "Get AI Suggestions"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="space-y-8">
            {isLoading && (
                 <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <Skeleton className="h-7 w-48" />
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <Skeleton className="h-7 w-48" />
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </CardContent>
                    </Card>
                 </div>
            )}
            {result ? (
                <>
                <Card className="bg-secondary">
                    <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2">
                        <Map />
                        Layout Suggestion
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="whitespace-pre-wrap">{result.layoutSuggestion}</p>
                    </CardContent>
                </Card>
                <Card className="bg-secondary">
                    <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2">
                        <Palette />
                        Decor Suggestions
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="whitespace-pre-wrap">{result.decorSuggestions}</p>
                    </CardContent>
                </Card>
                </>
            ) : !isLoading && (
                 <Card className="flex flex-col items-center justify-center text-center h-full min-h-[300px] bg-secondary/50 border-dashed">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Your Suggestions Will Appear Here</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Fill out the form to get started!</p>
                    </CardContent>
                 </Card>
            )}
        </div>
      </div>
    </section>
  );
}

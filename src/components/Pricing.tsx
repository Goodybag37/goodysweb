import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Full Stack",
    popular: 1,
    price: "200+",
    description: "Build an industry standard full stack website ",
    buttonText: "Book Now",
    benefitList: [
      "Front End",
      "Back End",
      "Database",
      "Domain name",
      "Hosting",
      "Business Email",
    ],
  },
  {
    title: "Front End ",
    popular: 0,
    price: "100+",
    description: "Design only the front end of the website ",
    buttonText: "Book Now",
    benefitList: [
      "Front End",
      "Modern Ui",
      "Domain Name",
      "Hosting",
      "Professional Email",
      "Wordpress (optional)",
    ],
  },
  {
    title: "Back End",
    popular: 0,
    price: "120+",
    description: "Design only the backend of your website ",
    buttonText: "Book Now",
    benefitList: [
      "Back End ",
      "Railway",
      "Supabase",
      "Postgres",
      "Authentication",
      "Aws hosting(optional)",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Choose a Project type
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Select your desired website and contact us for a proper description of
        your taste
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /project</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <a href="https://wa.me/9052148610">
                <Button className="w-full">{pricing.buttonText}</Button>
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

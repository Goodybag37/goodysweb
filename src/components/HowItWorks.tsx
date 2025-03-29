import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "Our Websites are always acccessible and easy to navigate through as we ensure seemless use of topography to bring your needed contents closer to your view",
  },
  {
    icon: <MapIcon />,
    title: "Creativity",
    description:
      "We always ensure our websites are aesthetically pleasing and catchy so as to help our clients attract leads and traffic to thier site ",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "We host large websites using cloud hosting services such as aws where we are able to control the loading speed and increase your website performance as your users grow",
  },
  {
    icon: <GiftIcon />,
    title: "Responsiveness",
    description: "Our websites are always highly reponsive on various screens",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our Websites{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
        </span>
        Features
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Here are some of the remarkable qualities websites we design are known
        to always possess
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

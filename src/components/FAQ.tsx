import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Does the fee include hosting and domain name purchase ",
    answer:
      "Yes When you make payment to build a project part of the fee is deducted to purchase a domain and hosting for you we also duduct these fees if you have already hosted your site and just need a developer to write the code",
    value: "item-1",
  },
  {
    question: "What Languages do we program with ",
    answer:
      "We build our frontends with react and our backend with node but we also do wordpress designs for frontend depending on client demands ",
    value: "item-2",
  },
  {
    question: "What time span do we use to deliver projects",
    answer:
      "Our average time span to build a project is one month but it could be more or less depending on the complexity of the project",
    value: "item-3",
  },
  {
    question: "Do we do cloud hosting services ",
    answer:
      "Yes Goodys web is proficient with cloud hosting services like Aws or azure and you pay for the fees as you are charged per month ",
    value: "item-4",
  },
  {
    question: "Do we Update our Websites after delivery",
    answer:
      "One of our best features is that we update all websites monthly for modern tools and UI  without additional costs ",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="https://wa.me/9052148610"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};

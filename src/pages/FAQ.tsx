import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      category: "Shipping & Delivery",
      items: [
        {
          q: "How long does shipping take?",
          a: "We roast to order every Monday and Thursday. Shipping typically takes 3-5 business days after roasting to ensure maximum freshness."
        },
        {
          q: "Do you ship internationally?",
          a: "Currently, we only ship within the United States and Canada. We are working on expanding our reach!"
        },
        {
          q: "Is shipping free?",
          a: "We offer free standard shipping on orders over $50, or for any active subscription."
        }
      ]
    },
    {
      category: "Our Coffee",
      items: [
        {
          q: "Are your beans fair trade?",
          a: "Yes, we work directly with farmers to ensure they are paid well above Fair Trade minimums. We believe in Direct Trade transparency."
        },
        {
          q: "How should I store my coffee?",
          a: "Keep your coffee in an airtight container in a cool, dark place. Avoid the fridge or freezer as moisture can damage the oils."
        },
        {
          q: "What is the best brew method?",
          a: "It depends on the bean! Check out our new 'Guides' section for detailed brewing instructions for V60, French Press, and more."
        }
      ]
    },
    {
      category: "Subscriptions",
      items: [
        {
          q: "Can I pause my subscription?",
          a: "Absolutely. You can pause, skip, or cancel your subscription at any time from your account dashboard."
        },
        {
          q: "How often will I be charged?",
          a: "You are charged on the day your order is processed. You can choose frequencies of 1, 2, or 4 weeks."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-espresso text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-coffee/70 mb-12">
          Everything you need to know about our beans, brewing, and shipping.
        </p>

        <div className="space-y-8">
          {faqs.map((section, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-serif text-espresso mb-6 border-b border-cream pb-2">
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {section.items.map((item, itemIdx) => (
                  <AccordionItem key={itemIdx} value={`${idx}-${itemIdx}`}>
                    <AccordionTrigger className="text-lg text-coffee font-medium hover:text-accent hover:no-underline text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-coffee/80 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-coffee">
            Still have questions?{" "}
            <a href="/contact" className="text-accent font-semibold underline hover:text-gold">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

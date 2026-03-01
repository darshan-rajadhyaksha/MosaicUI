import ClassicAccordion from "@/components/essentials/classic-accordion/classic-accordion";

const ClassicAccordionMultiplePreview = () => {
  return (
    <div style={{ 
      width: "100%", 
      maxWidth: "480px",
      padding: "16px",
    }}>
      <ClassicAccordion
        items={faq}
        multiple
      />
    </div>
  )
};

const faq = [
  {
    id: "pricing",
    title: "How does pricing work?",
    content: `Our pricing is based on usage and plan tier. 
    You can upgrade, downgrade, or cancel at any time from your account settings.`,
  },
  {
    id: "trial",
    title: "Do you offer a free trial?",
    content: `Yes. We offer a 14-day free trial with full access to all features. 
    No credit card is required to get started.`,
  },
  {
    id: "support",
    title: "What kind of support do you provide?",
    content: `We provide email support on all plans. 
    Priority and live chat support are available on higher-tier plans.`,
  },
  {
    id: "security",
    title: "How is my data secured?",
    content: `We use industry-standard encryption in transit and at rest. 
    Access to customer data is restricted and monitored.`,
  },
];

export default ClassicAccordionMultiplePreview;
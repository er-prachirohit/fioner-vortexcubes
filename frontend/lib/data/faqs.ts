export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What is Fioner?",
    answer:
      "Fioner is a connected vehicle ecosystem that brings together QR-based vehicle safety, GPS tracking, SOS and emergency contacts, AI-assisted trip planning, FASTag and vehicle utilities, and a hardware marketplace into one app — backed by a website and public QR portal for non-app interactions.",
  },
  {
    question: "How does the QR work?",
    answer:
      "Each Fioner QR is a physical tag you attach to your vehicle. Once you activate it in the app and link it to a vehicle, anyone who scans it lands on a secure Fioner page showing only the information you've chosen to make public — with actions like masked calling or reporting an issue.",
  },
  {
    question: "Does the person scanning my QR need the Fioner app?",
    answer:
      "No. The public QR page is designed to work entirely in a mobile browser. No installation is required for the basic supported actions.",
  },
  {
    question: "How does masked calling protect my number?",
    answer:
      "When someone taps Call Owner from your public QR page, the call is routed through Fioner without ever revealing your personal phone number to the caller.",
  },
  {
    question: "How does GPS tracking work?",
    answer:
      "Once a Fioner GPS device is installed and linked to a vehicle, the app can show live location, trip history, geofence alerts and device status, subject to device and network conditions.",
  },
  {
    question: "What happens when I trigger SOS?",
    answer:
      "Pressing and holding the SOS control captures your latest location and notifies the emergency contacts you've configured. You get a short window to cancel if it was triggered by mistake, and the app can surface emergency calling and nearby emergency points.",
  },
  {
    question: "Can I add multiple vehicles?",
    answer:
      "Yes. Your Digital Garage supports multiple vehicles, each with its own QR, GPS, documents, fuel history and trip records.",
  },
  {
    question: "Can I buy Fioner hardware online?",
    answer:
      "Yes. The Marketplace lets you browse, purchase and track delivery of QR tags and GPS devices directly from the website or the app.",
  },
  {
    question: "How does membership work?",
    answer:
      "Membership plans unlock feature entitlements such as extended trip intelligence, GPS capabilities and priority support. Exact pricing and benefits are configured by Fioner and shown in the app and Membership pages.",
  },
  {
    question: "How does trip intelligence work?",
    answer:
      "Tell Fioner your origin, destination and vehicle, and it estimates distance, duration, fuel needed, fuel cost and toll cost, then suggests stops along the way. Values that depend on third-party data are clearly labelled as estimates.",
  },
  {
    question: "Can I contact support if something goes wrong?",
    answer:
      "Yes. The AI assistant handles first-level support and can escalate to a human executive when needed, carrying your conversation context so you don't have to repeat yourself.",
  },
];

 

import { Metadata } from "next";
import dynamic from "next/dynamic";
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: true, // Keep SSR if needed
  loading: () => <p>Loading...</p>,
});

export const metadata: Metadata = {
  title: "Contact Page | NextCommerce Nextjs E-commerce template",
  description: "This is Contact Page for NextCommerce Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;

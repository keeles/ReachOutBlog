import ContactForm from "@/app/components/contact-form";
import {Suspense} from "react";

export default function Info() {
  return (
    <div>
      <Suspense>
        <ContactForm variant="Organization" />
      </Suspense>
    </div>
  );
}

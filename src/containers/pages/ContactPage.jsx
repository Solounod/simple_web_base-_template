import { SendEmailContact } from "../../components/contact/SendEmailContact";
import { LayoutFull } from "../../components/hocs/LayoutFull";

export function ContactPage() {
  return (
    <LayoutFull>
      <SendEmailContact />
    </LayoutFull>
  );
}
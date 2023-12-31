import { LayoutFull } from "../../components/hocs/LayoutFull";
import { SendEmailContact } from "../../components/contact/SendEmailContact";
import { Services } from "../../components/services/Services";

export function ServicePage() {
  return (
    <LayoutFull>
      <Services />
      <SendEmailContact />
    </LayoutFull>
  );
}
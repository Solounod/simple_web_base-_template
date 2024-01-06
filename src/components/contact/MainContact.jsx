import { DetailContact } from "./DetailContact";
import { HeaderContact } from "./HeaderContact";
import { SendEmailContact } from "./SendEmailContact";

export function MainContact () {
    return (
        <section>
            <HeaderContact />
            <DetailContact />
            <SendEmailContact />
        </section>
    )
}
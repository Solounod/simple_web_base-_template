import { AboutMe } from "../../components/aboutme/AboutMe";
import { SendEmailContact } from "../../components/contact/SendEmailContact";
import { LayoutFull } from "../../components/hocs/LayoutFull";

export function AboutmePage () {

    return (
        <LayoutFull>
            <AboutMe />
            <SendEmailContact/>
        </LayoutFull>
    )
}
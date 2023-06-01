import { FunctionComponent } from "react";
import ContactButton from "./ContactButton";

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <div className="row-start-3 col-start-3 lg:row-start-5 lg:col-start-5 lg:row-span-2 w-full lg:w-60 justify-self-end content-end xl:text-2xl md:text-xl grid text-right z-10">
      <h3>
        <strong>
          <i>CONTACT</i>
        </strong>
      </h3>
      <br />
      <ul>
        <ContactButton link="https://twitter.com/aryan_shaily">
          TWITTER
        </ContactButton>
        <ContactButton link="https://www.linkedin.com/in/aryan-shaily/">
          LINKEDIN
        </ContactButton>
        <br />
        <ContactButton link="mailto:aryanshaily123@gmail.com">
          MAIL
        </ContactButton>
      </ul>
    </div>
  );
};

export default Contact;

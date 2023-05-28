import Link from "next/link";
import { FunctionComponent } from "react";

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <div className="row-start-5 col-start-5 row-span-2 w-60 justify-self-end content-end xl:text-2xl md:text-xl grid text-right">
      <h3>
        <strong>
          <i>CONTACT</i>
        </strong>
      </h3>
      <br />
      <ul>
        <li>
          <Link href={"https://twitter.com/aryan_shaily"} target="_blank">
            TWITTER
          </Link>
        </li>
        <li>
          <Link
            href={"https://www.linkedin.com/in/aryan-shaily/"}
            target="_blank"
          >
            LINKEDIN
          </Link>
        </li>
        <br />
        <li>
          <Link href={"mailto:aryanshaily123@gmail.com"}>MAIL</Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

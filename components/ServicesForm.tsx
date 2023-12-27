"use client";
import { FunctionComponent, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

interface ServicesFormProps {
  selectedService?: string;
}

const ServicesForm: FunctionComponent<ServicesFormProps> = ({
  selectedService,
}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID || ""
  );

  const form = useRef(null);

  return (
    <form
      ref={form}
      method="post"
      className="w-full h-max grid  lg:grid-rows-[min-content_min-content_1fr] grid-cols-1 lg:grid-cols-2 gap-4 gap-x-8 p-4 bg-cardBg0 rounded-[10px] text-black max-w-4xl relative select-none shadow"
      onSubmit={handleSubmit}
    >
      <fieldset className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required={true}
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className=" outline-none"
          placeholder="your name..."
        />
      </fieldset>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          placeholder="your email..."
          className=" outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="project">Project Type</label>
        <input
          type="text"
          name="project"
          id="project"
          value={selectedService}
          onChange={(e) => e.preventDefault()}
          className="outline-none"
          placeholder="what service do you want?"
        />
      </div>
      <div className="lg:row-start-3 lg:col-span-2 flex flex-col gap-1 select-none">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={message}
          required={true}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          cols={30}
          rows={12}
          maxLength={2400}
          placeholder="Leave a message..."
          className="w-full h-full p-4 bg-inputBg outline-none resize-none"
        ></textarea>
      </div>
      <input
        type="submit"
        value={state.succeeded ? "sent" : "send"}
        className="px-3 p-2 absolute bottom-0 right-0 mx-[1.3rem] my-6 rounded-[10px] bg-buttonBg h-min w-28 whitespace-nowrap shadow-md z-10"
      />
    </form>
  );
};

export default ServicesForm;

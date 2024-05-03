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
      className="gap-2 p-5 flex flex-col bg-cardBg0 relative h-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col lg:flex-row gap-2">
        <fieldset className="flex flex-col flex-1">
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
        <div className="flex flex-col flex-1">
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
      </div>
      <div className="flex flex-col">
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

      <div className="lg:row-start-3 lg:col-span-2 flex flex-col select-none relative h-full">
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
          rows={10}
          maxLength={2400}
          placeholder="Leave a message..."
          className="w-full h-full p-4 bg-inputBg outline-none resize-none"
        ></textarea>
        <input
          type="submit"
          value={state.succeeded ? "sent" : "send"}
          className="px-3 p-2 absolute bottom-0 right-0 m-2 my-[10px] rounded-[10px] bg-buttonBg h-min w-28 whitespace-nowrap shadow-md z-10 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default ServicesForm;

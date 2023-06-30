"use client";
import {
  ChangeEventHandler,
  FunctionComponent,
  SyntheticEvent,
  useState,
} from "react";

interface ServicesFormProps {
  selectedService?: string;
}

const ServicesForm: FunctionComponent<ServicesFormProps> = ({
  selectedService,
}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    let data = {
      userName,
      email,
      message,
    };
  };

  return (
    <form className="w-full h-max grid  lg:grid-rows-[min-content_min-content_1fr] grid-cols-1 lg:grid-cols-2 gap-4 gap-x-8 p-4 rounded-md bg-zinc-200 text-black max-w-4xl relative select-none border-zinc-400 border-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="rounded-md p-2 bg-zinc-100 focus:outline-zinc-400"
          placeholder="your name..."
        />
      </div>
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
          className="rounded-md p-2 bg-zinc-100 focus:outline-zinc-400"
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
          className="rounded-md p-2 bg-zinc-100 focus:outline-zinc-400"
          placeholder="what service do you want?"
        />
      </div>
      <div className="lg:row-start-3 lg:col-span-2 flex flex-col gap-1 select-none">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          cols={30}
          rows={12}
          maxLength={2400}
          placeholder="Leave a message..."
          className="w-full rounded-md p-4 bg-zinc-100 focus:outline-zinc-400 border-zinc-300 border-2"
        ></textarea>
      </div>
      <div className="absolute bottom-6 right-6 text-lg">
        <input
          type="submit"
          value="submit"
          onClick={handleSubmit}
          className="bg-zinc-300 rounded-md p-1 px-2 shadow-sm active:bg-zinc-400"
        />
      </div>
    </form>
  );
};

export default ServicesForm;

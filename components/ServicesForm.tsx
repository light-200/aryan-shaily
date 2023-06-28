"use client";
import { FunctionComponent } from "react";

interface ServicesFormProps {}

const ServicesForm: FunctionComponent<ServicesFormProps> = () => {
  return (
    <div className="w-full h-full grid  grid-rows-[min-content_min-content_1fr] grid-cols-2 gap-4 gap-x-8 p-4 rounded-md bg-zinc-300 text-black max-w-4xl relative select-none">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="rounded-md p-2"
          placeholder="your name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your email"
          className="rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="project">Project Type</label>
        <input
          type="text"
          name="project"
          id="project"
          className="rounded-md p-2"
          placeholder="what service do you want?"
        />
      </div>
      <div className="row-start-3 col-span-2 flex flex-col gap-2 select-none">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          maxLength={2400}
          placeholder="Leave a message..."
          className="w-full h-[96%] rounded-md p-4"
        ></textarea>
      </div>
      <div className="absolute bottom-6 right-6 text-lg">
        <input
          type="button"
          value="submit"
          className="bg-zinc-300 rounded-md p-1 px-2 shadow-sm active:bg-zinc-400"
        />
      </div>
    </div>
  );
};

export default ServicesForm;

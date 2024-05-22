import { ComponentPropsWithRef, forwardRef } from "react";

interface TextareaType extends ComponentPropsWithRef<"textarea"> {
  name: string;
  title: string;
}

const Textarea = forwardRef<HTMLDivElement, TextareaType>(({ name, title }) => {
  return (
    <div className="mb-2 flex flex-col w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <textarea
        id={name}
        name={name}
        rows={3}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      ></textarea>
    </div>
  );
});

export default Textarea;

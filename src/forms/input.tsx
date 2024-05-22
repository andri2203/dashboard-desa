import { ComponentPropsWithRef, forwardRef } from "react";

interface InputType extends ComponentPropsWithRef<"input"> {
  name: string;
  title: string;
}

const Input = forwardRef<HTMLDivElement, InputType>(
  ({ name, title, ...props }) => {
    return (
      <div className="flex flex-col w-full">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {title}
        </label>
        <input
          type={props.type}
          name={name}
          id={name}
          placeholder={title}
          className="block border border-gray-900 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-0 rounded-md"
        />
      </div>
    );
  }
);

export default Input;

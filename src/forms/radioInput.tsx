import { ComponentPropsWithRef, forwardRef } from "react";

interface RadioInputType extends ComponentPropsWithRef<"input"> {
  name: string;
  title: string;
  option: string[];
}

const RadioInput = forwardRef<HTMLDivElement, RadioInputType>(
  ({ name, title, option }) => {
    return (
      <div className="mb-2 flex flex-col w-full">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {title}
        </label>
        <div className="flex flex-col gap-1">
          {option.map((option, i) => (
            <div className="flex gap-1 items-center">
              <input
                key={name + i}
                type="radio"
                name={name}
                id={option}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                value={option}
              />
              <label
                htmlFor={option}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default RadioInput;

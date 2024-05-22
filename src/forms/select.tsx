import { ComponentPropsWithRef, forwardRef } from "react";

type optionSelect = {
  key: string;
  value: string;
};

interface SelectType extends ComponentPropsWithRef<"input"> {
  name: string;
  title: string;
  option: optionSelect[];
  optionDefault: string;
}

const Select = forwardRef<HTMLDivElement, SelectType>(
  ({ name, title, option, optionDefault }) => {
    return (
      <div className="mb-2 flex flex-col w-full">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {title}
        </label>
        <select
          name={name}
          id={name}
          className="block border border-gray-900 bg-transparent py-2.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-0 rounded-md"
        >
          <option value="">{optionDefault}</option>
          {option.map(({ key, value }, index) => (
            <option key={index} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;

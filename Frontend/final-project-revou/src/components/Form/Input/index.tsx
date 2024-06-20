interface InputProps {
  label: {
    text: string;
    htmlFor: string;
  };
  id: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  required: boolean;
}

export default function Input({
  label,
  id,
  type,
  name,
  value,
  placeholder,
  required,
}: InputProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="py-2 flex flex-col">
        <label
          htmlFor={label.htmlFor}
          className="cursor-pointer text-slate-600 font-semibold w-72"
        >
          {label.text}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          className="border border-gray-300 rounded-xl w-72 p-2 pl-2"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}

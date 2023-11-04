interface InputProps {
    htmlFor: string;
    type: string;
    placeholder: string;
    id: string;
    label: string;
    classes?: string;
    mainClass?: string;
}

export default function Input({
    htmlFor,
    type,
    placeholder,
    id,
    label,
    classes,
    mainClass
}: InputProps) {
    return (
      <div className={mainClass || ''}>
        <label htmlFor={htmlFor} className="block text-gray-700 font-bold mb-2">
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required
          autoComplete={type === "password" ? "off" : "on"}
          className={
            classes ||
            "shadow text-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          }
        />
      </div>
    );
}
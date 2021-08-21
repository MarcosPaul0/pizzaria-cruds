export function FormInput({ label, ...props }) {
  return (
    <div className="mt-4">
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-2 relative rounded-md shadow-sm">
        <input
          className={`
                    pl-2 block w-full
                    focus:ring-indigo-500 focus:border-indigo-500 
                    border-gray-300 rounded-md border border-gray-300
                `}
          {...props}
        />
      </div>
    </div>
  );
}

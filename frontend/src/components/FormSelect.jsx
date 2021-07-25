export function FormSelect({label, ...props}) {
    return (
        <div>
            <label htmlFor={props.id} className="block mt-4 text-sm font-medium text-gray-700" >{label}</label>
            <select id={props.id} name={props.name} className="pl-1 mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300" {...props} >
                {props.children}
            </select>
        </div>
    )
}
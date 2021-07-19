export function FormTextArea({label, ...props}) {
    return (
        <div className="mt-4">
            <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">{label}</label>
            <div className="mt-2 relative rounded-md shadow-sm">
                <textarea className="pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300"
                rows="5" {...props}></textarea>
            </div>
        </div>
    )
}
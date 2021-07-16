import { Link } from 'react-router-dom'

export function ButtonLink({color, ...props}) {
    return (
        <Link className={`transition duration-500 mt-8 bg-${color}-400 hover:bg-${color}-600 border border-gray-400 rounded-xl px-6 py-3`} {...props}>
            {props.children}
        </Link>
    )
}
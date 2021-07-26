import { Link } from 'react-router-dom';

export function ButtonLink({ color, ...props }) {
  return (
    <Link
      className={`transition text-projectGray-25 duration-500 mt-8 bg-${color}-500 hover:bg-${color}-700 rounded-xl px-6 py-3`}
      {...props}
    >
      {props.children}
    </Link>
  );
}

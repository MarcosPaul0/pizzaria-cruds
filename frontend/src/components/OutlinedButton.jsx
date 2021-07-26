export function OutlinedButton({ color, ...props }) {
  return (
    <button
      className={`bg-transparent hover:bg-${color} text-${color} font-semibold hover:text-white mt-8 rounded-xl px-6 py-3 border border-${color} hover:border-transparent`}
      {...props}
    >
      {props.children}
    </button>
  );
}

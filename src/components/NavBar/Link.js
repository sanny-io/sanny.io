
export default function Link({ onClick, children }) {
  return (
    <button className="font-semibold capitalize hover:text-gray-400 focus:outline-none" onClick={onClick}>
      {children}
    </button>
  );
}
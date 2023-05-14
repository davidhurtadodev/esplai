export default function Button({ type, children, onClick, classNames }) {
  return (
    <button
      className={`text-slate-100  border-2 rounded w-full py-2 ${classNames}`}
      type={type ? type : 'button'}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
}

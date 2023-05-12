export default function Button({ type, children, onClick }) {
  return (
    <button
      className="text-slate-100 bg-slate-900 border-2 rounded w-full py-2"
      type={type ? type : 'button'}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

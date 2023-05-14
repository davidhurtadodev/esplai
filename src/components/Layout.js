export default function Layout({ children }) {
  return (
    <div className="py-20 bg-[#130F26] min-h-screen">
      <main className="text-center ">{children}</main>
    </div>
  );
}

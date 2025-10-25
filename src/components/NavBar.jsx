
export default function NavBar({ username, hasItems }) {
  return (
    <header className="flex items-center justify-between border-b pb-3">
      <h1 className="text-2xl font-semibold">Groceries App</h1>
      <div className="flex items-center gap-6">
        <span>Hello, {username}</span>
        <div className="relative">
          {/* simple cart icon shape */}
          <div className="w-7 h-7 border rounded-full flex items-center justify-center">🛒</div>
          {hasItems && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full" />
          )}
        </div>
      </div>
    </header>
  );
}
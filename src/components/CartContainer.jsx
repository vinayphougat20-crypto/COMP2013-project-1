import CartCard from "./CartCard";

export default function CartContainer({ cart, total, onUpdateQty, onRemove, onEmpty, onBuy }) {
  if (cart.length === 0) {
    return <p className="text-gray-600">No items in the cart.</p>;
  }

  return (
    <section className="border-t pt-4">
      <h2 className="text-xl font-semibold mb-3">Cart ({cart.length})</h2>

      <div className="flex flex-col gap-3">
        {cart.map((item) => (
          <CartCard key={item.id} item={item} onUpdateQty={onUpdateQty} onRemove={onRemove} />
        ))}
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-lg">Total: ${total.toFixed(2)}</div>
        <div className="flex gap-3">
          <button className="border rounded-lg px-3 py-2" onClick={onEmpty}>Empty Cart</button>
          <button className="border rounded-lg px-3 py-2" onClick={onBuy}>Buy</button>
        </div>
      </div>
    </section>
  );
}

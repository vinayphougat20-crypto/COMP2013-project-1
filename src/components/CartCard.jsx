import QuantityCounter from "./QuantityCounter";

export default function CartCard({ item, onUpdateQty, onRemove }) {
  const sub = Number(item.price) * Number(item.qty);

  return (
    <div className="border rounded-xl p-3 flex items-center gap-4">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />

      <div className="flex-1">
        <div className="font-medium">{item.name}</div>
        <div className="text-sm text-gray-700">Price: ${Number(item.price).toFixed(2)}</div>
        <div className="text-sm">Sub-total: ${Number(sub).toFixed(2)}</div>
      </div>

      <QuantityCounter
        value={item.qty}
        setValue={(v) => onUpdateQty(item.id, v)}
        min={1}
      />

      <button className="border rounded-lg px-3 py-2" onClick={() => onRemove(item.id)}>
        Remove Item
      </button>
    </div>
  );
}

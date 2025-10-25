import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

export default function ProductCard({ product, onAddToCart }) {
  const [qty, setQty] = useState(0);

  return (
    <div className="border rounded-xl p-4 flex flex-col gap-3">
      <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
      <div className="font-medium">{product.name ?? product.brand ?? product.title}</div>
      <div>${product.price?.toFixed ? product.price.toFixed(2) : product.price}</div>

      <QuantityCounter value={qty} setValue={setQty} min={0} />

      <button
        className="border rounded-lg px-3 py-2"
        onClick={() => onAddToCart(product, qty)}
      >
        Add to Cart
      </button>
    </div>
  );
}

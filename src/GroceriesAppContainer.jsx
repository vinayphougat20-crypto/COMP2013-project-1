

import { useState, useMemo } from "react";
import products from "./data/products";
import NavBar from "./components/NavBar";
import ProductsContainer from "./components/ProductsContainer";
import CartContainer from "./components/CartContainer";

export default function GroceriesAppContainer() {
  
  const username = "Username";

  // cart items
  const [cart, setCart] = useState([]);

  // total calculated
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  // Add to cart
  function handleAddToCart(product, qty) {
    // If quantity is 0, show an alert
    if (qty === 0) {
      alert("Please select at least 1 before adding to cart.");
      return;
    }

    setCart((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx !== -1) {
        
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      // adding new item
      return [
        ...prev,
        {
          id: product.id,
          name: product.name ?? product.brand ?? product.title,
          price: Number(product.price),
          image: product.image,
          qty,
        },
      ];
    });
  }

  // Update qty in cart from Cart
  function handleUpdateQty(id, nextQty) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, nextQty) } : item
      )
    );
  }

  // Remove single item from cart
  function handleRemove(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  // Empty cart
  function handleEmpty() {
    setCart([]);
  }

  // Show total
  function handleBuy() {
    alert(`Total: $${total.toFixed(2)}`);
  }

  return (
    <div className="min-h-screen p-4">
      <NavBar username={username} hasItems={cart.length > 0} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <ProductsContainer products={products} onAddToCart={handleAddToCart} />
      </div>

      <div className="mt-10">
        <CartContainer
          cart={cart}
          total={total}
          onUpdateQty={handleUpdateQty}
          onRemove={handleRemove}
          onEmpty={handleEmpty}
          onBuy={handleBuy}
        />
      </div>
    </div>
  );
}

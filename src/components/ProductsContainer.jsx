
import ProductCard from "./ProductCard";

export default function ProductsContainer({ products, onAddToCart }) {
  return (
    <>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)
      )}
    </>
  );
}
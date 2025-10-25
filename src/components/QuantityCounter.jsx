export default function QuantityCounter({ value, setValue, min = 0 }) {
  function dec() {
    setValue((n) => Math.max(min, (typeof n === "number" ? n : parseInt(n, 10) || 0) - 1));
  }
  function inc() {
    setValue((n) => (typeof n === "number" ? n : parseInt(n, 10) || 0) + 1);
  }
  function onChange(e) {
    const v = Number(e.target.value);
    if (Number.isNaN(v)) return;
    setValue(Math.max(min, v));
  }

  return (
    <div className="flex items-center gap-2">
      <button className="border rounded px-2" onClick={dec}>-</button>
      <input
        className="w-14 border rounded px-2 py-1 text-center"
        type="number"
        min={min}
        value={value}
        onChange={onChange}
      />
      <button className="border rounded px-2" onClick={inc}>+</button>
    </div>
  );
}

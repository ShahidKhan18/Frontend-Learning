const MapFilterReduce = () => {
  const Products = [
    { id: 1, name: "Product A", price: 20, category: "Electronics" },
    { id: 2, name: "Product B", price: 30, category: "Clothing" },
    { id: 3, name: "Product C", price: 15, category: "Electronics" },
    { id: 4, name: "Product D", price: 25, category: "Clothing" },
    { id: 5, name: "Product E", price: 50, category: "Electronics" },
    { id: 6, name: "Product F", price: 40, category: "Electronics" },
  ];

  return (
    <div>
      <h2 className="text-center font-bold uppercase text-2xl mb-10">
        Map Filter Reduce
      </h2>
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-xl mb-2"> 1 List of All Products</p>
          {Products.map((product) => (
            <Product p={product} />
          ))}
        </div>
        <div>
          <p className="text-xl mb-2">
            {" "}
            2 List of All Products having price greater then 30
          </p>
          {Products.filter((p) => p.price > 30).map((product) => (
            <Product p={product} />
          ))}
        </div>

        <div>
          <p className="text-xl mb-2"> 3 Summary of Total Price</p>
          <li>{Products.reduce((acc, p) => acc + p.price, 0)}</li>
        </div>

        <div>
          <p className="text-xl mb-2"> 4 10% Discount </p>
          <>
            {Products.filter((p) => p.price > 20).map((product) => (
              <Product
                p={{ ...product, price: product.price - product.price * 0.1 }}
              />
            ))}
          </>
        </div>
        <div>
          <p className="text-xl mb-2"> 5 Filter Out Unique Element </p>
          {["Alice", "Bob", "Alice", "Charlie", "Bob"]
            .filter((name, index) => {
              return (
                ["Alice", "Bob", "Alice", "Charlie", "Bob"].indexOf(name) ===
                index
              );
            })
            .map((name) => (
              <li>{name}</li>
            ))}
        </div>
      </div>
    </div>
  );
};

const Product = ({ p }) => {
  return (
    <div className="ml-6">
      <li>{`${p.id} ${p.name} ${p.price} ${p.category}`}</li>
    </div>
  );
};
export default MapFilterReduce;

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
      <img src="/pizza.png" alt="pizza" className="max-h-32 mx-auto" />
      <h4 className="my-3 font-semibold text-xl">Pepperoni Pizza</h4>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <button className="bg-primary text-white px-8 py-2 rounded-full mt-4">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;

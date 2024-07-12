
const Wishlist = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Enter name or e-mail"
          className="border p-2 w-full max-w-xs"
        />
        <button className="bg-blue-500 text-white px-4 py-2 ml-2">GO!</button>
      </div>
      <div className="bg-white p-4 shadow-md rounded">
        <div className="flex">
          <img
            src="https://via.placeholder.com/100"
            alt="book"
            className="w-20 h-20 mr-4"
          />
          <div>
            <h3 className="font-bold text-lg">
              In This Economy?: How Money & Markets Really Work
            </h3>
            <p>Hardcover</p>
            <p>Scanlon, Kyla (Author); Housel, Morgan (Foreword by)</p>
            <p>Rp 350,000</p>
            <p>Added 11 Jul 2024</p>
            <div className="mt-2">
              <button className="bg-yellow-500 text-white px-4 py-2 mr-2">
                EDIT
              </button>
              <button className="bg-red-500 text-white px-4 py-2">
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

import { formatIDR } from "../../../../utils/formatIDR";
import Stars from "../../../base/Stars";
import images from "../../../image/imageGalery";
import BookShipping from "../book-shipping";

const BookInformation = ({ product, point, buyQuantity, setBuyQuantity }) => {
  return (
    <div
      className="xl:px-[15%] xl:pt-[6%] py-0 px-0"
      style={{
        backgroundImage: `url(${images?.mainBg})`,
      }}
    >
      <div className="flex flex-col xl:flex-row xl:justify-between md:flex-row xl:px-10 pt-5 pb-10 bg-white ">
        <div className="flex flex-col gap-y-4 relative">
          <img
            src={product?.image}
            alt=""
            className="max-h-72 max-w-72 mx-auto"
          />
          <p className="text-center text-xs text-gray-500">
            The cover image may be different
          </p>
          {product?.discount && (
            <span className="absolute right-16 top-3 xl:right-4 md:right-[100px] bg-main-red px-3 py-1 text-white font-semibold text-sm rounded-full">
              -{product?.discount * 100}%
            </span>
          )}
        </div>
        <div className="flex flex-col px-7 mt-10 gap-y-7 md:mt-0 xl:mt-0 xl:-ml-18">
          <h1 className="text-lg xl:text-xl xl:font-semibold xl:border-b xl:border-gray-300 xl:pb-4">
            {product?.title}
          </h1>
          <div className="flex flex-col gap-y-2">
            <p className="text-gray-500 text-sm">Paperback --</p>
            <div>
              {product?.author?.map((item, i) => (
                <div key={i} className="flex gap-x-1 text-sm">
                  <p className="text-sm text-gray-900 hover:text-orange-400 transition-colors duration-300">
                    {item?.name}
                  </p>
                  ({item?.role})
                </div>
              ))}
              <div className="flex items-center gap-x-1 my-2">
                <Stars ratings={product?.ratings} className={"text-sm"} />
                <p className="text-xs">{product?.ratings} customer reviews</p>
                <div className="w-0.5 h-3 bg-gray-500"></div>
                <p className="cursor-pointer text-xs hover:text-orange-400 transition-colors duration-300">
                  Write a review
                </p>
              </div>
              <div className="flex items-end gap-x-1">
                <p className="text-main-red font-medium text-lg">
                  {formatIDR(product?.price)}
                </p>
                {product?.discount && (
                  <p className="text-sm line-through">
                    {formatIDR(product?.price * (1 - product?.discount))}
                  </p>
                )}
              </div>
              {product?.discount && (
                <small className="text-gray-600">
                  You save:{" "}
                  <span className="text-main-red">
                    {formatIDR(product?.price * product?.discount)}
                  </span>{" "}
                  <span className="text-gray-500">
                    ({product?.discount * 100}%)
                  </span>
                </small>
              )}
              <p className="text-gray-400 text-xs">No Hidden Cost</p>
            </div>
            <p className="text-xs text-gray-700">
              PEC Price - {product?.discount * 100}%{" "}
              <span className="text-main-red">{formatIDR(product?.price)}</span>
            </p>
            <small className="text-gray-600">
              You save:{" "}
              <span className="text-main-red">
                {formatIDR(product?.price * product?.discount)}
              </span>{" "}
            </small>
            <p className="text-xs text-gray-500 font-bold">
              Or <span className="text-orange-400">{point}</span>{" "}
              <span className="text-blue-500">PEC Points</span>
            </p>
          </div>
        </div>
        <div className="hidden md:block xl:block">
          <BookShipping
            buyQuantity={buyQuantity}
            setBuyQuantity={setBuyQuantity}
          />
        </div>
      </div>
    </div>
  );
};
export default BookInformation;

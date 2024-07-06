import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../../image/imageGalery";
import { useSlideShow } from "../../../../hooks/useSlideShow";

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -bottom-16 left-32 xl:left-[46%] md:left-[44%] xl:-translate-x-1/2 ml-2 text-center py-1 px-3 text-white bg-gray-300"
    >
      {"<"}
    </button>
  );
}
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -bottom-16 right-28 xl:right-[46%] md:right-[44%] xl:-translate-x-1/2 mr-1 text-center py-1 px-3 text-white bg-gray-300"
    >
      {">"}
    </button>
  );
}

const BookSlider = ({icons}) => {

  const show = useSlideShow();

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: show,
    slidesToScroll: 1,
    centerMode: true,
    cssEase: "linear",
    centerPadding: "0px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div
      className="xl:px-[15%] py-0 px-0"
      style={{
        backgroundImage: `url(${images?.mainBg})`,
      }}
    >
      <div className="max-w-screen relative bg-white h-full xl:min-h-[200px]">
        <Slider {...settings}>
          {icons.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-full mx-auto text-sm xl:mt-5"
            >
              <p className="text-center text-gray-500 mt-5 mb-1">
                {item?.title}
              </p>
              <img
                key={idx}
                className="ml-[60px] xl:ml-[80px] object-fit xl:h-[40px] rounded max-w-full cursor-pointer h-10 w-10"
                src={item?.icon}
              />
              <p className="text-center text-gray-500 mt-1">{item?.value}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BookSlider;

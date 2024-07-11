import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/module/footer";
import Navbar from "../../components/module/navbar";
import images from "../../components/image/imageGalery";
import Stars from "../../components/base/Stars";
import BookInformation from "../../components/module/detail/book-information";
import Button from "../../components/base/Button";
import BookShipping from "../../components/module/detail/book-shipping";
import BookSlider from "../../components/module/detail/book-information/Slider";
import Container from "../../components/module/container";
import FooterDetail from "../../components/module/detail/footer-detail";
import Layout from "../layout";
import { useParams } from "react-router-dom";

const book = {
  image: images?.dummyBook,
  title: "The Elemental Oracle: Alchemy Science Magic",
  author: [
    {
      name: "DeMarco, Stacey",
      role: "Author",
    },
    {
      name: "Britschgi, Kinga",
      role: "Ilustrator",
    },
  ],
  ratings: 3.5,
  price: 200000,
  discount: 0.03,
  description: `Imagine a time when vast helium-fueled airships took the place of aircraft, and where the hunger for adventure and exploration took the human race into stranger places than we ever imagined. The Steampunk Tarot imagines this in an alternate-reality tarot where The Technomage is king, and the Punk Diva is queen. 
    Tumble down the rabbit hole into a construction of technology, machines, retro-art and culture, full of fantastic visions in a time and place that realizes an alternate world to our own. The world of steampunk combines Victoriana, the Gothic, and early invention with a huge dash of imagination and a tremendous sense of style. The Steampunk Tarot is a world apart: a nexus of opulence, innovation and alternate world-views that is reflected in 78 scenes. The 22 major arcana cards are the actors at the heart of the machine, the deos macninae or the gods of the machine.
    Acting as mediators of the Gods of the Machine are the 16 court cards who are the Legates of the Omniverse, or ambassadorial representatives of the Four Leagues, comprising all the skills that maintain the Imperium: they are the movers and shakers--the Commander, Lady, Navigator, and Messenger, or King, Queen, Knight and Page. They oversee the other 40 cards of the minor arcana, who are the elemental worlds of Airships, Engines, Submersibles and Gears, or Swords, Wands, Cups and Coins.
    There are still things to discover and uncover in the Steampunk Imperium. Many new methods of spreading and playing with tarot cards are included, as well as methods of life-navigation by the use of skillful questions. The Steampunk Tarot is an adventurous tarot for the discerning diviner, to be appreciated both by tarot-users and steampunk fans the world over.
    `,
};
// ilustrasi point berdasarkan perhitungan dari link (https://www.periplus.com/p/9780804843522/the-steampunk-tarot-wisdom-from-the-gods-of-the-machine-with-cards)
// case 120.000 mendapatkan 636 point => maka 120.000 / 636 = 188.68 rupiah (1 point pec = rp.188.68)
// rumus = diskon yang didapatkan / 188.68 => (price * discount) / 188.68

const point = Math.round((book?.price * book?.discount) / 188.68);
const books = [
  {
    image: images?.dummyBook,
    title: "Elemental Oracle",
    author: "Mathews, Jhon",
    price: 200000,
    discount: 0.03,
  },
  {
    image: images?.dummyBook,
    title: "Elemental Oracle",
    author: "Mathews, Jhon",
    price: 200000,
    discount: 0.4,
  },
  {
    image: images?.dummyBook,
    title: "Elemental Oracle",
    author: "Mathews, Jhon",
    price: 200000,
    discount: 0.12,
  },
  {
    image: images?.dummyBook,
    title: "Elemental Oracle",
    author: "Mathews, Jhon",
    price: 200000,
    discount: 0.05,
  },
  {
    image: images?.dummyBook,
    title: "Elemental Oracle",
    author: "Mathews, Jhon",
    price: 200000,
    discount: 0.05,
  },
  {
    image: images?.dummyBook,
    title: "Elemental Oracle",
    author: "Mathews, Jhon",
    price: 200000,
    discount: 0.05,
  },
];

const icons = [
  {
    title: "Dimension",
    icon: images?.dimensions,
    value: "21.59 x 14.99 x 5.33 CM",
  },
  {
    title: "Shipping Weight",
    icon: images?.weight,
    value: "0.54 kg",
  },
  {
    title: "Pages",
    icon: images?.printLength,
    value: "28",
  },
  {
    title: "Language",
    icon: images?.language,
    value: "English",
  },
  {
    title: "Grade Level",
    icon: images?.grade,
    value: "2 - 5",
  },
  {
    title: "ISBN-13",
    icon: images?.isbnBarcode,
    value: "812389123812123",
  },
  {
    title: "Publisher",
    icon: images?.building,
    value: "Tuttle Publishing",
  },

  {
    title: "Publication Date",
    icon: images?.publishDate,
    value: "05 March 2013",
  },
  {
    title: "Age Range",
    icon: images?.ageGroups,
    value: "20 - 40 years",
  },
];

export default function DetailBooks() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(book);
  const [buyQuantity, setBuyQuantity] = useState(1);
  const [spiritSpeak, setSpiritSpeak] = useState(books);
  const [besSeller, setBestSeller] = useState(books);
  const descParagraphs = (book?.description || description)
    .trim()
    .split("\n")
    .filter(Boolean);
  const categoryBooks = [
    {
      title: "Customers who bought this also bought",
      listBooks: spiritSpeak,
    },
    {
      title: "Others items that might interest you",
      listBooks: besSeller,
    },
  ];


  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/books/${id}`);
        setBook(response.data);
        setIcons([
          { image: images.icon1, title: "icon 1" },
          { image: images.icon2, title: "icon 2" },
          { image: images.icon3, title: "icon 3" },
          { image: images.icon4, title: "icon 4" },
        ]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  useEffect(() => {
    // Fetch books for categories (if needed)
    const fetchBooks = async () => {
      // Dummy fetching data
      setSpiritSpeak([bookDummy, bookDummy, bookDummy]);
      setBestSeller([bookDummy, bookDummy, bookDummy]);
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${images?.mainBg})`,
        }}
      >
        <Navbar />
        <div>
          <div className="min-h-screen py-5 px-2 font-poppins">
            <BookInformation
              point={point}
              product={product}
              buyQuantity={buyQuantity}
              setBuyQuantity={setBuyQuantity}
            />
            <div className="block md:hidden">
              <BookShipping
                buyQuantity={buyQuantity}
                setBuyQuantity={setBuyQuantity}
              />
            </div>
            <div className="bg-white my-2 min-h-48 px-5 xl:hidden">
              <BookSlider icons={icons} />
            </div>
            <div className="hidden xl:block xl:my-1">
              <BookSlider icons={icons} />
            </div>
            {categoryBooks?.map((item, i) => (
              <div
                key={i}
                className="mb-3 py-4 xl:py-8 bg-white xl:max-w-[70%] xl:mx-auto"
              >
                <Container
                  className={
                    "mx-5 xl:text-lg xl:w-1/3 xl:ml-2 text-orange-400 text-start"
                  }
                  title={item?.title}
                  books={item?.listBooks}
                />
              </div>
            ))}
            <FooterDetail title={" Description"}>
              {descParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-2 text-justify text-sm text-gray-700 px-5"
                >
                  {paragraph}
                </p>
              ))}
            </FooterDetail>
            <FooterDetail title={"Customer Reviews"}>
              <div className="flex px-5 items-center">
                <Stars ratings={book?.ratings} />
                <p className="text-sm">({book?.ratings} customer reviews)</p>
              </div>
              <p className="px-5 text-sm font-bold">
                There are no reviews for this product.
              </p>
              <div className="px-5 text-sm mt-4">
                <p>Share your thoughts with other customers:</p>
                <Button
                  className={
                    "bg-black/80 text-white mt-1 px-4 py-[7px] hover:bg-orange-400 transition-colors duration-300"
                  }
                  onClick={() => alert("navigasi ke review")}
                >
                  WRITE A CUSTOMER REVIEW
                </Button>
              </div>
            </FooterDetail>
          </div>
          <Footer />
        </div>
      </div>
    </Layout>
  );
}

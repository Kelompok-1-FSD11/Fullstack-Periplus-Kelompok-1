import { useState } from 'react';
import images from '../../components/image/imageGalery';
import Container from '../../components/module/container';
import Footer from '../../components/module/footer';
import Navbar from '../../components/module/navbar';
import Testimonials from '../../components/module/testimonial';
import Layout from '../layout';

export default function Home() {
	const books = [
		{
			image: images?.dummyBook,
			title: 'Elemental Oracle',
			author: 'Mathews, Jhon',
			price: 200000,
			discount: 0.03,
		},
		{
			image: images?.dummyBook,
			title: 'Elemental Oracle',
			author: 'Mathews, Jhon',
			price: 200000,
			discount: 0.4,
		},
		{
			image: images?.dummyBook,
			title: 'Elemental Oracle',
			author: 'Mathews, Jhon',
			price: 200000,
			discount: 0.12,
		},
		{
			image: images?.dummyBook,
			title: 'Elemental Oracle',
			author: 'Mathews, Jhon',
			price: 200000,
			discount: 0.05,
		},
		{
			image: images?.dummyBook,
			title: 'Elemental Oracle',
			author: 'Mathews, Jhon',
			price: 200000,
			discount: 0.05,
		},
		{
			image: images?.dummyBook,
			title: 'Elemental Oracle',
			author: 'Mathews, Jhon',
			price: 200000,
			discount: 0.05,
		},
	];

	//list books disesuaikan bisa menggunakan state
	const [spiritSpeak, setSpiritSpeak] = useState(books);
	const [besSeller, setBestSeller] = useState(books);
	const [popFrancis, setPopFrancis] = useState(books);
	const categoryBooks = [
		{
			title: 'See The Spirits Speak',
			listBooks: spiritSpeak,
		},
		{
			title: 'Bestseller Comic And Manga',
			listBooks: besSeller,
		},
		{
			title: 'See The Spirits Speak',
			listBooks: popFrancis,
		},
	];

	return (
		<Layout>
			<Navbar jumbotron />
			<div
				className='bg-gray-200 py-3'
				style={{
					backgroundImage: `url(${images?.mainBg})`,
				}}
			>
				{categoryBooks?.map((item, i) => (
					<div
						key={i}
						className='mb-3 py-4 xl:py-8 bg-white xl:max-w-[70%] xl:mx-auto'
					>
						<Container
							line
							title={item?.title}
							books={item?.listBooks}
						/>
					</div>
				))}
			</div>
			<div
				className='flex flex-col gap-16 bg-gray-200'
				style={{
					backgroundImage: `url(${images?.mainBg})`,
					backgroundRepeat: 'repeat',
				}}
			>
				<div className='xl:max-w-[70%] xl:mx-auto'>
					<Testimonials />
				</div>
				<Footer />
			</div>
		</Layout>
	);
}

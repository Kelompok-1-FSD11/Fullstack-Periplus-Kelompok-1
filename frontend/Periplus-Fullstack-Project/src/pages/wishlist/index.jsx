import { useEffect, useState } from 'react';
import images from '../../components/image/imageGalery';
import Footer from '../../components/module/footer';
import Navbar from '../../components/module/navbar';
import Sidebar from './sidebar';
import Layout from '../layout';
import {
	getUserWishlist,
	removeUserWishlist,
} from '../../../services/wishlistService';
import { formatIDR } from '../../utils/formatIDR';
import { format } from 'date-fns';
import { id } from 'date-fns/locale/id';
import Stars from '../../components/base/Stars';
import { Link } from 'react-router-dom';

export default function Wishlist() {
	const [wishlistItem, setWishlistItem] = useState([]);
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return format(date, 'dd MMMM yyyy', { locale: id });
	};

	useEffect(() => {
		const fetchWishlistItem = async () => {
			try {
				const userWishlistData = await getUserWishlist();
				// console.log(userWishlistData);
				setWishlistItem(userWishlistData);
			} catch (error) {
				console.error('Error fetching user wishlist data', error);
			}
		};
		fetchWishlistItem();
	}, []);

	const handleRemove = (wishlistId) => {
		removeUserWishlist(wishlistId);
		setWishlistItem(
			wishlistItem.filter((item) => item.wishlist_id !== wishlistId)
		);
		alert('The Product is successfully removed from your wislist.');
	};

	return (
		<Layout>
			<Navbar />
			<div
				className='flex justify-center pt-[150px] bg-white p-8 font-poppins'
				style={{ backgroundImage: `url(${images?.mainBg})` }}
			>
				<div className='flex xl:w-[70%]'>
					<Sidebar />
					<div className='max-w-2xl mx-auto ml-8 w-3/4'>
						<div className='bg-white p-4 shadow-md rounded mb-8'>
							<h1 className='text-2xl font-bold mb-4'>
								My Wish List
							</h1>
						</div>
						<div className='bg-white p-4 shadow-md rounded mb-8'>
							<div className='flex items-center'>
								<input
									type='text'
									placeholder='Enter name or e-mail'
									className='p-2 border border-gray-300 rounded w-64 mr-2'
								/>
								<button className='w-24 bg-blue-500 text-white p-2 rounded'>
									GO!
								</button>
							</div>
							<p className='text-blue-500 text-left mt-2'>
								Find someone&apos;s Wish List
							</p>
						</div>
						{wishlistItem.map((item) => (
							<div
								key={item.product_id}
								className='bg-white border rounded-lg p-4 mb-8 shadow-md'
							>
								<div className='flex'>
									<div>
										<Link to={`/detail/${item.product_id}`}>
											<img
												src={item.Product.image_path}
												alt={item.product_id}
												className='w-24 h-32 object-cover mr-4'
											/>
										</Link>
									</div>
									<div className='flex-1 gap-6'>
										<div>
											<Link
												to={`/detail/${item.product_id}`}
											>
												<h2 className='text-black text-md font-semibold mb-2'>
													{item.Product.product_name}
												</h2>
											</Link>
										</div>
										<p className='italic text-gray-800 text-xs font-semibold my-2'>
											{item.Product.coverType}
										</p>
										<p className='text-blue-500 text-xs my-2'>
											{item.Product.author1}
										</p>
										<p className='text-red-500 text-sm my-2'>
											{formatIDR(item.Product.price)}
										</p>

										<Stars
											ratings={
												item.averageRating
													? item.averageRating
													: 0
											}
											className={'text-md'}
										/>

										<p className='text-gray-500 text-xs my-2'>
											Added{' '}
											{formatDate(item.updatedAt)}
										</p>

										{/* Sharing coming soon */}
										{/* <div className='flex items-center mt-2'>
											<p className='mr-2'>
												Shared this item?
											</p>
											<input
												type='checkbox'
												checked={item.shared}
												readOnly
												className='h-4 w-4'
											/>
										</div> */}
										<div className='flex mt-2'>
											{/* Edit wihslist coming soon */}
											{/* <button className='bg-white text-black p-2 rounded mr-2'>
												EDIT
											</button> */}

											<button
												onClick={() =>
													handleRemove(
														item.wishlist_id
													)
												}
												className='bg-gray-800 text-white px-4 py-2 hover:bg-orange-500 transition duration-300 ease-in-out'
											>
												DELETE
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
}

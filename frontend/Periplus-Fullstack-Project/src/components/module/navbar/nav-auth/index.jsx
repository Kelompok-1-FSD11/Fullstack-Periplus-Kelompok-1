import { useNavigate } from 'react-router-dom';
import Button from '../../../base/Button';
import useUserStore from '../../../../store/useUserStore';
import './nav-auth.css';
import { useState } from 'react';

const NavAuth = () => {
	const [show, setShow] = useState(false);
	const handleMouseEnter = () => {
		console.log('Mouse enter');
		setShow(true);
	};
	const handleMouseLeave = () => {
		console.log('Mouse Leave');
		setShow(false);
	};

	const navigate = useNavigate();
	const user = useUserStore((state) => state.user);
	return (
		<div className='hidden xl:flex gap-x-3 items-center w-100'>
			<div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='#fff'
					className='size-6 cursor-pointer'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
					/>
				</svg>
			</div>
			<div
				className='relative xl:mx-2'
				onClick={() => navigate('/mycart')}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='#fff'
					className='size-6 cursor-pointer'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
					/>
				</svg>
				<Button
					className={
						'bg-white text-red-500 rounded-full absolute -top-2 -right-3 xl:w-5 xl:h-5 text-xs text-center'
					}
				>
					0
				</Button>
			</div>
			<div
				className='flex text-white cursor-pointer w-full text-nowrap items-center'
				onClick={() => navigate('/login')}
				onMouseEnter={() => handleMouseEnter()}
				onMouseLeave={() => handleMouseLeave()}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='#fff'
					className='size-8'
				>
					<path
						fillRule='evenodd'
						d='M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
						clipRule='evenodd'
					/>
				</svg>
				<small className='font-semibold'>
					{user ? `Hi ${user.user_fname}` : 'Sign in'}
				</small>
			</div>

		</div>
	);
};

export default NavAuth;

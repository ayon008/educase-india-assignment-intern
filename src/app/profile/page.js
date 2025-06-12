import React from 'react';
import { rubik } from '../layout';
import Image from 'next/image';
import image from '../../../public/Ellipse 114.png'
import camera from '../../../public/Group 1585.png'

const page = () => {
    return (
        <div className='h-screen'>
            <div className='md:max-w-[375px] w-full mx-auto p-6'>
                <h1 className={`${rubik.className} text-lg`}>Account Setting</h1>
            </div>
            <div className='bg-[#F7F8F9] h-full'>
                <div className='border-b-[#CBCBCB] border-b-2 border-dashed'>
                    <div className='md:max-w-[375px] w-full mx-auto flex flex-col p-6'>
                        <div className='flex items-start gap-6'>
                            <div className='relative w-fit'>
                                <Image src={image} alt='profile-image' width={76} height={76} className='w-[76px] h-[76px]' />
                                <Image src={camera} alt='camera' className='absolute right-0 bottom-1' />
                            </div>
                            <div>
                                <h2 className={`${rubik.className} text-base font-medium`}>Marry Doe</h2>
                                <p className={`${rubik.className} mt-[6px] text-sm`}>Marry@gmail.com</p>
                            </div>
                        </div>
                        <p className={`${rubik.className} mt-8`}>Enthusiastic and fast-learning Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. Passionate about building clean, responsive interfaces and eager to contribute to real-world projects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
import Link from 'next/link';
import React from 'react';
import { rubik } from '../layout';
import InputField from '@/components/Input';

const page = () => {
    return (
        <div className="bg-[#F7F8F9]">
            <div className="md:max-w-[375px] w-full mx-auto flex flex-col h-screen px-6 pb-6 md:pt-10 pt-6">
                <div className="md:my-0 my-auto">
                    <h1 className={`text-[#1D2226] text-[28px] font-medium ${rubik.className}`}>Signin to your <br />PopX Account</h1>
                    <p className={`text-[#1D2226] opacity-60 ${rubik.className} text-lg mt-[10px]`}>Welcome back! Please enter your details.</p>
                    <form className='mt-8 w-full space-y-6'>
                        <InputField label={'Email Address'} placeholder={'Enter email address'} />
                        <InputField label={'Password'} placeholder={'Enter Password'} />
                        <Link href={'/profile'} className="w-full">
                            <button className={`bg-[#CBCBCB] rounded-[6px] text-white w-full text-center -mt-2 font-medium ${rubik.className} py-3 cursor-pointer hover:bg-[#5A1FD9] transition-all duration-300`}>
                                Login
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;
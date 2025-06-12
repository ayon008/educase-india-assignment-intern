import React from 'react';
import { rubik } from '../layout';
import InputField from '@/components/Input';
import Link from 'next/link';

const page = () => {
    return (
        <div className="bg-[#F7F8F9]">
            <div className="md:max-w-[375px] w-full mx-auto flex flex-col px-6 pb-6 md:pt-10 pt-6">
                <div className="min-h-screen flex flex-col">
                    <h1 className={`text-[#1D2226] text-[28px] font-medium ${rubik.className}`}>Create Your PopX Account</h1>
                    <form className='mt-8 w-full space-y-6 flex-1 flex flex-col'>
                        <InputField label={'Full Name'} placeholder={'Marry Doe'} required={true} />
                        <InputField label={'Phone Number'} placeholder={'+123456789'} required={true} />
                        <InputField label={'Email Address'} placeholder={'Enter your email address'} required={true} />
                        <InputField label={'Password'} placeholder={'Enter your password'} required={true} />
                        <InputField label={'Company Name'} placeholder={'Educase India'} required={true} />
                        <div className={`${rubik.className}`}>
                            <label>
                                Are you an agent? <span className="text-red-400">*</span>
                            </label>
                            <div className="flex gap-4">
                                <div className="flex gap-2 items-center">
                                    <input type="radio" name="isAgent" value="yes" />
                                    <p>Yes</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="radio" name="isAgent" value="no" />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <button className={`bg-[#6C25FF] rounded-[6px] text-white w-full text-center font-medium ${rubik.className} py-3 cursor-pointer hover:bg-[#5A1FD9] transition-all duration-300 mt-auto`}>
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;
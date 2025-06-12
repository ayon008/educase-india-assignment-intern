import { rubik } from '@/app/layout';
import React from 'react';

const InputField = ({ label, type, placeholder, name, disabled }) => {
    return (
        <>
            <div>
                <div className="relative">
                    <label className="label absolute bg-[#F7F8F9] left-[2%] -top-[28%] px-2">
                        <span className={`text-[#6C25FF] font-normal text-base ${rubik.className} font-medium`}>{label}</span>
                    </label>
                    <input
                        type={type}
                        placeholder={placeholder}
                        disabled={disabled}
                        name={name}
                        className={`${rubik.className} w-full rounded-[6px] 2xl:h-[47px] xl:h-[47px] h-[60px] bg-[#F7F8F9] border px-[14px] border-[#CBCBCB] py-2 placeholder-font`}
                    />
                </div>
            </div>
        </>
    );
};

export default InputField;
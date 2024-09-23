import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function Category() {
    const [categories, setCategories] = useState([]);

    const fetchCategory = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5500/swiggy-api-20240328T091013Z-001/swiggy-api/data/category.json");
            const data = await response.json(); 
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>What's on your mind ?</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                        <FaArrowLeft />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex'>
                {categories.map((cat, index) => (
                    <div className='category-item' key={index}>
                        <img src={`http://127.0.0.1:5500/swiggy-api-20240328T091013Z-001/swiggy-api/data/images/${cat.image}`} alt="" /> 
                    </div>
                ))}
            </div>
        </div>
    );
}



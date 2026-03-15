import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LuArrowLeftToLine } from "react-icons/lu";
import { LuArrowRightToLine } from "react-icons/lu";


function TableFooter({ currentPage, totalPages, setCurrentPage }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className='flex justify-between items-center flex-wrap gap-2'>
            <div className="flex gap-2 justify-center mt-2">

                <button className='cursor-pointer px-3 py-1 rounded bg-gray-200' onClick={() => setCurrentPage(1)}>
                    <LuArrowLeftToLine />
                </button>

                <button className='cursor-pointer px-3 py-1 rounded bg-gray-200'
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                    <IoIosArrowBack />
                </button>

                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`cursor-pointer px-3 py-1 rounded ${currentPage === page ? "bg-primary text-white" : "bg-gray-200"
                            }`}
                    >
                        {page}
                    </button>
                ))}


                <button className='cursor-pointer px-3 py-1 rounded bg-gray-200'
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                >
                    <IoIosArrowForward />
                </button>

                <button className='cursor-pointer px-3 py-1 rounded bg-gray-200' onClick={() => setCurrentPage(totalPages)}>
                    <LuArrowRightToLine />
                </button>
            </div>
                    <div>
                        <p className='text-sm'>
                         {currentPage} of {totalPages} pages ({totalPages * 6} items)
                        </p>
                    </div>
        </div>
    )
}

export default TableFooter
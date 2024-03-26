import React from 'react'

function Footer() {
    return (
        <>
            <div className='px-12 py-14 bg-black'>
                <div className='grid grid-cols-1 lg:grid-cols-2  '>
                    <div className='text-white text-md'>
                        Copyright © 2024. All rights reserved by Joint-X.
                    </div>
                    <div className='text-white text-md text-start md:text-end'>
                        <p>Desingned by <span className='text-[#f5df4e]  border-b-2 border-[#f5df4e]'>Hamza Shahid</span></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
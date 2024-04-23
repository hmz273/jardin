import React from 'react'

const DateRange = () => {
  return (
    <section>
        <div className="h-[457.6px] w-[608px] bg-red-700 mt-4">
            <div className="h-[74px] bg-gray-800 py-6 px-7">
                <p className='text-white'>text</p>
            </div>
            <div className="h-[242.6px] px-1 bg-orange-400">
            <div className="grid grid-cols-2 gap-8">
                <div className='bg-green-800  h-[242.6px]'>
                    <p className='text-white'>text</p>
                </div>
                <div className='bg-green-800  h-[242.6px]'>
                    <p className='text-white'>text</p>
                </div>
            </div>
            </div>
            <div className="h-[54px] bg-gray-800 px-2">
                <p className='text-white'>text</p>
            </div>
            <div className="h-[87px] bg-orange-400 px-2">
                <p className='text-white'>text</p>
            </div>
        </div>
    </section>
  )
}

export default DateRange
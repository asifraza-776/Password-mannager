import React from 'react'

const Manager = () => {
    return (
        <>
        <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
             

            <div className=" mycontainer">
                <h1 className='text-4xl font-bold text-slate-800 text-center'>
                    <span className='text-green-700'>&lt;</span>
                    pass
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>your own password mannager</p>

                <div className=" flex flex-col p-4 text-black gap-8 items-center">
                    <input placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input placeholder='Enter username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" />
                        <input placeholder='Enter password' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" />
                    </div>

                    <button className='bg-green-600 text-white rounded-full flex justify-center items-center gap-2 px-8 py-2 hover:bg-green-700 transition w-fit border-2 border-green-900'>
                    <lord-icon
                        src="https://cdn.lordicon.com/gzqofmcx.json"
                        trigger="hover">
                    </lord-icon>
                    Add Password</button>


                </div>
            </div>
        </>
    )
}

export default Manager

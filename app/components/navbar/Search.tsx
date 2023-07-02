'use client';
import {BiSearch} from 'react-icons/bi';

const Search = () => {
  return (
    <div
    className="border-[1px] w-full md:w-auto py-2 rounded-xl hover:shadow-lg transition ease-in duration-150 cursor-pointer"
    >
        <div className="flex flex-row items-center justify-between">
            <div className="text-sm font-semibold px-6">
                Anywhere
            </div>
            <div className="hidden md:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
              Any week
              </div> 
              < div className="text-sm pl-6 pr-2 text-teal flex flex-row items-center gap-3">
               <div className="hidden sm:block" >Add Tenants</div>
               <div className="p-2 bg-teal rounded-full text-white">
                <BiSearch size={18}/>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Search
import React from 'react'
import Movies from './Movies'

function WatchList() {
 
  let Movies =[
    {
      title:'Revenge',
      vote:87,
      pop:45.43
    },

    {
        title:'Sexy Selina',
        vote:89,
        pop:89.98
    }
  ]



  return (
   <div class='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
    <table class='w-full border-collapse bg-white text-left text-5m text-gray-500'>

    <thead class='bg-gray-50'>
      <tr>
        <th class='px-6 py-4 font-medium text-gray-900'>Name</th>
        <th>
        <div className='flex'>
        <div>Ratings</div>
         
        </div>


        </th>
        <th>
        <div className='flex'>
        <div>Popularity</div>
         
        </div>


        </th>
        <th>
        <div className='flex'>
        <div>Genre</div>
         
        </div>


        </th>
      </tr>
    </thead>

    <tbody class='divide-y divide-gray-100 border-t border-gray-100'>
      {Movies.map((movie)=>{
     return <tr class='hover:bg-gray-50'>
     <td class='flex items-center px-6 py-4 font-normal text-gray-900 space-x-2'>
       <img class='h-[6rem] w-[10rem] object-fit' src=''/>
       <div class='font-medium text-gray-700 text-5m'>{movie.title}</div>
     </td>

     <td className='pl-6 py-4'>{movie.vote}</td>
     <td className='pl-6 py-4'>{movie.pop}</td>
     <td className='py-4'>Action</td>

   </tr>



      })}
      

    </tbody>






    </table>






   </div>
  )
}

export default WatchList
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination'
function Movies() {
  const[movies,setMovies]=useState([])
  const [pageNum, setPageNum] = useState(1);
  const [WatchList,setWatchList]=useState([])
  const[hovered,setHovered]=useState('')


  const showButton =(id)=>{
    setHovered(id)
  }

  const hideButton = ()=>{
    setHovered('')
  }

  const onNext = () => {
    setPageNum(pageNum + 1);
  };

  const onPrev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const addtoWatchList=(movie)=>{
    const newWatchList=[...WatchList,movie]
     setWatchList(newWatchList)
     localStorage.setItem('imdb',JSON.stringify(newWatchList))
    
  }

  const removeFromWatchList=(movie)=>{
    const filteredWatchList=WatchList.filter((m)=>{
      return (m.id!= movie.id)
    })

    setWatchList(filteredWatchList)
    localStorage.setItem('imdb',JSON.stringify(filteredWatchList))
  }


  // console.log(WatchList)

useEffect(()=>{
  (function(){
    
    let moviefromlS=localStorage.getItem('imdb')
     moviefromlS=JSON.parse(moviefromlS) || []

     setWatchList(moviefromlS)


    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=30b8a22a1071e9d6f0648e7fdb2a6fbd&page=${pageNum}`).then((res)=>{
      setMovies(res.data.results)
    })

  })()
},[pageNum])

 
  return (
    <div>
        <div className='text-2xl mb-8 font-blod text-center'>Trending Movies</div>

        <div className='flex flex-wrap'>
          {movies.map((movie)=>(
          
   
          
          
          <div
          
          onMouseOver={()=> showButton(movie.id)}
              onMouseLeave={()=> hideButton()}
          
          className='w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[180px] hover:scale-110 duration-300 relative flex items-end'
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`
            }}
            key={movie.id}>
            <div className='text-2xl p-2 bg-gray-900 rounded-2xl absolute right-0 top-0'
              style={{display:hovered ==movie.id? 'block': 'none' }}>
             

{WatchList.some((watchedMovie) => watchedMovie.id === movie.id) ? (
  <div onClick={() => removeFromWatchList(movie)}>❌</div>
) : (
  <div onClick={() => addtoWatchList(movie)}>😍</div>
)}


            </div>

              

            <div className='text-white font-bold text-center w-full bg-gray-900 bg-opacity-60'>{movie.title}</div>
            
          </div>
          
        ))}
              
        
    </div>
    
    <Pagination
        pageNumProp={pageNum}
        onNextProp={onNext}
        onPrevProp={onPrev}
      ></Pagination>
    </div>
  )
}

export default Movies
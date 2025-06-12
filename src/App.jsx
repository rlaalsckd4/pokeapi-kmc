
import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Favorite from './pages/Favorite'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemon)
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(386))
  }, [])


  return (
    <>
      <h1 className='text-[40px] text-center'> 포켓몬 도감 </h1>
      <nav className='flex gap-[10px] justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'/detail/1'}>상세정보</Link>
        <Link to={'/search'}>검색</Link>
        <Link to={'/favorite'}>찜 목록</Link>
      </nav>
      <main className='flex flex-wrap gap-[20px] justify-center pt-[20px]'>
        <Routes>
          <Route path={'/'} element={<Main />}></Route>
          <Route path={'/detail/:pokemonId'} element={<Detail />}></Route>
          <Route path={'/search'} element={<Search />}></Route>
          <Route path={'/favorite'} element={<Favorite />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App

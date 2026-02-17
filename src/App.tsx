import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Componenet/Nav'
import Todo from './Componenet/Todo'
import ContextTodo from './Componenet/SirContext/ContextTodo'

function App() {
  return (
    <>
      <div className='min-h-screen w-full bg-slate-950 flex flex-col justify-center items-center'>
        <Nav />
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/context' element={<ContextTodo />} />
        </Routes>
      </div>
    </>
  )
}

export default App
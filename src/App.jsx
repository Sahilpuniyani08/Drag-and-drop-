import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LeftDragable from './components/LeftDragable'
import RightDragable from './components/RightDragable'
import Steps from './components/Steps'



function App() {
  const [count, setCount] = useState(0)

  return (
  <main class="md:container md:mx-auto h-[92vh] overflow-y-hidden w-full">
 <div className="mb-5">
        <Header />
      </div>
      <div className="flex gap-4">
        <div className="w-[30%]">
          <LeftDragable />
        </div>
        <div className="w-[70%] h-[100vh] overflow-y-scroll pb-40 custom-scrollbar">
          <RightDragable />
          <div className='mt-4'>

          <Steps />
          {/* <Steps /> */}
          </div>
        </div>
      </div>
  </main>
  )
}

export default App

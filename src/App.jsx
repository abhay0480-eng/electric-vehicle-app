
import './App.css'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
    {/* <div className='relative flex justify-between bg-[#f1f5f9]'>
      <div className='fixed top-0 left-0 bg-[#1c2434] text-white h-screen w-[17%]'>
        <Sidebar/>
      </div>

      <div className='w-[83%] '>
        <div className='fixed top-0 right-0 bg-white w-[83%] shadow-xl py-10'>
          <Header/>
        </div>
        <div className='mt-36 '>
        <Dashboard/>
        </div>
      </div>
    </div> */}



    <div className="relative flex bg-[#f1f5f9] min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 bg-[#1c2434] text-white h-screen w-[17%] z-50 hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="lg:ml-[17%] w-full">
        {/* Header */}
        <div className="fixed top-0 bg-white w-full  z-40 shadow-xl py-5 flex justify-between px-4">
          <Header />
          {/* Add a hamburger menu icon for small screens */}
          <div className="lg:hidden">
            <button className="text-black">Menu</button>
          </div>
        </div>

        {/* Dashboard */}
        <div className="mt-24 p-5">
          <Dashboard />
        </div>
      </div>
    </div>
    </>
  )
}

export default App

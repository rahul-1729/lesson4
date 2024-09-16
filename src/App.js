
import './App.css';
import Card from "./components/Card"

function App() {
  return (
    <div className='h-screen w-screen bg-gray-800 overflow-hidden relative flex justify-center items-center
    '>
          <div className='h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] md:h-[650px] md:w-[650px] bg-gradient-to-l from-indigo-500  via-sky-400    to-emrald-500 rounded-full absolute bottom-2 -right-40 blur-sm'  ></div>
          <div className=' bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-300 via h-[200px] w-[200px]   rounded-full absolute top-2 -left-32 blur-lg'  ></div>
          
           <Card/>
         
           
           
       
    </div>
  );
}

export default App;

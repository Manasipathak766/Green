import { Outlet } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div >
   <main className='pt-16 bg-black min-h-[calc(100vh)]'>
    <Outlet/>
   </main>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tasks from './components/Tasks';
import About from './components/About';
import Nav from './components/Nav';
function App() {


  return (
    <BrowserRouter>
      <div class="w-screen min-h-screen h-max bg-gradient-to-b from-blue-500 to-pink-500 flex items-center justify-center">
        <div class="max-w-[350px] min-w-[300px] bg-blue-200 bg-opacity-30 p-7 shadow-2xl flex flex-col items-center rounded-lg">
          <h1 class="text-2xl font-bold mb-6 text-white">TODO LIST</h1>
          <Nav />
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
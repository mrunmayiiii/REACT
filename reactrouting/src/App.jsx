
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Paramcomp from './components/Paramcomp';
import Courses from './components/Courses';
import Mocks from './components/Mocks';
import Reports from './components/Reports';
import Notfound from './components/Notfound';

////a href refreshes complete page but link doesnot
///basic routing--> dynamic routing-->parametes--->navigation--->nested routing--->for children add outlet

 
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
           <Home/>
           <Navbar/>
      </div>
      
     
    },
    {
      path:"/about",
      element:<div>
           <About/>
           <Navbar/>
      </div>
    },
    {
      path:"/dashboard",
      element:<div>
           <Dashboard/>
           <Navbar/>
      </div>,
      children:[
        {
          path:'courses',
          element: <Courses/>,
        },
        {
          path:'mocktest',
          element:<Mocks/>,
        },
         {
          path:'reports',
          element:<Reports/>,
        },
      ]
      
    },
    {
      path:"/student/:id",
      element:<div>
           <Paramcomp/>
           <Navbar/>
      </div>
    },
    {
      path:'*',
      element:<Notfound/>
    },
  ]
);
function App() {

  return (
   <RouterProvider router={router}/>
  )
}

export default App

import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import Blog from "./pages/Blog.jsx"
import Blogpost from "./pages/Blogpost.jsx"
import Error from "./pages/Error.jsx"
import Detail from "./pages/Detail.jsx"



export default function App(){
  return(
    <>
    <BrowserRouter>
<Routes>
<Route path="/"  element={<HomePage/>} ></Route>
<Route path="/blog"  element={<Blog/>} ></Route>
<Route path="/blog/:slug"  element={<Blogpost/>} ></Route>
<Route path="*"  element={<Error/>} ></Route>
<Route path="/profile"  element={ <Detail/>} ></Route>
</Routes>
    </BrowserRouter>
    </>
  )
}

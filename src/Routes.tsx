import { Routes, Route , BrowserRouter} from "react-router-dom"
import Blog from "./Pages/Blog"
import Courses from "./Pages/Courses"
import Home from "./Pages/Home"

export default function Wrapper(){
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/cursos" element={<Courses />}/>
    </Routes>
    </BrowserRouter>
)
}
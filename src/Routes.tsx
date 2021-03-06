import { Routes, Route , BrowserRouter} from "react-router-dom";
import Blog from "./Pages/Blog";
import Content from "./Pages/Content";
import Courses from "./Pages/Courses";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Post from "./Pages/Post";

export default function Wrapper(){
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/cursos" element={<Courses />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/conteudo" element={<Content />}/>
        <Route path="/contato" element={<Form />}/>
    </Routes>
    </BrowserRouter>
)
}
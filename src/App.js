import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from './components.js/Container'
import Navbar from './components.js/Navbar'
import Article from './pages/Article'
import Articles from './pages/Articles'
import ArticlesFiltered from './pages/ArticlesFiltered'
import Categories from './pages/Categories'
import Home from './pages/Home'
import NewArticle from './pages/NewArticle'
import NewCategory from './pages/NewCategory'


const App = () => {
  return(
    <BrowserRouter>
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/articles/categories/:slug" element={<ArticlesFiltered/>}/>
          <Route path="/articles/categories/:slug/:slugArticle" element={<Article/>}/>
          <Route path="/new-article" element={<NewArticle/>}/>
          <Route path="/new-category" element={<NewCategory/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getArticles, getFilteredArticles } from '../api/articles'
import { getCategories } from '../api/categories'
import H1 from '../components.js/H1'

const ArticlesFiltered = () => {
  const [ articles, setArticles ] = useState([])
  const [ category, setCategory ] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await getFilteredArticles(slug)
    setArticles(data.articles)
    setCategory(data.category)
  }

  return(
    <>
      <H1>{category.name}</H1>
      {articles.map(article => {
        return (
          <Link key={article.slug} to={`/articles/categories/${article.category}/${article.slug}`}>
            <p>{article.title}</p>
          </Link>
        )
      })}
    </>

  )
}

export default ArticlesFiltered
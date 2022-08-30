import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getArticles } from '../api/articles'
import H1 from '../components.js/H1'

const Articles = () => {
  const [ articles, setArticles ] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await getArticles()
    setArticles(data)
  }

  return(
    <>
      <H1>All articles</H1>
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

export default Articles
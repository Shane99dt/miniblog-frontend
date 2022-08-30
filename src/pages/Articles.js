import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getArticles } from '../api/articles'
import ArticleCard from '../components.js/ArticleCard'
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
      <section className='flex flex-col gap-2'>
        {articles.map(article => {
          return (
            <Link key={article.slug} to={`/articles/categories/${article.category}/${article.slug}`}>
              <ArticleCard author={article.author} title={article.title} category={article.category}/>
            </Link>
          )
        })}
      </section>
    </>

  )
}

export default Articles
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getArticles, getFilteredArticles } from '../api/articles'
import { getCategories } from '../api/categories'
import ArticleCard from '../components.js/ArticleCard'
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
      <section className='flex flex-col gap-2'>
        {articles.map(article => {
          return (
            <Link key={article.slug} to={`/articles/categories/${article.category}/${article.slug}`}>
              <ArticleCard
                author={article.author}
                title={article.title}
                category={article.category}
                />
            </Link>
          )
        })}
      </section>
    </>

  )
}

export default ArticlesFiltered
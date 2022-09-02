import { useEffect, useState } from 'react'
import { getArticles } from '../api/articles'
import H1 from '../components.js/H1'
import H3 from '../components.js/H3'
import LoadingSpinner from '../components.js/LoadingSpinner'
import RandomArticleCard from '../components.js/RandomArticleCard'

const Home = () => {
  const [ article, setArticle ] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await getArticles()
    setArticle(data[getRndInteger(data.length)])
  }

  const getRndInteger = (max) => {
    return Math.floor(Math.random() * (max + 1));
  }


  return(
    <>
      <H1>The miniblog</H1>
      <H3 className="text-gray-600">Here's an article for you!</H3>
      {!article ? (
        <LoadingSpinner text="Article hasn't loaded"/>
      ):(
        <RandomArticleCard
          title={article.title}
          author={article.author}
          category={article.category}
          date={article.date}
          description={article.description}
        />
      )}
    </>
  )
}

export default Home
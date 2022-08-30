import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getArticle } from '../api/articles'
import H1 from '../components.js/H1'
import 'moment'
import moment from 'moment'

const Article = () => {
  const [ article, setArticle ] = useState([])
  const { slug, slugArticle } = useParams()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await getArticle(slug, slugArticle)
    setArticle(data)
  }

  return(
    <>
      <H1>{article.title}</H1>
      <p>by {article.author}</p>
      <small>{moment(article.date).format('LLL')}</small>
      <p>{article.description}</p>
    </>

  )
}

export default Article
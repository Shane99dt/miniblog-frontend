import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteArticle, getArticle } from '../api/articles'
import H1 from '../components.js/H1'
import 'moment'
import Button from '../components.js/Button'
import ArticleBody from '../components.js/ArticleBody'

const Article = () => {
  const [ article, setArticle ] = useState([])
  const { slug, slugArticle } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await getArticle(slug, slugArticle)
    setArticle(data)
  }

  const handleDeleteArticle = async () => {
    const data = await deleteArticle(slug, slugArticle)
    if(data.status === 201){
      navigate('/articles')
    }
  }

  return(
    <>
      <H1>{article.title}</H1>
      <ArticleBody
        author={article.author}
        date={article.date}
        description={article.description}
      />
      <Button text='delete article' onBtnClick={handleDeleteArticle}/>
    </>

  )
}

export default Article
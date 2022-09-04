import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteArticle, getArticle } from '../api/articles'
import H1 from '../components.js/H1'
import 'moment'
import Button from '../components.js/Button'
import ArticleBody from '../components.js/ArticleBody'
import DeleteNotification from '../components.js/DeleteNotification'

const Article = () => {
  const [ article, setArticle ] = useState([])
  const [ showDelete, setShowDelete ] = useState(false)
  const { slug, slugArticle } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await getArticle(slug, slugArticle)
    setArticle(data)
  }

  const handleClickShowDelete = () => {
    if(showDelete){
      setShowDelete(false)
    }else{
      setShowDelete(true)
    }
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
        article={article}
      />
      {showDelete ? (
        <DeleteNotification btnDeleteFnc={handleDeleteArticle} btnCancelFnc={handleClickShowDelete}/>
      ):(
        <Button text='delete article' onBtnClick={handleClickShowDelete}/>
      )
      }
    </>

  )
}

export default Article
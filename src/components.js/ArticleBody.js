import moment from 'moment'
import { Link } from 'react-router-dom'

const ArticleBody = ({ article }) => {
  return(
    <>
      <div className='mb-5'>
        <div className='flex flex-row items-center'>
          <p>by <span className='font-medium capitalize'>{article.author}</span></p>
          <Link to={`/articles/categories/${article.category}`}><p className='mx-2 px-2 border rounded border-gray-400 hover:bg-gray-300 capitalize'>{article.category}</p></Link>
        </div>
        <small>{moment(article.date).format('LLL')}</small>
      </div>
      <p className='my-5 '>{article.description}</p>
    </>
  )
}

export default ArticleBody
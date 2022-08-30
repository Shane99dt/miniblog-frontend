import moment from 'moment'

const ArticleBody = ({ author, date, description}) => {
  return(
    <>
      <div className='mb-5'>
        <p>by <span className='font-medium'>{author}</span></p>
        <small>{moment(date).format('LLL')}</small>
      </div>
      <p className='my-5 '>{description}</p>
    </>
  )
}

export default ArticleBody
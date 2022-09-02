import H3 from "./H3"
import moment from 'moment'
import { Link } from 'react-router-dom'

const RandomArticleCard = ({ author, title, category, date, description }) => {
  return(
    <div className="relative sm:mx-auto py-2 px-4 border border-gray-400 rounded sm:w-[80%] min-h-[250px] my-5">
      <H3 className="text-center mb-5 capitalize">{title}</H3>
      <p className="break-words pb-8">{description}</p>
      <div className="absolute top-0 left-0 bg-gray-500/40 hover:bg-gray-500/70 px-4 py-1 rounded-br capitalize">
        <Link to={`/articles/categories/${category}`}>{category}</Link>
      </div>
      <div className="absolute bottom-2 right-4">
        <small className="first-letter:capitalize">written by <span className="capitalize font-medium">{author}</span> on {moment(date).format('LLL')}</small>
      </div>
    </div>
  )
}

export default RandomArticleCard
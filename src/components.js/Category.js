import { Link } from "react-router-dom"
import Button from "./Button"

const Category = ({ category, text }) => {
  return(
    <div>
      <Link key={category.slug} to={`/articles/categories/${category.slug}`}>
        <p>{category.name}</p>
      </Link>
      <Button text={text} />
    </div>
  )
}

export default Category
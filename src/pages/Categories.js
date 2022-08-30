import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../api/categories'
import Category from '../components.js/Category'
import H1 from '../components.js/H1'

const Categories = () => {
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await getCategories()
    setCategories(data)
  }

  return(
    <>
      <H1>Categories</H1>
      {categories.map(category => {
        return(
          <div>
            <Link key={category.slug} to={`/articles/categories/${category.slug}`}>
              <p>{category.name}</p>
            </Link>
          </div>
          // <Category category={category} text='delete' />
        )
      })}
    </>

  )
}

export default Categories
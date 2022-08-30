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
      <section className='flex flex-col gap-2'>
        {categories.map(category => {
          return(
            <div key={category.slug} className='flex flex-col'>
              <Link to={`/articles/categories/${category.slug}`}>
                <Category category={category.name}/>
              </Link>
            </div>
          )
        })}
      </section>
    </>

  )
}

export default Categories
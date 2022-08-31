import { useState, useEffect } from "react"
import H1 from "../components.js/H1"
import Input from "../components.js/Input"
import TextArea from "../components.js/TextArea"
import Button from "../components.js/Button"
import { postArticle } from "../api/articles"
import { getCategories } from "../api/categories"
import { useNavigate } from "react-router-dom"
import Select from "../components.js/Select"
import slugify from "react-slugify"


const NewArticle = () => {
  const [ author, setAuthor ] = useState('')
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ categories, setCategories ] = useState([])
  const [ category, setCategory ] = useState('')
  const [ errors, setErrors ] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])


  const handleChangeAuthor = e => {
    setAuthor(e.target.value)
  }

  const handleChangeTitle = e => {
    setTitle(e.target.value)
  }

  const handleChangeDescription = e => {
    setDescription(e.target.value)
  }

  const handleChangeSelect = e => {
    setCategory(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const article = {
      author,
      title,
      description
    }
    const data = await postArticle(category, article)
    const slugifiedTitle = slugify(title, {lower: true})
    console.log(data.response)
    if(data.status === 201){
      navigate(`/articles/categories/${category}/${slugifiedTitle}`)
    }else{
      setErrors(data.response)
    }
  }

  const fetchData = async () => {
    const data = await getCategories()
    setCategories(data)
  }



  return(
    <>
      <H1>new article</H1>
      <form onSubmit={handleSubmit}>
        <div>
        <Select
            label="category"
            labelId="category"
            onSelectChange={handleChangeSelect}
            selectOptions={categories}
            value={category}
            errors={errors.filter(error => error.param === 'category')}
            required
          />
          <Input
            label="author"
            placeholder="Author"
            labelId = "author"
            type="text"
            onChange={handleChangeAuthor}
            value={author}
            errors={errors.filter(error => error.param === 'author')}
            required
          />
          <Input
            label="title"
            placeholder="Title"
            labelId = "title"
            type="text"
            onChange={handleChangeTitle}
            value={title}
            errors={errors.filter(error => error.param === 'title')}
            required
          />
          <TextArea
            label="description"
            placeholder="Description"
            labelId = "description"
            onChange={handleChangeDescription}
            value={description}
            errors={errors.filter(error => error.param === 'description')}
            required
          />
        </div>
        <Button
          text="Submit"
          type="submit"
        />
      </form>
    </>
  )
}

export default NewArticle
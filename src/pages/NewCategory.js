import { useState } from "react"
import H1 from "../components.js/H1"
import Input from "../components.js/Input"
import TextArea from "../components.js/TextArea"
import Button from "../components.js/Button"
import { postCategory } from "../api/categories"
import { useNavigate } from "react-router-dom"


const NewCategory = () => {
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ errors, setErrors ] = useState([])
  const navigate = useNavigate()

  const handleChangeDescription = e => {
    setDescription(e.target.value)
  }

  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const category = {
      name,
      description
    }
    const data = await postCategory(category)
    console.log(data.response)
    if(data.status === 201){
      navigate(`/categories`)
    }else{
      setErrors(data.response)
    }
  }



  return(
    <>
      <H1>new category</H1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="category name"
            placeholder="Category name"
            labelId = "categoryName"
            type="text"
            onChange={handleChangeName}
            value={name}
            errors={errors.filter(error => error.param === 'name')}
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
          className="mx-3 w-[50%] sm:w-auto"
        />
      </form>
    </>
  )
}

export default NewCategory
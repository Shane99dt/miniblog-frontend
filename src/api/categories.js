const getCategories = async () => {
  const request = await fetch('http://localhost:5000/categories/')
  const response = await request.json()
  return response
}

const postCategory = async (body) => {
  const request = await fetch(`http://localhost:5000/categories`, {
    method: "POST",
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(body)
  })
  const response = await request.json()

  return{
    status: request.status,
    response
  }
}


export { getCategories, postCategory }
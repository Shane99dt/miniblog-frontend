const getCategories = async () => {
  const request = await fetch("https://miniblog-dt.herokuapp.com/categories/");
  const response = await request.json();
  return response;
};

const postCategory = async (body) => {
  const request = await fetch(`https://miniblog-dt.herokuapp.com/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const response = await request.json();

  return {
    status: request.status,
    response,
  };
};

export { getCategories, postCategory };

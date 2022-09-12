const getArticles = async () => {
  const request = await fetch("https://miniblog-dt.herokuapp.com/articles/");
  const response = await request.json();
  return response;
};

const getFilteredArticles = async (slug) => {
  const request = await fetch(
    `https://miniblog-dt.herokuapp.com/articles/categories/${slug}`
  );
  const response = await request.json();
  return response;
};

const getArticle = async (slug, slugArticle) => {
  const request = await fetch(
    `https://miniblog-dt.herokuapp.com/articles/categories/${slug}/${slugArticle}`
  );
  const response = await request.json();
  return response;
};

const postArticle = async (slug, body) => {
  const request = await fetch(
    `https://miniblog-dt.herokuapp.com/articles/categories/${slug}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  console.log(request.status);
  const response = await request.json();

  return {
    status: request.status,
    response,
  };
};

const deleteArticle = async (slug, slugArticle) => {
  const request = await fetch(
    `https://miniblog-dt.herokuapp.com/articles/categories/${slug}/${slugArticle}`,
    {
      method: "DELETE",
    }
  );
  return request;
};

export {
  getArticles,
  getFilteredArticles,
  getArticle,
  postArticle,
  deleteArticle,
};

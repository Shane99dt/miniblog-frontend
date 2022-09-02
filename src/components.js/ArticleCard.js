const ArticleCard = ({ author, title, category}) => {
  return(
    <div className="relative py-2 px-4 border border-gray-400 rounded hover:bg-gray-300">
      <div className='flex flex-row items-center justify-between '>
        <p className="font-medium text-xl capitalize">{title}</p>
        <p>by <span className="capitalize font-medium">{author}</span></p>
      </div>
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-medium text-gray-600/40 uppercase ">{category}</p>
    </div>
  )
}

export default ArticleCard
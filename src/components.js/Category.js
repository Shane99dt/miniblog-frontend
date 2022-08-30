const Category = ({ category}) => {
  return(
    <div className="relative py-2 px-4 border border-gray-400 rounded hover:bg-gray-300">
      <div className='flex flex-row items-center justify-between'>
        <p className="font-medium text-xl capitalize">{category}</p>
      </div>
    </div>
  )
}

export default Category
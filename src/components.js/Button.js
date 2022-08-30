const Button = ({ text, type, onBtnClick, className }) => {
  return(
    <button className={`py-1 px-3 min-w-[100px] border border-gray-400 rounded-md hover:bg-gray-300 font-medium text-gray-900 capitalize ${className}`} onClick={onBtnClick} type={type}>{text}</button>
  )
}

export default Button
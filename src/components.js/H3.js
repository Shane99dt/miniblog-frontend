const H3 = ({children, className}) => {
  return(
    <p className={`text-xl font-semibold text-zinc-800 ${className}`}>{children}</p>
  )
}

export default H3
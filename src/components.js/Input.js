const Input = ({ label, placeholder, labelId, type, onChange, errors, value, required }) => {
  const hasErrors = errors.length > 0
  return(
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 md:mb-1" htmlFor={labelId}>
        {label}
      </label>
      <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight ${hasErrors ? ('border-red-600'):('border-gray-600')} focus:outline-none focus:bg-white`} id={labelId} value={value} type={type} onChange={onChange} placeholder={placeholder} required={required}/>
      {hasErrors && (
        <>
          {errors.map((error, i) => {
            return <small key={i} className="text-red-600">{`${error.msg} `}</small>
          })}
        </>
      )}
    </div>
  )
}

export default Input
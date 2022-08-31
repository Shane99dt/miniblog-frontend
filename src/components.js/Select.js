const Select = ({ label, labelId, onSelectChange, selectOptions, errors, value, required }) => {
  const hasErrors = errors.length > 0
  return(
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 md:mb-1" htmlFor={labelId}>
        {label}
      </label>
      <select className={`block appearance-none w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight ${hasErrors ? ('border-red-600'):('border-gray-600')} focus:outline-none focus:bg-white focus:border-gray-500 capitalize`} id={labelId} onChange={onSelectChange} value={value} required={required}>
        <option value="">Select an option</option>
        {selectOptions.map(item => {
          return <option key={item.slug} value={item.slug}>{item.name}</option>
        })}
      </select>
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

export default Select
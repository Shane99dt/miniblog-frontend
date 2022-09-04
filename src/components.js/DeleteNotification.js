import H3 from './H3'
import Button from "./Button"

const DeleteNotification = ({ btnDeleteFnc, btnCancelFnc }) => {
  return(
    <div className="absolute top-[20%] left-[50%] translate-x-[-50%] flex flex-col justify-center mx-auto py-2 px-4 border border-gray-500 rounded-md sm:w-[50%] w-[90%] h-[150px] my-5 bg-gray-300">
      <div className="mx-auto">
        <H3 className="text-center mb-5 first-letter:uppercase text-gray-800">Are you sure you want to delete this article?</H3>
        <div className="flex flex-row gap-4 justify-center">
          <Button text='Yes, Delete' className="border-red-700 bg-red-700 hover:bg-red-600" onBtnClick={btnDeleteFnc}/>
          <Button text='No, Cancel' className="border-gray-500" onBtnClick={btnCancelFnc}/>
        </div>
      </div>
    </div>
  )
}

export default DeleteNotification
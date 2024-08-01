const UtilityFirst = () => {
  return (
    <div className='flex flex-items p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12'>
      <img 
        className="w-12 h-12" 
        src="../src/assets/warning.svg" 
        alt="Warning" 
      />

      <div>
        <div className="text-xl font-medium text-black">Are you sure ?</div>
        <p className="text-slate-500">You are about to delete a post!</p>
      </div>
    </div>
  )
}

export default UtilityFirst
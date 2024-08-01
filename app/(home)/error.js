'use client'

export default function Error({ error, reset }) {

  return (
    <div className=' h-[100%] flex flex-col items-center justify-center'>
      <div className='p-4 lg:p-10 shadow rounded-md flex flex-col gap-10'>
        <h1 className="font-medium text-red-600">{error.message}</h1>
        <button
          className='px-4 py-2 w-40 mx-auto text-primary hover:text-hover bg-secondary rounded-md'
          onClick={
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  )
}
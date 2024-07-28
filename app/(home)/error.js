'use client'

export default function Error({ error, reset }) {

  return (
    <div className='max-w-2xl mx-auto h-screen flex flex-col items-center justify-center'>
      <div className='p-4 lg:p-10 shadow rounded-md flex flex-col gap-10'>
        <h1 className="font-medium text-red-600">{error.message}</h1>
        <button
          className='px-4 py-2 w-1/3 mx-auto text-white bg-[#f86b2a] hover:bg-[#55a6bd] rounded-md'
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
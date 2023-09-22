import Logo_OVO from '../images/Logo_ovo_purple.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='h-full bg-gradient-to-r from-purple-600 to-purple-300'>
      <div className='flex flex-col items-center pt-5'>
        <Image src={Logo_OVO} width={155} height={155} alt='Logo OVO' />
        <h1 className='mt-5'>Password</h1>
        <div className='w-full flex justify-center'>
          <div className='w-fit flex flex-row gap-2'>
            <svg viewBox="0 0 2 2" aria-hidden="true" className='w-4 h-4 fill-slate-100'>
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <svg viewBox="0 0 2 2" aria-hidden="true" className='w-4 h-4 fill-slate-100'>
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <svg viewBox="0 0 2 2" aria-hidden="true" className='w-4 h-4 fill-slate-100'>
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <svg viewBox="0 0 2 2" aria-hidden="true" className='w-4 h-4 fill-slate-100'>
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <svg viewBox="0 0 2 2" aria-hidden="true" className='w-4 h-4 fill-slate-100'>
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <svg viewBox="0 0 2 2" aria-hidden="true" className='w-4 h-4 fill-slate-100'>
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
          </div>
        </div>
        <div className='w-3/4 mt-2 grid grid-cols-3 text-slate-200'>
          <button className='p-6 text-6xl'>1</button>
          <button className='p-6 text-6xl'>2</button>
          <button className='p-6 text-6xl'>3</button>
          <button className='p-6 text-6xl'>4</button>
          <button className='p-6 text-6xl'>5</button>
          <button className='p-6 text-6xl'>6</button>
          <button className='p-6 text-6xl'>7</button>
          <button className='p-6 text-6xl'>8</button>
          <button className='p-6 text-6xl'>9</button>
          <button className='p-6 text-6xl'></button>
          <button className='p-6 text-6xl'>0</button>
          <button className='p-6'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

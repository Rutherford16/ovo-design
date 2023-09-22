'use client'

import Logo_OVO from '../images/Logo_ovo_purple.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [password, setPassword] = useState('')
  const [shake, setShake] = useState('')

  function isiPassword(e) {
    setPassword(password + e)
  }

  function backspace() {
    let oldPassword = password;
    setPassword(oldPassword.slice(0, -1));
    console.log(password);
  }

  useEffect(() => {
    console.log(password)
    console.log(password.length)
    if (password.length === 6) {
      setShake('animate-shake')
      setTimeout(() => {
        setPassword('')
        setShake('')
      }, 1000);
    }
  }, [password])

  return (
    <section className='h-full bg-gradient-to-r from-purple-600 to-purple-300'>
      <div className='flex flex-col items-center pt-5'>
        <Image src={Logo_OVO} width={155} height={155} alt='Logo OVO' />
        <h1 className='mt-5 text-white'>Password</h1>
        <div className='w-full flex justify-center'>
          <div className={'w-fit flex flex-row gap-2 ' + shake}>
            <Dot state={password.length}/>
          </div>
        </div>
        <div className='w-3/4 mt-2 grid grid-cols-3 text-slate-200'>
          <button className='p-6 text-6xl hover:bg-purple-400' onClick={(e) => { isiPassword(e.target.value) }} value={'1'}>1</button>
          <button className='p-6 text-6xl hover:bg-purple-400' onClick={(e) => { isiPassword(e.target.value) }} value={'2'}>2</button>
          <button className='p-6 text-6xl hover:bg-purple-400' onClick={(e) => { isiPassword(e.target.value) }} value={'3'}>3</button>
          <button className='p-6 text-6xl hover:bg-purple-400' onClick={(e) => { isiPassword(e.target.value) }} value={'4'}>4</button>
          <button className='p-6 text-6xl hover:bg-purple-400' onClick={(e) => { isiPassword(e.target.value) }} value={'5'}>5</button>
          <button className='p-6 text-6xl hover:bg-purple-400' onClick={(e) => { isiPassword(e.target.value) }} value={'6'}>6</button>
          <button className='p-6 text-6xl hover:bg-purple-400' onClick={(e) => { isiPassword(e.target.value) }} value={'7'}>7</button>
          <button className='p-6 text-6xl hover:bg-purple-400' onClick={(e) => { isiPassword(e.target.value) }} value={'8'}>8</button>
          <button className='p-6 text-6xl hover:bg-purple-400' onClick={(e) => { isiPassword(e.target.value) }} value={'9'}>9</button>
          <button className='p-6 text-6xl'></button>
          <button className='p-6 text-6xl hover:bg-purple-400' onClick={(e) => { isiPassword(e.target.value) }} value={'0'}>0</button>
          <button className='p-6 text-6xl hover:bg-purple-400' onClick={() => { backspace() }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

function Dot({state=0}) {
  const rows = [];
  for (let i = 1; i <= 6; i++) {
    if (i<=state){
      rows.push(
        <svg key={i} viewBox="0 0 2 2" aria-hidden="true" className='w-4 h-4 fill-slate-100'>
          <circle cx="1" cy="1" r="1"></circle>
        </svg>
      );
    } else {
      rows.push(
        <svg key={i} viewBox="0 0 2 2" aria-hidden="true" className='w-4 h-4 fill-slate-400'>
          <circle cx="1" cy="1" r="1"></circle>
        </svg>
      );
    }
  }

  return (
    <>
      {rows}
    </>
  )
}
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Dashboard() {
  const [saldo, setSaldo] = useState('******')
  const [keliatan, setKeliatan] = useState(false)

  function liatSaldo() {
    if (keliatan) {
      setSaldo('******')
      setKeliatan(!keliatan)
    } else {
      setSaldo('Rp 12.715')
      setKeliatan(!keliatan)
    }
  }

  return (
    <section className='h-full bg-gradient-to-r from-purple-600 to-purple-300'>
      <header className='p-5 text-purple-800 flex justify-between'>
        <h1 className='text-2xl'>OVO</h1>
        <button className='bg-slate-300 p-1 rounded-full hover:opacity-70'>% Promo</button>
      </header>
      <div className='m-4 py-2 px-4 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl text-sm text-white'>
        <h3>OVO Cash</h3>
        <div className='flex justify-between'>
          <div className='text-xs' onClick={() => { liatSaldo() }}>
            <h4 className='flex'>
              Total Saldo
              {keliatan ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </h4>
            <h4>{saldo}</h4>
          </div>
          <button className='rounded-full bg-white text-purple-800 text-xs p-1 h-fit'>OVO Points</button>
        </div>
        <div className='m-4 flex flex-row justify-between'>
          <button className='flex flex-col items-center p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Top Up
          </button>
          <button className='flex flex-col items-center p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Transfer
          </button>
          <button className='flex flex-col items-center p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
            </svg>
            Tarik Tunai
          </button>
          <button className='flex flex-col items-center p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>
            History
          </button>
        </div>
      </div>
      <div className='bg-white rounded-t-2xl w-full h-full p-3'>
        <div className='p-3 flex gap-2 text-xs'>
          <button className='bg-gray-200 rounded-full px-4 py-1 h-fit text-purple-800'>Favorit</button>
          <button className='hover:bg-purple-200 rounded-full px-4 py-1 h-fit'>Pilihan Lain</button>
          <button className='hover:bg-purple-200 rounded-full px-4 py-1 h-fit'>Grab</button>
          <button className='hover:bg-purple-200 rounded-full px-4 py-1 h-fit'>Finansial</button>
        </div>
        <div className='grid grid-cols-4 text-xs p-2'>
          <button className='flex flex-col items-center p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-auto text-blue-600 bg-blue-200 rounded-full p-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            Pulsa/Paket Data
          </button>
          <button className='flex flex-col items-center p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-auto text-yellow-600 fill-yellow-600 bg-yellow-200 rounded-full p-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            PLN
          </button>
          <button className='flex flex-col items-center p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-auto text-blue-600 fill-blue-600 bg-blue-200 rounded-full p-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>
            Air PDAM
          </button>
          <button className='flex flex-col items-center p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-auto text-blue-600 bg-blue-200 rounded-full p-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
            </svg>
            Uang Elektronik
          </button>
          <button className='flex flex-col items-center p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-auto text-yellow-600 fill-yellow-600 bg-yellow-200 rounded-full p-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            Pascabayar
          </button>
        </div>
        <div className='pb-24'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque ipsam perferendis corrupti fugiat iusto ad assumenda vitae et animi voluptatibus tempore consequatur quae saepe, distinctio minima, labore doloremque iure.
          Sequi aliquam maxime accusamus recusandae eligendi soluta dicta, consequuntur molestias iusto tempore magnam tempora optio quae ipsum sed doloribus. Cumque facere quas et ab cum neque laborum totam ad consectetur.
          Dolore ipsa modi odio beatae, quia saepe mollitia. Quos atque dolorem modi nostrum, cupiditate aut maiores omnis porro, facilis exercitationem aliquid officiis eligendi nemo dolore, hic rerum consequuntur dolores iusto?
          Libero repellat consequatur consectetur nemo molestiae repellendus commodi sunt, expedita quos non neque deserunt tenetur distinctio maxime culpa explicabo quaerat quam amet totam repudiandae praesentium nihil assumenda! Earum, doloribus velit.
          Molestias maiores nisi totam reprehenderit! Nisi omnis qui cumque, asperiores quos neque autem fugit corrupti nam odio minus perferendis, doloremque, commodi architecto. Dolorem nam quidem nihil molestiae odit suscipit fugit.
          Dolor in, officia atque, eum natus aliquam aspernatur rem nemo dignissimos quae molestias incidunt laudantium suscipit culpa minus exercitationem ad ducimus saepe officiis assumenda architecto quasi explicabo? Cupiditate, eligendi enim.
          Nisi totam labore tenetur, nam inventore architecto, expedita doloribus quia ea molestiae explicabo quis deserunt in dolorem vel alias dignissimos esse minus eveniet temporibus sit ex magnam. Repellendus, inventore labore!
          Sint, minus eveniet laborum iusto tenetur fuga, alias officia nobis at vitae a? Distinctio vero itaque deserunt ad voluptas iste facilis molestiae adipisci debitis! Cum tenetur pariatur doloribus recusandae aspernatur!
          Eum magni corrupti repellat expedita ducimus architecto voluptatibus soluta labore corporis alias similique odit esse itaque numquam tempora consequuntur quis earum amet, nobis blanditiis voluptas dignissimos cumque! Maiores, et pariatur!
          Architecto quisquam, animi voluptas, rerum nostrum natus ducimus distinctio, accusantium praesentium dicta excepturi. Nemo corrupti, labore ex omnis tempore odit corporis aspernatur eius, eligendi inventore delectus molestiae iusto cum vel!
          At ea consequatur corporis officia minima hic qui maiores, praesentium quia tempore? Asperiores, reiciendis labore corrupti sint ducimus fugit deleniti ipsam ullam earum nemo, facere excepturi ea sed iusto et!
          Magni, sequi quasi dicta eos nulla, voluptatum velit asperiores cum consequuntur consectetur nobis non temporibus consequatur ratione animi hic natus ipsa dolore possimus. Eligendi eum aspernatur in facere repellat explicabo?
          Exercitationem maxime mollitia libero similique asperiores saepe quae dolor ducimus ut autem, earum nostrum architecto nam, repellendus optio voluptates vel. Alias beatae similique ea sunt ducimus hic voluptates nostrum minus?
        </div>
      </div>
    </section>
  )
}

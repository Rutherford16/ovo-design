import '../globals.css'

export const metadata = {
  title: 'OVO Design',
  description: 'Trying to copied ovo apps design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex justify-center h-screen'>
        <main className='w-full lg:w-2/5 h-full'>
          {children}
        </main>
      </body>
    </html>
  )
}

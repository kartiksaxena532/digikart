import Image from 'next/image'
import { Button } from '@/components/ui/button'
import CardWithForm  from './CardWithForm'
import { Content } from '@radix-ui/react-select'
export default function Home() {

  return (
    <>
    <div className='flex items-center justify-center '>
    <h2 className='text-5xl  m-7 font-sans hover:font-mono subpixel-antialiased '>Kartik saxena Page</h2>
    </div>
   <div className='flex items-center justify-center'>
     
      <CardWithForm/>
    </div>
    </>
    
  )
}

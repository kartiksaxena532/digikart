
"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Drawer from "./Drawer"
import CardWithForm  from './CardWithForm'
import { Content } from '@radix-ui/react-select'

export default function Home() {

  return (
    <>
    <div className='flex items-center justify-center bg-primary text-primary-foreground'>
    <h2 className='text-5xl  m-7 font-tokyo hover:font-mono subpixel-antialiased '>Kartik saxena Page</h2>
    </div>
   <div className='flex items-center justify-center'>
     
      <CardWithForm/>
      </div>
    <div className='flex items-center justify-center m-7'>
    <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    <div className='flex items-center justify-center bg-primary text-primary-foreground'>
      <Drawer />
    </div>
    
    </>
    
  )
}

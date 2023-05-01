import {
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from 'lucide-react'
import Image from 'next/image'

export const Footer = () => (
  <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
    <div className='flex items-center gap-3'>
      <Image src="/assets/img/albums/parkwaydrive_darkerstill.jpg" alt='album' width={56} height={56} />
      <div className='flex flex-col'>
        <strong className='font-normal'>Ground Zero</strong>
        <span className='text-xs text-zinc-400'>Parkway Drive</span>
      </div>
    </div>

    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center gap-4'>
        <Shuffle size={20} className='text-zinc-200' />
        <SkipBack size={20} className='text-zinc-200' />
        <button className='w-10 h-10 pl-1 flex items-center justify-center rounded-full bg-white text-black'>
          <Play />
        </button>
        <SkipForward size={20} className='text-zinc-200' />
        <Repeat size={20} className='text-zinc-200' />
      </div>

      <div className='flex items-center gap-2'>
        <span className='text-xs text-zinc-400'>0:31</span>

        <div className='h-1 w-96 bg-zinc-600 rounded-full'>
          <div className='w-40 h-1 bg-zinc-200 rounded-full'></div>
        </div>

        <span className='text-xs text-zinc-400'>2:14</span>
      </div>
    </div>
  
    <div className='flex items-center gap-2'>
      <Mic2 size={20} />
      <LayoutList size={20} />
      <Laptop2 size={20} />
      <div className='flex items-center gap-2'>
        <Volume size={20} />
        <div className='h-1 w-24 bg-zinc-600 rounded-full'>
          <div className='w-10 h-1 bg-zinc-200 rounded-full'></div>
        </div>
      </div>
      <Maximize2 size={20} />
    </div>
  </footer> 
)
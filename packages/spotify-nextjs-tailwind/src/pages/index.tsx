import { HorizontalCard } from '@/components/HorizontalCard'
import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { VerticalCard } from '@/components/VerticalCard'
import { dailyMixMock } from '@/mocks/dailyMix.mock'
import { playlistsMock } from '@/mocks/playlists.mock'
import { useState } from 'react'

export default function Home() {
  const [playlists, setPlaylists] = useState(playlistsMock);
  const [dailyMix, setDailyMix] = useState(dailyMixMock)

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-2'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-2'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            {
              playlists.map((playlist) => (
                <HorizontalCard
                  key={playlist.id}
                  imgSrc={playlist.imgSrc}
                  imgAlt={playlist.imgAlt}
                  title={playlist.title}
                />
              ))
            }
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Rafael Zanella</h2>
          <div className='grid grid-cols-8 gap-4 mt-4'>
            {
              dailyMix.map((mix) => (
                <VerticalCard
                  key={mix.id}
                  imgSrc={mix.imgSrc}
                  imgAlt={mix.imgAlt}
                  title={mix.title}
                  description={mix.description}
                />
              ))
            }
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

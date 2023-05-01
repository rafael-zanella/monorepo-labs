import { Play } from "lucide-react"
import Image from "next/image"
import { FC } from "react"

interface IHorizontalCard {
  imgSrc: string,
  imgAlt: string,
  title: string,
}

export const HorizontalCard: FC<IHorizontalCard> = ({ imgSrc, imgAlt, title }) => (
  <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
    <Image src={imgSrc} alt={imgAlt} width={104} height={104} />
    <strong>{title}</strong>
    <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 pl-1 invisible group-hover:visible'>
      <Play />
    </button>
  </a>
)

import Image from "next/image"
import { FC } from "react"

interface IVerticalCard {
  imgSrc: string,
  imgAlt: string,
  title: string,
  description: string,
}

export const VerticalCard: FC<IVerticalCard> = ({ imgSrc, imgAlt, title, description }) => (
  <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
    <Image src={imgSrc} alt={imgAlt} width={120} height={120} className='w-full' />
    <strong className='font-semibold'>{title}</strong>
    <span className='text-sm text-zinc-400'>{description}</span>
  </a>
)

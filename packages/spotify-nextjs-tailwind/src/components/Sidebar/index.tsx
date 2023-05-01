import { Home, Library, Search } from "lucide-react";

export const Sidebar = () => (
  <aside className="w-72 bg-zinc-950 p-6">
    <nav className='space-y-5 mt-10'>
      <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <Home />
        Home
      </a>
      <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <Search />
        Search
      </a>
      <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <Library />
        Your Library
      </a>
    </nav>

    <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-2'>
      <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brazil</a>
      <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Heavy Metal</a>
      <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sertanejo</a>
      <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
      <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Classic Rock</a>
    </nav>
  </aside>
)
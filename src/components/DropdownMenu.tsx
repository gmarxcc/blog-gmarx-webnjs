import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { IoMenu } from 'react-icons/io5/index.js'
import DropdownMenuItem from './DropdownMenuItem'

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center rounded-md border border-zinc-500 dark:border-zinc-700 px-2 py-2 text-sm font-bold shadow-sm hover:bg-orange-200 dark:hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all ">
          <IoMenu className="h-5 w-5" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in durantion-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 shadow-xl ring-2 ring-black ring-opacity-5 focus:outline-none divide-zinc-500 dark:divide-zinc-700">
          <div className="py-2">
            <div className="py-2 px-3 uppercase font-bold text-xs">
              Categories
            </div>
            <DropdownMenuItem href="/categories/rs101">
              Research
            </DropdownMenuItem>
            <DropdownMenuItem href="/categories/aes">Embedded</DropdownMenuItem>
            <DropdownMenuItem href="/categories/aia">
              Artificial
            </DropdownMenuItem>
            <DropdownMenuItem href="/categories/science">
              Science
            </DropdownMenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

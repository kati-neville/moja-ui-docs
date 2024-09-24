import React from 'react'
import Image from 'next/image'
import githubDark from '@/images/logos/github-dark.png'
import githubLight from '@/images/logos/github-light.png'

export const Github = () => {
  return (
    <button
      type="button"
      className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
      aria-label={'Github Link'}
    >
      <Image
        src={githubLight}
        alt="github logo"
        className="block h-4 w-4 stroke-zinc-900 dark:hidden"
      />
      <Image
        src={githubDark}
        alt="github logo"
        className="hidden h-4 w-4 stroke-zinc-900 dark:block"
      />
    </button>
  )
}

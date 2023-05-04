'use client'
import { useState } from 'react';
import { Search as Icon } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button';
import { redirect } from 'next/navigation';

export default function Search() {
  const [search, setSearch] = useState<string>('')

  const handleSearch = async () => {
    redirect(`/?name=${search}`)
  }

  return (
    <div className="flex w-full gap-4">
      <div className="flex h-full w-full items-center overflow-hidden rounded-md border bg-popover px-3 text-popover-foreground">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          placeholder="Search for a Pokemon Name"
          className="border-0"
        />
      </div>
      <Button onClick={handleSearch}>
        <Icon className="mr-2 h-4 w-4 opacity-50" />
        Search
      </Button>
    </div>
  )
}

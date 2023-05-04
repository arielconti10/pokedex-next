import Image from "next/image"
import { Search } from "lucide-react"
import { cache } from 'react';
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const getBaseUrl = cache(() =>
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${process.env.PORT ?? 3000}`,
);

async function getData() {
  console.log(getBaseUrl())
  return getBaseUrl()
  // const res = await fetch(`${getBaseUrl()}/api/pokemon`)
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data")
  // }

  // return res.json()
}

export default async function IndexPage() {
  const data = await getData()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          NextDex is the best online PokéDex
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          The ultimate online Pokédex for Pokémon trainers. With NextDex you can
          easily find all the information you need about your favorite Pokémon.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {/* Search Bar component */}
        <div className="w-full">
          <div className="flex h-full w-full items-center overflow-hidden rounded-md border bg-popover px-3 text-popover-foreground">
            <Search className="mr-2 h-4 w-4 opacity-50" />
            <Input
              name="search"
              placeholder="Search for a Pokemon Name"
              className="border-0"
            />
          </div>
        </div>

        <div className="space-4 mt-4 flex w-full flex-row flex-wrap justify-between gap-4">
          {/* {data && data.map((pokemon) => (
            <Card key={data.id} className="flex flex-col items-center">
              <CardContent>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  width={200}
                  height={200}
                  alt="Bulbasaur"
                />
              </CardContent>
              <CardFooter>
                <CardTitle>{pokemon.identifier}</CardTitle>
              </CardFooter>
            </Card>
          ))} */}
        </div>

        {/* <Search /> */}
        {/* <List /> */}
        {/* Pokemon List component */}
      </div>
    </section>
  )
}

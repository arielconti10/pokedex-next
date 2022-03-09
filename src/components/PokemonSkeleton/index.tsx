import React from 'react'

import { x } from '@xstyled/styled-components'
import { PokemonCardWrapper } from 'components/PokemonCard/styles'

const PokemonSkeleton = () => {
  return (
    <PokemonCardWrapper>
      <x.div
        py="32px"
        mx="auto"
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        backgroundColor="#e3e3e3"
      >
        <x.p
          fontSize="6xl"
          fontWeight="semibold"
          color="black"
          position="absolute"
          top="10px"
          pointerEvents="none"
        >
          megapenis
        </x.p>

        <div
          className="inset-x-auto bottom-0 absolute z-20"
          style={{
            width: 175,
            height: 175
          }}
        >
          <div
            className="rounded-full absolute z-0 inset-x-auto mx-auto"
            style={{
              width: 130,
              height: 130,
              backgroundColor: '#E3E3E3',
              zIndex: -10,
              bottom: 8,
              left: 16
            }}
          />
        </div>
      </x.div>
      <div className="animate-pulse flex  w-full">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2"></div>
        </div>
        <div className="bg-white w-full pt-5 pb-8 text-center">
          <h1 className="capitalize font-semibold text-3xl mb-2 inline-block mx-auto w-32">
            <div className="h-6 bg-gray-300 rounded"></div>
          </h1>
          <div className="flex flex-wrap mx-auto justify-center">
            <div className="h-6 bg-gray-300 rounded w-16 mr-4"></div>
            <div className="h-6 bg-gray-300 rounded w-16"></div>
          </div>
        </div>
      </div>
    </PokemonCardWrapper>
  )
}
export default PokemonSkeleton

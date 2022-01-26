import Bug from 'assets/types/bug.svg'
import Dark from 'assets/types/dark.svg'
import Dragon from 'assets/types/dragon.svg'
import Electric from 'assets/types/electric.svg'
import Fairy from 'assets/types/fairy.svg'
import Fighting from 'assets/types/fighting.svg'
import Fire from 'assets/types/fire.svg'
import Flying from 'assets/types/flying.svg'
import Ghost from 'assets/types/ghost.svg'
import Grass from 'assets/types/grass.svg'
import Ground from 'assets/types/ground.svg'
import Ice from 'assets/types/ice.svg'
import Normal from 'assets/types/normal.svg'
import Poison from 'assets/types/poison.svg'
import Psychic from 'assets/types/psychic.svg'
import Rock from 'assets/types/rock.svg'
import Steel from 'assets/types/steel.svg'
import Water from 'assets/types/water.svg'

interface iconTypeInterface {
  [key: string]: string
}

const iconTypes: iconTypeInterface = {
  bug: Bug,
  dark: Dark,
  dragon: Dragon,
  electric: Electric,
  fairy: Fairy,
  fighting: Fighting,
  fire: Fire,
  flying: Flying,
  ghost: Ghost,
  grass: Grass,
  ground: Ground,
  ice: Ice,
  normal: Normal,
  poison: Poison,
  psychic: Psychic,
  rock: Rock,
  steel: Steel,
  water: Water
}

interface IconProps {
  name: string
}

const IconComponent = ({ name, ...props }: IconProps) => {
  const Icon = iconTypes[name]
  return (
    <div>
      <svg width={25} height={25} xmlns="http://www.w3.org/2000/svg">
        <Icon {...props} />
      </svg>
      {/*  */}
    </div>
  )
}

export default IconComponent

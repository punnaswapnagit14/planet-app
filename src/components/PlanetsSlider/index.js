// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {PlanetAppContainer, Heading} from './styledComponents'

const PlanetSlider = props => {
  const {planetList} = props

  return (
    <PlanetAppContainer data-testid="planets">
      <Heading> PLANETS</Heading>
      <Slider>
        {planetList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </PlanetAppContainer>
  )
}
export default PlanetSlider

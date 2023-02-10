import { extend } from '@react-three/fiber'
import { FontLoader} from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry} from "three/examples/jsm/geometries/TextGeometry";

import bebas from "./assets/bebas_neue.json"

extend({ TextGeometry })

const Experience = () => {

  const font = new FontLoader().parse(bebas)

  return(
    <>
      <mesh position-x={-2} position-y={2}>
        <textGeometry args={['Cometcode', {font, size: .75, height: .25}]}/>
        <meshBasicMaterial color="orange" />
      </mesh>

      <mesh position-x={ - 2 } scale={.5}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>

      <mesh rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1 }>
        <boxGeometry />
        <meshBasicMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  )
}

export default Experience
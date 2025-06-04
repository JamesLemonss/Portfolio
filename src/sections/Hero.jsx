import { Canvas } from "@react-three/fiber"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Shanks } from "../components/Shanks"
import { OrbitControls } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"


const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 853})
  return (
    <section className="flex items-start justify-center
    md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText/>
        <ParallaxBackground/>
        <figure 
        className="absolute inset-0" 
        style={{width: "100vw", height: "100vh"}}>
          <Canvas camera={{position: [0, 1, 3] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Shanks 
  scale={isMobile ? 2 : undefined} 
  position={isMobile ? [0, -2.55, 0] : undefined}
/>
            <OrbitControls />
          </Canvas>

        </figure>
    </section>
  )
}

export default Hero
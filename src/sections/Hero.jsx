/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 450})
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // const x = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-2xl sm:text-3xl font-medium text-center text-white font-generalsans">
          Hi, I&apos;m Saidul <span className="waving-hand">👋</span>
        </p>

        <h1 className="hero_tag text-gray_gradient">
          Building Products and Brands
        </h1>
      </div>

      {/* ==================== 3D Modal for Hero Sectio =============== */}
      <div className="w-full h-full absolute inset-0 mt-3 md:mt-10">
        <Leva hidden />

        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera>
              <HackerRoom
              //   scale={0.1}
              //   position={[3.5, -1.5, -10]}
              //   rotation={[0.4, 3.2, 0]}
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            <group >
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            {/* Add Light */}
            <ambientLight intensity={1} />

            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>



      <div className="absolute bottom-0 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

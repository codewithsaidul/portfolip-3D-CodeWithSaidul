/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react";
import arrawUp from "../assets/arrow-up.png";
import rightArrow from "../assets/right-arrow.png";
import leftArrow from "../assets/left-arrow.png";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";


const Project = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const projectCount = myProjects.length;


  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20">
      <h3 className="head-text">My Work</h3>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 mt-12 w-full">
        <div className="flex flex-col gap-5 relative px-5 py-10 sm:p-10 shadow-2xl shadow-black-200">
          <div className="absolute top-0 left-0 w-full">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          {/* <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="project logo"
              className="w-10 h-10 shadow-sm"
            />
          </div> */}

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <h3 className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </h3>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>

            <div className="flex justify-between items-center flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index}>
                    <img
                      className="tech-logo"
                      src={tag.path}
                      alt="technoloy logo"
                    />
                  </div>
                ))}
              </div>

              <a
                className="flex items-center gap-2 cursor-pointer text-white-600"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
              >
                <p>Check Live Site</p>
                <img className="w-3 h-3" src={arrawUp} alt="arrow up" />
              </a>
            </div>

            <div className="flex justify-between items-center mt-7">
              <button
                className="arrow-btn"
                onClick={() => handleNavigation("previous")}
              >
                <img src={leftArrow} alt="Left Arrow" />
              </button>


              <button
                className="arrow-btn"
                onClick={() => handleNavigation("next")}
              >
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
             <ambientLight intensity={Math.PI} />
             <directionalLight position={[10, 10, 5]} />

             <Center>
              <Suspense fallback={<CanvasLoader />}>
                  <group scale={1.5} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                      <DemoComputer textures={currentProject.texture} />
                  </group>
              </Suspense>
             </Center>

             <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Project;

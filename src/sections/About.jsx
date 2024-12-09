import Globe from "react-globe.gl";
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";
import copyIcon from "../assets/copy.svg";
import tickIcon from "../assets/tick.svg";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {

    const [hasCopiedEmail, setHasCopiedEmail] = useState(false);
    const [hasCopiedPhone, setHasCopiedPhone] = useState(false);

    const handleCopyPhone = () => {
        navigator.clipboard.writeText("+880 1763079580");

        setHasCopiedPhone(true);

        setTimeout(() => {
          setHasCopiedPhone(false);
        }, 2000);
    }
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("codewithsaidul@gmail.com");

        setHasCopiedEmail(true);

        setTimeout(() => {
          setHasCopiedEmail(false);
        }, 2000);
    }


  return (
    <section className="c-space my-20" id="about">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-6 gap-5 h-full">
        {/* ============== Grid Item 1 ==================== */}
        <div className="col-span-1 lg:row-span-3">
          <div className="grid-container">
            <img
              src={grid1}
              alt={`${grid1} CodeWithSaidul`}
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <h3 className="grid-headtext">Hi, I&apos;m Saidul</h3>
              <p className="grid-subtext">
                With 1+ Years of Experience. I have honed my skill in front-end
                & Back-End development, with a focus on animated 3D Website
              </p>
            </div>
          </div>
        </div>
        {/* ============== Grid Item 1 ==================== */}

        {/* ============== Grid Item 2 ==================== */}
        <div className="col-span-1 lg:row-span-3">
          <div className="grid-container">
            <img
              src={grid2}
              alt={`${grid2} CodeWithSaidul`}
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <h3 className="grid-headtext">Tech Stack</h3>
              <p className="grid-subtext">
                I&apos;m specialized in HTML, CSS, JavaScript, React, Next.js,
                Tailwind CSS, and Node.js. I&apos;m also familiar with PHP and
                Python.
              </p>
            </div>
          </div>
        </div>
        {/* ============== Grid Item 2 ==================== */}

        {/* ============== Grid Item 3 ==================== */}
        <div className="col-span-1 lg:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl sm:h-[276px] h-fit flex justify-center items-center">
              <Globe
                width={326}
                height={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                labelsData={[{
                    lat: 24.8829873,
                    lng: 91.8641605,
                    text: "Sylhet, Bangladesh",
                    size: 60,
                    color: "white"
                }]}
              />
            </div>

            <div>
              <h3 className="grid-headtext">
                I Work Remotely Across Most Time Zones
              </h3>
              <p className="grid-subtext">
                I&apos;m Based in Sylhet, Bangladesh. But currently, Remote
                Working is Available.
              </p>

              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        {/* ============== Grid Item 3 ==================== */}

        {/* ============== Grid Item 4 ==================== */}
        <div className="col-span-1 lg:col-span-2 lg:row-span-3">
          <div className="grid-container">
            <img
              src={grid3}
              alt={`${grid3} CodeWithSaidul`}
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <h3 className="grid-headtext">My Passion for Coding</h3>
              <p className="grid-subtext">
                I&apos;m passionate about creating innovative and user-friendly
                websites and applications. I&apos;m always looking for new
                challenges and opportunities to learn and grow.
              </p>
            </div>
          </div>
        </div>
        {/* ============== Grid Item 4 ==================== */}
        
        {/* ============== Grid Item 5  ==================== */}
        <div className="lg:col-span-1  lg:row-span-2">
          <div className="grid-container">
            <img
              src={grid4}
              alt={`${grid4} CodeWithSaidul`}
              className="w-full sm:h-[276px] sm:object-top md:h-[126px] h-fit object-contain"
            />

            <div className="space-y-2">
              <h3 className="grid-subtext text-center">Contact Me</h3>

              <div className="flex flex-col gap-2">
                <div className="copy-container" onClick={handleCopyEmail}>
                  <img src={hasCopiedEmail ? tickIcon : copyIcon} alt= {hasCopiedEmail ? "Copied CodeWithSaidul" : "Copy CodeWithSaidul"} />
                  <p className="text-xl md:text-xl lg:text-2xl font-medium text-gray_gradient text-white">codewithsaidul@gmail.com</p>
                </div>
                <div className="copy-container" onClick={handleCopyPhone}>
                  <img src={hasCopiedPhone ? tickIcon : copyIcon} alt= {hasCopiedPhone ? "Copied CodeWithSaidul" : "Copy CodeWithSaidul"} />
                  <p className="text-xl  font-medium text-gray_gradient text-white">Whatsapp: +880 1763079580</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============== Grid Item 5 ==================== */}
      </div>
    </section>
  );
};

export default About;

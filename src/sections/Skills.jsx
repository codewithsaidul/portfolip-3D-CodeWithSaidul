import HTML from "../assets/skills/html.svg"
import CSS from "../assets/skills/css.svg"
import Reactjs from "../assets/skills/react.svg"
import NextJS from "../assets/skills/nextjs.svg"
import Fremer from "../assets/skills/framer.png"
import Matreial from "../assets/skills/material.svg"
import JS from "../assets/skills/javascript.svg"
import Tailwind from "../assets/skills/tailwindcss.png"
import Bootstrap from "../assets/skills/bootstrap.svg"

const Skills = () => {
  return (
    <div className="c-space my-20">
        <div className="text-center mb-12">
            <h2 className="head-text mb-3">My Skills</h2>
            <p className="text-lg text-gray_gradient">These are a few of the abilities I have been honing over the last one years.</p>
        </div>

        {/* =========== skills container ====================== */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
            {/* ========= Frontend ================ */}
            <div className="border flex flex-col justify-center items-center h-fit gap-4 p-6">
                {/* frontend 1 */}
                <div className="flex flex-wrap items-center justify-center gap-6 w-full">
                    <div className="border shadow-xl flex items-center gap-2 p-3 rounded-lg">
                        <figure>
                            <img src={Reactjs} alt="Reactjs logo" loading="lazy" className="w-8 h-8" />
                        </figure>
                        <p className="text-white text-lg">React JS</p>
                    </div>
                   
                   {/* Nextjs */}
                    <div className="border shadow-xl flex items-center gap-2 p-3 rounded-lg">
                        <figure>
                            <img src={NextJS} alt="Nextjs logo" loading="lazy" className="w-8 h-8" />
                        </figure>
                        <p className="text-white text-lg">NEXT.JS</p>
                    </div>
                   
                    <div className="border shadow-xl flex items-center gap-2 p-3 rounded-lg">
                        <figure>
                            <img src={Fremer} alt="Framer logo" loading="lazy" className="w-8 h-8" />
                        </figure>
                        <p className="text-white text-lg">Framer</p>
                    </div>
                </div>
               
               {/* frontend 2 */}
                <div className="flex flex-wrap items-center justify-center gap-6 w-full">
                    <div className="border shadow-xl flex items-center gap-2 p-3 rounded-lg">
                        <figure>
                            <img src={JS} alt="Javascript logo" loading="lazy" className="w-8 h-8" />
                        </figure>
                        <p className="text-white text-lg">JavaScript</p>
                    </div>
                   
                    <div className="border shadow-xl flex items-center gap-2 p-3 rounded-lg">
                        <figure>
                            <img src={Tailwind} alt="Tailwind CSS logo" loading="lazy" className="w-8 h-8" />
                        </figure>
                        <p className="text-white text-lg">TailwindCSS</p>
                    </div>
                   
                    <div className="border shadow-xl flex items-center gap-2 p-3 rounded-lg">
                        <figure>
                            <img src={Bootstrap} alt="Bootstrap logo" loading="lazy" className="w-8 h-8" />
                        </figure>
                        <p className="text-white text-lg">Bootstrap</p>
                    </div>
                </div>
               
               {/* frontend 3 */}
               <div className="flex flex-wrap items-center justify-center gap-6 w-full">
                    <div className="border shadow-xl flex items-center gap-2 p-3 rounded-lg">
                        <figure>
                            <img src={HTML} alt="html logo" loading="lazy" className="w-8 h-8" />
                        </figure>
                        <p className="text-white text-lg">HTML5</p>
                    </div>
                    <div className="border shadow-xl flex items-center gap-2 p-3 rounded-lg">
                        <figure>
                            <img src={CSS} alt="CSS logo" loading="lazy" className="w-8 h-8" />
                        </figure>
                        <p className="text-white text-lg">CSS3</p>
                    </div>
               </div>
               
            </div>
        </div>
    </div>
  )
}

export default Skills
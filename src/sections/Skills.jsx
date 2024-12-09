import HTML from "../assets/skills/html.svg";
import CSS from "../assets/skills/css.svg";
import JS from "../assets/skills/javascript.svg";
import Bootstrap from "../assets/skills/bootstrap.svg";
import Tailwind from "../assets/skills/tailwindcss.png";
import Fremer from "../assets/skills/framer.png";
import Reactjs from "../assets/skills/react.svg";
import NextJS from "../assets/skills/nextjs.svg";

// backend skill image ==============
import Mysql from "../assets/skills/mysql.svg";
import Expressjs from "../assets/skills/express.svg";
import Mongodb from "../assets/skills/mongodb.svg";
import Nodejs from "../assets/skills/nodejs.svg";
import Firebase from "../assets/skills/firebase.svg";
import Postman from "../assets/skills/postman.svg";
import Github from "../assets/skills/github.svg";
import Figma from "../assets/skills/figma.svg";

const Skills = () => {
  return (
    <div className="c-space my-20">
      <div className="text-center mb-12">
        <h2 className="head-text mb-3">My Skills</h2>
        <p className="text-lg text-gray_gradient">
          These are a few of the abilities I have been honing over the last one
          years.
        </p>
      </div>

      {/* =========== skills container ====================== */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
        {/* ========= Frontend ================ */}
        <div className="flex flex-col justify-center items-center h-fit gap-4 p-6 bg-black-300 rounded-lg">
          {/* frontend 1 */}
          <div className="flex flex-wrap items-center justify-center gap-6 w-full">
            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={Reactjs}
                  alt="Reactjs logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-lg">React JS</p>
            </div>

            {/* Nextjs */}
            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={NextJS}
                  alt="Nextjs logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">NEXT.JS</p>
            </div>

            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={Fremer}
                  alt="Framer logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">Framer</p>
            </div>
          </div>

          {/* frontend 2 */}
          <div className="flex flex-wrap items-center justify-center gap-6 w-full">
            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={JS}
                  alt="Javascript logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">JavaScript</p>
            </div>

            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={Tailwind}
                  alt="Tailwind CSS logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">TailwindCSS</p>
            </div>

            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={Bootstrap}
                  alt="Bootstrap logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">Bootstrap</p>
            </div>
          </div>

          {/* frontend 3 */}
          <div className="flex flex-wrap items-center justify-center gap-6 w-full">
            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={HTML}
                  alt="html logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">HTML5</p>
            </div>
            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={CSS}
                  alt="CSS logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">CSS3</p>
            </div>
          </div>
        </div>

        {/* ========= Backend ================ */}
        <div className="flex flex-col justify-center items-center h-fit gap-4 p-6 bg-black-300 rounded-lg">
          {/* backend 1 */}
          <div className="flex flex-wrap items-center justify-center gap-6 w-full">
            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={Mongodb}
                  alt="MongoDb logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">MongoDB</p>
            </div>

            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={Firebase}
                  alt="Firebase logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">Firebase</p>
            </div>

            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={Mysql}
                  alt="Mysql logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">Mysql</p>
            </div>
          </div>

          {/* backend 2 */}
          <div className="flex flex-wrap items-center justify-center gap-6 w-full">
            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={Nodejs}
                  alt="NodeJs logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">Node.JS</p>
            </div>

             {/* Nextjs */}
             <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure className="bg-white-500 p-1 rounded-xl">
                <img
                  src={Expressjs}
                  alt="ExpressJs logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">Express.JS</p>
            </div>

            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={Postman}
                  alt="PostmanS logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">Postman</p>
            </div>
          </div>

          {/* backend 3 */}
          <div className="flex flex-wrap items-center justify-center gap-6 w-full">
            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={Github}
                  alt="Github logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">Github</p>
            </div>
            <div className="border border-black-500 shadow-xl flex items-center gap-2 p-3 rounded-lg">
              <figure>
                <img
                  src={Figma}
                  alt="Figma logo"
                  loading="lazy"
                  className="w-5 h-5"
                />
              </figure>
              <p className="text-white text-base">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import github from "../assets/github.svg"
import instagram from "../assets/instagram.svg"


const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Condition</p>
        <span>|</span>
        <p>Privacy & Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/codewithsaidul" target="_blank" className="flex justify-center items-center">
            <img src={github} alt="github icon" className="w-1/2 h-1/2 flex justify-center items-center" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://instagram.com/codewithsaidul" target="_blank" className="flex justify-center items-center">
            <img src={instagram} alt="instagram icon" className="w-1/2 h-1/2 flex justify-center items-center" />
          </a>
        </div>
      </div>


      <p className="text-white-500">
        &copy; 2025 <a href="https://codewithsaidul.vercel.app" target="_blank">CodeWithSaidul</a>{"  "}
        All Rights  Reserved
      </p>
    </section>
  );
};

export default Footer;

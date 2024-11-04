import { clientReviews } from "../constants";
import star from "../assets/star.png"

const Testimonial = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear From My Clients</h3>

      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div key={id} className="client-review">
            <p className="text-white font-light">{review}</p>

            <div className="client-content">
                <div className="flex gap-3">
                    <img src={img} alt={name} className="w-12 h-12 rounded-full" />

                    <div className="flex flex-col">
                      <h6 className="font-semibold text-white-800">{name}</h6>
                      <p className="text-white-500 text-sm md:text-base font-light">{position}</p>
                    </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {
                    Array.from({length: 5}).map((_, index) => <img key={index} src={star} alt="star" className="w-5 h-5" />)
                  }
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

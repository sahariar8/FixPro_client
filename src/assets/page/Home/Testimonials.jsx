
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Testimonials = () => {
    return (
      <div className=" my-12">
        <div
          className="hero md:h-[600px] bg-fixed "
          style={{
            backgroundImage: "url('doctor1.jpg')",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content flex flex-col">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl md:text-6xl font-bold">
                Testimonials
              </h1>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div data-aos="zoom-in-down">
                <div className="card  bg-emerald-100 shadow-xl">
                  <div className="card-body text-slate-600">
                    <h2 className="card-title font-bold">15 jul,2018</h2>
                    <p className="font-semibold">
                      "What an incredible event! Thank you for bringing us all
                      together for such an amazing experience."
                    </p>
                    <div className="card-actions justify-end">
                      <button className="block px-4 py-2 text-slate-600 rounded-lg font-bold bg-emerald-400">
                        --Sahariar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card  bg-pink-100 shadow-xl" data-aos="zoom-in">
                <div className="card-body text-slate-600">
                  <h2 className="card-title font-bold">25 Aug,2019</h2>
                  <p className="font-semibold">
                    "I'm truly impressed by the organization and attention to
                    detail that went into this event. Well done!"
                  </p>
                  <div className="card-actions justify-end">
                    <button className="block px-4 py-2 text-slate-600 rounded-lg font-bold bg-pink-400">
                      --Satu
                    </button>
                  </div>
                </div>
              </div>
              <div className="card  bg-yellow-100 shadow-xl" data-aos="zoom-in">
                <div className="card-body text-slate-600">
                  <h2 className="card-title font-bold">02 Nov,2020</h2>
                  <p className="font-semibold">
                    "This event exceeded all expectations. Kudos to the
                    organizers for a job well done!"
                  </p>
                  <div className="card-actions justify-end">
                    <button className="block px-4 py-2 text-slate-600 rounded-lg font-bold bg-yellow-400">
                      --Sazzad
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="card  bg-sky-100 shadow-xl"
                data-aos="zoom-in-down"
              >
                <div className="card-body text-slate-600">
                  <h2 className="card-title font-bold">13 Sep,2021</h2>
                  <p className="font-semibold">
                    "I had such a fantastic time at your event. It was well
                    worth attending!"
                  </p>
                  <div className="card-actions justify-end">
                    <button className="block px-4 py-2 text-slate-600 rounded-lg font-bold bg-sky-400">
                      --Shova
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonials;
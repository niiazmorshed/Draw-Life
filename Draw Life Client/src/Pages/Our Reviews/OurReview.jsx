import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import review from "../../Animation - 1714467221537.json";
import { IoStarSharp } from "react-icons/io5";

const OurReview = () => {
  return (
    <div className="md: flex flex-col justify-center items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error|Draw Life</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="md: w-[500px] ">
        <Lottie animationData={review} loop={true}></Lottie>
      </div>
      {/* Card --- */}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="md: grid md:grid-cols-3 md: gap-4 mt-20 sm: grid-cols-1"
      >
        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure className=" rounded-full ">
            <img src="https://i.ibb.co/g73gf45/cillian-murphy-thomas-shelby-hd-peaky-blinders-3-1920x1080.jpg" />
          </figure>
          <div className="card-body">
            <h1 className="text-center text-xl font-bold">Thomas Shelby</h1>
            <div className="flex justify-center items-center">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <div>
              <p>
                I am Thomas Shelby <br />
                As someone just starting their journey in the art world, I've
                found this website to be an invaluable resource for both
                inspiration and supplies. Not only does it showcase a diverse
                range of talented artists, but it also offers a fantastic
                selection of paints, brushes, and other materials at competitive
                prices. I particularly appreciate the blog section, which is
                filled with helpful tips and tutorials that have improved my
                technique and confidence as a painter. Whether you're a seasoned
                artist or a beginner like me, this website is a treasure trove
                of creativity and expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className=" rounded-full ">
            <img src="https://i.ibb.co/N64tgkY/HD-wallpaper-robert-pattinson-batman-3d-model.jpg" />
          </figure>
          <div className="card-body">
            <h1 className="text-center text-xl font-bold">Bruce Wayne</h1>
            <div className="flex justify-center items-center">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <div>
              <p>
                I am Bruce Wayne <br />
                As an interior designer, I'm always on the lookout for
                high-quality art that adds personality and depth to my clients'
                spaces. This website has become my go-to resource for sourcing
                unique paintings that suit a range of aesthetics. The curated
                collections make it easy to find pieces that align with my
                clients' tastes, whether they prefer minimalist modernism or
                vibrant expressionism. The ability to customize framing options
                is a fantastic bonus, allowing me to tailor each piece to fit
                seamlessly into the overall design scheme. Plus, the customer
                service team is incredibly helpful and responsive, ensuring a
                seamless experience from selection to delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className=" rounded-full ">
            <img src="https://i.ibb.co/Tctf32h/images.jpg" />
          </figure>
          <div className="card-body">
            <h1 className="text-center text-xl font-bold">Tony Stark</h1>
            <div className="flex justify-center items-center">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <div>
              <p>
                I am Tony Stark <br />
                I stumbled upon this website while searching for unique art
                pieces to decorate my home, and I'm thrilled with the quality
                and variety of paintings available here. The user-friendly
                interface made it easy to browse through different categories
                and styles, and I found the perfect abstract piece to complement
                my living room decor. The purchasing process was smooth, and my
                painting arrived promptly and well-packaged. I'll definitely be
                returning to explore more artwork for other rooms in my house!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurReview;

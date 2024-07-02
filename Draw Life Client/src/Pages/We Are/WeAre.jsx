import { Helmet } from "react-helmet";

const WeAre = () => {
  return (
    <div className="mt-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>We|Draw Life</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className=" grid p-2 md:grid-cols-3">
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className=" card w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              style={{ height: "400px", width: "400px" }}
              src={"https://i.ibb.co/4PffJnR/photo-2023-02-28-19-26-32-2.jpg"}
            />
          </figure>
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Niaz Morshed</h1>
            <p className="text-base font-semibold text-start">
              As the CEO of our esteemed establishment, I am thrilled to extend
              a warm and heartfelt greeting to each and every guest who graces
              our website. Thank you for considering Draw Life for your Choice.<br /> Warm regards,
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="card w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              style={{ height: "400px", width: "700px" }}
              src={"https://i.ibb.co/gTVYYfW/TCDBECA-IZ056.webp"}
            />
          </figure>
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Lalo Salamanca</h1>
            <h1 className=" text-center  text-lg font-bold">Operator</h1>
            <p className="text-base font-semibold text-start">
              I would like to know your opinion so <br />
              Tell Me Again!!!{" "}
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className=" card w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              style={{ height: "400px", width: "500px" }}
              src={"https://i.ibb.co/HBdy1xd/Pollos2.webp"}
            />
          </figure>
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Gustavo Fring</h1>
            <h1 className=" text-center  text-lg font-bold">Manager</h1>
            <p className="text-base font-semibold text-start">
              My name is Gustavo but you may call me Gus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAre;

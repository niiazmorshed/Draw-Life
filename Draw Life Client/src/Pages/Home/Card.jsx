import { Helmet } from "react-helmet";
import { BsStopwatch } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  const info = data.find((i) => i._id === id);
  console.log(info);
  return (
    <div className="md:grid md: grid-cols-4 gap-6 sm: p-4 min-h-screen mt-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{info.itemName}|Draw life</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="col-span-2">
        <img className=" h-[800px] w-[600px] " src={info.image} alt="" />
      </div>
      <div className="col-span-2">
        <h1 className="text-3xl font-semibold">{info.itemName}</h1>
        <p className="text-text-base font-semibold text-lg pb-2">
          {info.subcategory}
        </p>
        <p className="text-xl font-bold">Added By - {info.name}</p>
        <br />
        <p className="font-semibold">{info.description}</p>
        <br />
        <hr className="border-dashed" />
        <br />
        <p className="text-lg font-semibold">
          Customization- {info.customization}
        </p>
        <p className="text-lg font-semibold">
          Current Status-{" "}
          <span className="text-lg font-bold text-green-600">
            {info.stockStatus}
          </span>{" "}
        </p>
        <div className="flex items-center justify-between w-[35%]">
          <p className="text-lg font-semibold">
            Price-
            <span className="text-yellow-700 font-extrabold text-xl">
              {info.price}
            </span>
            /$
          </p>

          <div className="flex items-center gap-2 align-middle">
            <FaRegStar className="text-xl"></FaRegStar>
            <p className="font-bold">{info.rating}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <p className="text-lg font-semibold">Processing Time-</p>
          <BsStopwatch className="text-xl"></BsStopwatch>
          <p>{info.time}</p>
        </div>
        <br />

        <div className="flex justify-start">
          <button className=" bg-green-600 text-white btn   md:btn-md lg:btn-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

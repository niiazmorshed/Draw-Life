import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { BsStopwatch } from "react-icons/bs";
const PaintCard = ({ paint }) => {
  const {
    _id,
    itemName,
    subcategory,
    price,
    rating,
    customization,
    stockStatus,
    image,
    time,
  } = paint;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="sm: p-4 sm: m-4 card bg-base-100 shadow-lg shadow-green-700/50"
    >
      <figure className=" max-h-72  min-w-72">
        <img src={image} />
      </figure>
      <div>
        <div className="pl-4 my-4  max-h-30 ">
          <h2 className="text-3xl font-semibold">{itemName}</h2>
          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2">
              <IoSettingsSharp />
              <h1>{customization}</h1>
            </div>
            <p className="text-green-600 font-medium ">{stockStatus}</p>
            <div className="flex items-center gap-2 font-semibold">
              <BsStopwatch className="text-xl"></BsStopwatch>
              <p>{time}</p>
            </div>
          </div>
        </div>
        <div className="flex p-4 justify-between ">
          <div className="text-xl font-normal">
            <p> {subcategory}</p>
          </div>
          <div className="flex items-center gap-2 align-middle">
            <FaRegStar className="text-xl"></FaRegStar>
            <p className="font-bold">{rating}</p>
          </div>
        </div>
        <hr className="border-dashed" />
      </div>
      <div className="flex items-center justify-between p-4">
        <p>
          <span className="text-yellow-700 font-extrabold text-xl">
            {price}
          </span>
          /$
        </p>
        <NavLink to={`/card/${_id}`}>
          <button className="btn btn-outline btn-accent">View Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default PaintCard;

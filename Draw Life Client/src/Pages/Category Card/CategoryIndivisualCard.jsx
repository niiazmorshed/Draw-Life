import { NavLink } from "react-router-dom";

const CategoryIndivisualCard = ({ info }) => {
  const {image, description,subcategory} = info;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className=" max-h-72  min-w-72">
        <img src={image} />
      </figure>
      <div className="card-body">
        <div className="min-h-[80%]">
        <h2 className="text-xl font-semibold">{subcategory}</h2>
        <h1>{description}</h1>
        </div>
        <div className="flex justify-center  mt-2">
          <NavLink to={`/whole/${subcategory}`}><button className="btn btn-active btn-accent">View Details</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryIndivisualCard;

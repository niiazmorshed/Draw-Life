import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtListCard = ({ art, paints, setPaints }) => {
  const {
    _id,
    itemName,
    subcategory,
    price,
    rating,
    customization,
    stockStatus,
    image,
    description,
  } = art;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignmint-10-server.vercel.app/paints/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Paint has been deleted.", "success");
              const remaining = paints.filter((i) => i._id !== _id);
              setPaints(remaining);
            }
          });
      }
    });
  };
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="card card-side md: grid md:grid-cols-2 sm:grid-cols-1 bg-base-100 shadow-xl"
    >
      <figure className="md: max-h-72  md: min-w-72">
        <img src={image}  />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <h2>{subcategory}</h2>
        <div className="md:flex md:justify-between">
          <p>{price}</p>
          <p>{rating}</p>
        </div>
        <h2>{stockStatus}</h2>
        <h2>Customization Status - {customization} </h2>
        <div className="md: flex justify-between mt-4 ">
          <NavLink to={`/updatepaint/${_id}`}>
            <button className="btn btn-active btn-accent">Update</button>
          </NavLink>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>

      <div className="md:col-span-2 sm:col-span-1 p-4">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MyArtListCard;
import { Helmet } from "react-helmet";
import { NavLink, useLoaderData } from "react-router-dom";

const AllArts = () => {
  const loadedData = useLoaderData();

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Arts|Draw Life</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <table className="table md:table-lg">
        <thead>
          <tr>
            <th></th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Item Name</th>
            <th>Subcategory Name</th>
            <th>Price</th>
            <th>Check Details</th>
          </tr>
        </thead>
        <tbody>
          {loadedData.map((i) => (
            <tr key={i._id}>
              <th></th>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.itemName}</td>
              <td>{i.subcategory}</td>
              <td>{i.price}</td>
              <NavLink to={`/card/${i._id}`}>
                <td>
                  <button className="btn btn-outline btn-accent">
                    View Details
                  </button>
                </td>
              </NavLink>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllArts;

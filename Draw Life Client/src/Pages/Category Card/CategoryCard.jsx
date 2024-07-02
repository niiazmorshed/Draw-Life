import { useEffect, useState } from "react";
import CategoryIndivisualCard from "./CategoryIndivisualCard";

const CategoryCard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://assignmint-10-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-6xl text-center font-bold">All Arts group</h1>
    <div className="md:grid md:grid-cols-3 mt-20 sm:grid-cols-1" >
    {
        user.map((i)=> <CategoryIndivisualCard key={i._id} info={i} ></CategoryIndivisualCard>)
      }
    </div>
    </div>
  );
};

export default CategoryCard;

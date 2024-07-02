import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import MyArtListCard from "./MyArtListCard";

const MyArtList = () => {
  const personalData = useLoaderData();
  const [paints, setPaints] = useState(personalData);
  const [file,setFile]= useState([])
  const {name} = file;
  console.log(name)
  


  useEffect(()=>{
    fetch('https://assignmint-10-server.vercel.app')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setFile(data)
    })
  },[])


  const handleYes = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Art|Draw Life</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex justify-center items-center mt-6">
        <details className="dropdown">
          <summary className="btn text-lg">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={handleYes}>Yes</a>
            </li>
            <li>
              <a>No</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="md:grid md: grid-cols-2 md:gap-10 md: mt-24">
        {paints.map((i) => (
          <MyArtListCard
            key={i._id}
            art={i}
            paints={paints}
            setPaints={setPaints}
          >
            {" "}
          </MyArtListCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtList;

import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import PaintCard from "./PaintCard";
import "animate.css";
import { Helmet } from "react-helmet";
import CategoryCard from "../Category Card/CategoryCard";


const Home = () => {
  const paints = useLoaderData();


  return (
    <div className="mt-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home|Draw Life</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <div className="text-center mt-12 mb-12 sm :p-4">
        <h1 className="text-4xl font-semibold">Our Arts</h1>
        <p className="text-2xl font-normal pt-4">
          Dive into Our Paints Today! <br /> Explore a World Class Experience
          from our Arts
        </p>
        <div className="md:grid md:grid-cols-3 gap-6 mt-20">
          {paints.map((i) => (
            <PaintCard key={i._id} paint={i}></PaintCard>
          ))}
        </div>
      </div>
      <CategoryCard></CategoryCard>
    </div>
  );
};

export default Home;

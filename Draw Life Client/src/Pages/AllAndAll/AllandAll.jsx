import { useLoaderData } from "react-router-dom";


const AllandAll = () => {
    const info = useLoaderData();
    console.log(info)


    return (
        <div>
            <h1>Asche</h1>
        </div>
    );
};

export default AllandAll;
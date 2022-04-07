import React, { useState, useEffect } from "react";
import sanityClient from "../client";

const Categories = () => {
    const [categories, setCategories] = useState(null);

    function handleData(data) {
        data = data.map((key) => <div key={key.title}>{`${key.title} ${key.description}`}</div>)
        setCategories(data)
    }

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "category"]{title,description,}`
            )
            .then((data) => handleData(data))
            .catch(console.error)
    }, []);

    return (
        <div className="">
            <div>{categories}</div>
        </div>
    );
};

export default Categories;
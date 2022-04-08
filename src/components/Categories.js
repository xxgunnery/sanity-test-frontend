import React, { useState, useEffect } from "react";
import sanityClient from "../client";

const Categories = () => {
    const [categories, setCategories] = useState(null);

    function handleData(data) {
        data = data.map(
            (key) => <div className="category" key={key.title}>
                        <div className="categoryTitle">
                            {`${key.title}`}
                        </div>
                        <div className="categoryDescription">
                            {`${key.description}`}
                        </div>
                    </div>
        )
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
        <div className="categories">
            {categories}
        </div>
    );
};

export default Categories;
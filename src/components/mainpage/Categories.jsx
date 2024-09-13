import React from "react";

const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/dress.png",
            cateName: "Fashion" 
        },
        {
            cateImg: "./images/category/responsive.png",
            cateName: "Electronic", 
        },
        {
            cateImg: "./images/category/electric-car.png",
            cateName: "Cars",
        },
        {
            cateImg: "./images/category/home.png",
            cateName: "Home & Garden", 
        },
        {
            cateImg: "./images/category/gift.png",
            cateName: "Gifts",
        },
        {
            cateImg: "./images/category/musical-note.png",
            cateName: "Music", 
        },
        {
            cateImg: "./images/category/healthcare.png",
            cateName: "Health & Beauty", 
        },
        {
            cateImg: "./images/category/pet.png",
            cateName: "Pets", 
        },
        {
            cateImg: "./images/category/toys.png",
            cateName: "Baby Toys", 
        },
        {
            cateImg: "./images/category/grocery-cart.png",
            cateName: "Groceries", 
        },
        {
            cateImg: "./images/category/open-book.png",
            cateName: "Books",
        },
    ]
    return(
        <>
            <div className="category">
                {data.map((value, index) => {
                    return(
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt="" />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
};


export default Categories;
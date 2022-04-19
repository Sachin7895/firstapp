import React, { useState } from 'react';
import "./Style.css";
import Menu from "./menuApi.js";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

//Spread Operator :- ...
const uniqueList = [...new Set(Menu.map((curlElem) => {
    return curlElem.category;
}
)
),
    "All"
];

console.log(uniqueList);
const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return
        }
        const updatedList = Menu.filter((curlElem) => {
            return curlElem.category === category;
        });

        setMenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};
export default Resturant;



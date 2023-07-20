import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from './MenuCard'
import Navbar from './Navbar'
import { motion } from "framer-motion"


const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];
console.log(uniqueList);

export const Resturent = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList] = useState(uniqueList);

    const filterItem = (category) => {

        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
            <motion.h1 className="title">Welcome to MukhoRuchi Canteen🍗🥂</motion.h1>

            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default React

// initial={{ opacity: 0, x: "50%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2 }}
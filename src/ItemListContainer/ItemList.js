import React, { useState } from "react"
import Item from "./Item"

const ItemList = () => {
  const [itemList, setItem] = useState([
    {
        id: 1,
        name: "Samsung S21 FE 5G",
        price: "$95.000",
        role: "Smartphone",
        img: "https://img.global.news.samsung.com/latin/wp-content/uploads/2022/04/Galaxy-S21-FE-5G-2.jpg",
    },
    {
        id: 2,
        name: "HP 240 G7",
        price: "$80.000",
        role: "Notebook",
        img: "https://http2.mlstatic.com/D_NQ_NP_954041-MLA46302470460_062021-O.webp",
    },
    {
        id: 3,
        name: "Lenovo Tab P11",
        price: "$75.000",
        role: "Tablet",
        img: "https://www.lenovo.com/medias/lenovo-tablet-tab-p11-gallery-1b.png?context=bWFzdGVyfHJvb3R8MjIwNjAxfGltYWdlL3BuZ3xoMjUvaDA5LzExMjk5MTk0OTI5MTgyLnBuZ3xhNzNmNGMzODE4NjljYjk1YjIzZDlhMTM4NzE0YjM4MGFkYzAxMzZkZTk3YzdmMjA1YjljMjNjMGFmMGFlNmQ3",
    },
  ])

  return (
    <div className="row">
      {itemList.map((item) => {
        return (
          <Item
            key = {item.id}
            name = {item.name}
            price = {item.price}
            role = {item.role}
            img = {item.img}
          />
        )
      })}
    </div>
  )
}

export default ItemList
import React from "react";

export default function DisplayImage ({image}) {

    if (!image) {
        return <p>Изображение отсутствует</p>
    }

    return (
        <div>
            <p>Подходящая картинка: </p>
            <img src={image} width={"200px"} height={"100%"} alt="Картинка"/>
        </div>
    )
}

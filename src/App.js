import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import DisplayImage from "./DisplayImage";
import InputComponent from "./InputComponent";
import ImageSelector from "./ImageSelector";


function App() {
    const [info, setInfo] = useState('');
    const [image, setImage] = useState('');

    function getNewValue(newValue) {
        setInfo(newValue);
    }

    function getNewImage(newImg) {
        setImage(newImg);

    }

    return (
        <div className={"wrapper"}>
            <InputComponent onHandler={getNewValue}></InputComponent>
            <ImageSelector info={info} onHandlerImg={getNewImage}></ImageSelector>
            <DisplayImage image={image}></DisplayImage>
        </div>
    );
}

export default App;

//Домашнее задание по React: "От выбора к отображению изображения"
//
// Описание:
// В этом задании вы создадите небольшое React-приложение, состоящее из трёх отдельных компонентов (файлов), которые взаимодействуют друг с другом. Цель: от ввода информации пользователем получить соответствующую картинку и отобразить её на экране.
//
// Файлы и их функции:
//
// 1. InputComponent.jsx
// - Этот компонент отвечает за получение информации от пользователя.
// - Например, пользователь вводит ключевое слово или выбирает опцию из выпадающего списка.
// - Состояние должно храниться в useState и передаваться дальше через props.

// 2. ImageSelector.jsx
// - Этот компонент получает данные из InputComponent и выбирает соответствующее изображение.
// - Можно создать объект или массив, где ключ — это слово, а значение — URL картинки.
// - Передаёт выбранное изображение компоненту DisplayImage.

// 3. DisplayImage.jsx
// - Этот компонент получает выбранную картинку через props и отображает её.
// - Если изображения нет, можно показать текст "Изображение не найдено".

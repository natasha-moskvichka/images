import React, {useState, useEffect} from "react";

const wordsWithImages = [
    {
        word: "кот",
        image: "https://www.ptichka.ru/data/cache/2019jul/17/30/97110_50709.jpg"
    },
    {
        word: "собака",
        image: "https://cs15.pikabu.ru/post_img/big/2025/02/03/6/1738570100152867542.png"
    },
    {
        word: "птица",
        image: "https://9b6bfb45-2bd9-42bf-ad07-e1af1c458da3.selstorage.ru/main/d/d7fa231cac3026b44e583002fabe8b92.jpg"
    },
    {
        word: "лошадь",
        image: "https://happy-horses.ru/wp-content/uploads/2012/06/velikolepnye-loshadi.jpg"
    },
    {
        word: "рыба",
        image: "https://scientificrussia.ru/images/w/39tw-full.jpg"
    }
];

export default function ImageSelector({info, onHandlerImg}) {
    const [wordsInput, setWordsInput] = useState(info || '');
    const [animal, setAnimal] = useState({
        wordProp: '',
        imageProp: ''
    });

    useEffect(() => {
        setWordsInput(info);
    }, [info])

    useEffect(() => {
        const founderValue = wordsWithImages.find((elem) => elem.word.toLowerCase() === wordsInput.toLowerCase());

        if (founderValue) {
            console.log(founderValue)
            setAnimal({wordProp: founderValue.word, imageProp: founderValue.image});
            if (onHandlerImg) {
                onHandlerImg(founderValue.image);

            }
        }

    }, [wordsInput])


    return (
        <div>
           {/* <p>Это слово из инпут: {info}</p>*/}
            <div>
                <p>Животное: {wordsInput}</p>

            </div>
        </div>
    )
}

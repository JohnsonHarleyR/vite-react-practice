import { useState } from "react"

const Language = ({}) => {

    const [index, setIndex] = useState(0);

    const options = [
        {
            word: "Hello",
            lang: "English"
        },
        {
            word: "Hola",
            lang: "Spanish"
        },
        {
            word: "Bonjour",
            lang: "French"
        },
        {
            word: "Hallo",
            lang: "German"
        },
        {
            word: "Ciao",
            lang: "Italian"
        },
        {
            word: "こんにちは (Konnichiwa)",
            lang: "Japanese"
        },
        {
            word: "你好 (Nǐ hǎo)",
            lang: "Chinese (Mandarin)"
        },
        {
            word: "Здравствуйте (Zdravstvuyte)",
            lang: "Russian"
        },
        {
            word: "مرحبا (Marhaban)",
            lang: "Arabic"
        },
        {
            word: "Olá",
            lang: "Portuguese"
        }
    ];

    const changeLanguage = () => {
        let newIndex = index == options.length - 1 ? 0 : index + 1;
        setIndex(newIndex);
    }

    // If you spread the object like this, you don't have to do "chosen.word", it can just be "word"
    const {word, lang} = options[index];

    return (
        <div className="lang-div" onClick={changeLanguage}>
            <h3 className="lang-h3">{word}</h3>
            <h4 className="lang-h4">{lang}</h4>
        </div>
    )
}

export default Language;
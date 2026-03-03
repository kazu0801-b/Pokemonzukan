export const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
};

export const getPokemon = (url) => {
    return new Promise((resolve,reject) =>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(date);
            resolve(data);
        });
    });
};

// ポケモンの名前を翻訳する関数
export const translatePokemonName = async (name, sourceLang = "en", targetLang = "ja") => {
    const response = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            q: name, // 翻訳するテキスト
            source: sourceLang, // 元の言語
            target: targetLang, // 翻訳先の言語
            format: "text"
        })
    });

    if (!response.ok) {
        throw new Error("Failed to translate the name");
    }

    const data = await response.json();
    return data.translatedText; // 翻訳されたテキストを返す
};
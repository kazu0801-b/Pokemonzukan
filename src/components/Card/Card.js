import React from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
    return (
        <div className="card">
            <div className="cardImg">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <h3 className="cardName">
                {pokemon.translatedName || pokemon.name} {/* 翻訳された名前を優先表示 */}
            </h3>
            <div className="cardTypes">
                <div>タイプ</div>
                {pokemon.types.map((type) => {
                    return (
                        <div key={type.type.name}>
                            <span className="typeName">{type.type.name}</span>
                        </div>
                    );
                })}
            </div>
            <div className="cardInfo">
                <div className="cardData">
                    <p className="title">重さ : {pokemon.weight}</p>
                </div>
                <div className="cardData">
                    <p className="title">高さ : {pokemon.height}</p>
                </div>
                <div className="cardData">
                    <p className="title">アビリティ : {pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
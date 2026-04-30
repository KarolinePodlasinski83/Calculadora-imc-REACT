import { useState } from "react";

function Resultado({ resultado, dados }) {
    if (!resultado) return null;

    return (
        <div>
        <h2>Resultado</h2>
        <p>Nome: {dados.nome}</p>
        <p>Idade: {dados.idade}</p>
        <p>Peso: {dados.peso}</p>
        <p>IMC: {resultado.imc}</p>
        <p>{resultado.classificacao}</p>
        <p>{resultado.recomendacao}</p>
        </div>
    );
    }

export default Resultado;
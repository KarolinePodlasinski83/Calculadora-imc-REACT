import { useState } from "react";

function TabelaIMC() {
    return (
        <div>
        <h2>Tabela IMC</h2>
        <table border="1">
            <tr><td>&lt; 18.5</td><td>Abaixo do peso</td></tr>
            <tr><td>18.5 - 24.9</td><td>Normal</td></tr>
            <tr><td>25 - 29.9</td><td>Sobrepeso</td></tr>
            <tr><td>30+</td><td>Obesidade</td></tr>
        </table>
        </div>
    );
}

export default TabelaIMC;
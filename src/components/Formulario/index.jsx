import { useState } from "react";

function Formulario({ dados, setDados, calcularIMC }) {
    return (
        <div>
        <h2>Dados</h2>

        <input
            placeholder="Nome"
            value={dados.nome}
            onChange={(e) =>
            setDados({ ...dados, nome: e.target.value })
            }
        />

        <input
            placeholder="Idade"
            value={dados.idade}
            onChange={(e) =>
            setDados({ ...dados, idade: e.target.value })
            }
        />

        <input
            placeholder="Altura"
            value={dados.altura}
            onChange={(e) =>
            setDados({ ...dados, altura: e.target.value })
            }
        />

        <input
            placeholder="Peso"
            value={dados.peso}
            onChange={(e) =>
            setDados({ ...dados, peso: e.target.value })
            }
        />

        <button onClick={calcularIMC}>Calcular</button>
        </div>
    );
}

export default Formulario;
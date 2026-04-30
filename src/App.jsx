import { useState } from "react";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import TabelaIMC from "./components/TabelaIMC";
import pessoa from "./assets/pessoa.jpeg";
import "./global.css";

function App() {
  const [dados, setDados] = useState({
    nome: "",
    idade: "",
    altura: "",
    peso: ""
  });

  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const altura = parseFloat(dados.altura.replace(",", "."));
    const peso = parseFloat(dados.peso.replace(",","."));

    if (!altura || !peso) return;

    const imc = peso / (altura * altura);

    let classificacao = "";
    let recomendacao = "";
    let cor = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
      recomendacao = "Melhore a alimentação.";
      cor = "blue";
    } else if (imc < 25) {
      classificacao = "Normal";
      recomendacao = "Continue saudável!";
      cor = "green";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
      recomendacao = "Pratique exercícios.";
      cor = "orange";
    } else {
      classificacao = "Obesidade";
      recomendacao = "Procure ajuda médica.";
      cor = "red";
    }

    setResultado({
      imc: imc.toFixed(2),
      classificacao,
      recomendacao,
      cor
    });
  };

  return (
    <div className="container">
      <h1>Calculadora IMC</h1>

      {/* TOPO */}
      <div className="topo">
        {/* ✅ CORRIGIDO AQUI */}
        <img src={pessoa} alt="Pessoa" className="imagem" />

        <div className="tabela">
          <TabelaIMC />
        </div>
      </div>

      {/* FORM */}
      <Formulario
        dados={dados}
        setDados={setDados}
        calcularIMC={calcularIMC}
      />

      {/* RESULTADO */}
      <Resultado resultado={resultado} dados={dados} />
    </div>
  );
}

export default App;
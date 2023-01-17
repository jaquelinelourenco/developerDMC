import React from 'react';
import './style.css';

const Home = () => {

    function cadTable (txtPeras, txtMacas, txtMelhorAluno) {
        const tb = document.getElementById("tb-table");
        const qtdtLinhas = tb.rows.length;
        const linha =tb.insertRow(qtdtLinhas);
        
        const cellDia = linha.insertCell(0);
        const cellPeras = linha.insertCell(1);
        const cellMacas = linha.insertCell(2);
        const cellMelhorAluno = linha.insertCell(3);
    
    
        cellDia.innerHTML = qtdtLinhas;
        cellPeras.innerHTML = txtPeras;
        cellMacas.innerHTML = txtMacas;
        cellMelhorAluno.innerHTML = txtMelhorAluno;
        
    }
  return (
    <div id="container">
        <h2 className="titulo">João e Maria</h2>
        <form className='form' name="frutas">
            <label>Peras</label>
            <input name="txtPeras" type = "number" maxlength = {5} /><br/><br/>
            <label>Maçãs</label>
            <input type="number" name="txtMacas" /><br/><br/>
            <label>Melhor Aluno</label>
            <input type="text" name="txtMelhorAluno" /><br/><br/>
            <input type="reset" value="Adiciona" onclick={() => cadTable()}/>
        </form>
        <br/><br/>
        <div className="table">
            <table className="tb-table">
                <thead>
                    <tr>
                        <td>Dia</td>
                        <td>Peras</td>
                        <td>Maçãs</td>
                        <td>Melhor Aluno</td>
                        <td>Fruta 1</td>
                        <td>Fruta 2</td>
                        <td>Fruta 3</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  );
}

export default Home;

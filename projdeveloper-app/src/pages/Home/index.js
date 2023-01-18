import React from 'react';
import './style.css';
import Logo from '../../assets/logo-dmc.webp';

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
        cellPeras.innerHTML = txtPeras.name;
        cellMacas.innerHTML = txtMacas.name;
        cellMelhorAluno.innerHTML = txtMelhorAluno.name;
        
    }
  return (
    <div id="container">
        <div className='menu-logo'>
            <img src={Logo} />
            <h2 className="titulo">João e Maria</h2>
            <button className="button-sair">Sign Out</button>
        </div>
        <div className='main'>
            <div className="sub-main">
                <form className='form' name="frutas">
                    <label>Peras</label>
                    <input className='input' name="txtPeras" type="text"  maxlength = {5} />
                    <label>Maçãs</label>
                    <input className='input' type="text"  name="txtMacas" />
                    <label>Melhor Aluno</label>
                    <input className='input' type="text" name="txtMelhorAluno" />
                    <input className='button' type="reset" value="Adiciona" onclick={() => cadTable()}/>
                </form>
            </div>
        </div>
        <div className="table">
            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">Dia</th>
                        <th scope="col">Peras</th>
                        <th scope="col">Maçãs</th>
                        <th scope="col">Melhor Aluno</th>
                        <th scope="col">Fruta 1</th>
                        <th scope="col">Fruta 2</th>
                        <th scope="col">Fruta 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>3</td>
                        <td>1</td>
                        <td>Maria</td>
                        <td>Pera</td>
                        <td>Pera</td>
                        <td>Pera</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>2</td>
                        <td>1</td>
                        <td>João</td>
                        <td>Maçã</td>
                        <td>Pera</td>
                        <td>Pera</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>1</td>
                        <td>4</td>
                        <td>Maria</td>
                        <td>Pera</td>
                        <td>Maçã</td>
                        <td>Maçã</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default Home;

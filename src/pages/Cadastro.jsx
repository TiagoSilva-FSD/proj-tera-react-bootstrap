import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import AppFooter from '../organisms/AppFooter';
import AppHeader from '../organisms/AppHeader';


export default function Cadastro() {

    const endereco = [];

    return (
        <div>
            <AppHeader />
            <div className='container mt-5 border p-3'>
                <h3>Digite seus dados para realizar o cadastro</h3><br />
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite nome" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite email" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="pswd">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite senha" required />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="logradouro">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control placeholder="Logradouro" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="bairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control placeholder="Bairro" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="localidade" >
                            <Form.Label>localidade</Form.Label>
                            <Form.Control placeholder="localidade" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="cep">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control placeholder="Digite CEP" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="uf">
                            <Form.Label>UF</Form.Label>
                            <Form.Control placeholder="UF" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGrcontrolIdCheckbox">
                        <Form.Check type="checkbox" label="React" />
                    </Form.Group>
                    <Button className='btncentro mb-2' variant="success" onClick={() => {
                        const options = {
                            method: 'GET',
                            mode: 'cors',
                            cache: 'default'
                        }
                        let cep = document.getElementById("cep");
                        fetch(`https://viacep.com.br/ws/${cep.value}/json/`, options)
                            .then(response => {
                                response.json()
                                    .then(data => {
                                        endereco.push(data);
                                        for (let x in data) {
                                            if (document.querySelector("#" + x)) {
                                                document.querySelector("#" + x).value = data[x];
                                            }
                                        }
                                    })
                            })
                            .catch(e => {
                                alert("ERRO: " + e);
                            })
                    }}>Validar CEP</Button>

                    <Button className='btncentro' variant="primary" type="submit" onClick={(e) => {
                        e.preventDefault();
                        let url = "http://127.0.0.1:5000/creat";
                        let nome = document.getElementById("nome").value;
                        let email = document.getElementById("email").value;
                        let senha = document.getElementById("pswd").value;

                        const body = {
                            "_id": null,
                            "name": nome,
                            "email": email,
                            "password": senha,
                            "address": endereco
                        }

                        let req = new XMLHttpRequest();
                        req.open("POST", url, true);
                        req.setRequestHeader("Access-Control-Allow-Origin", "*");
                        req.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                        req.send(JSON.stringify(body));

                        req.onload = function () {
                            const objJs = JSON.parse(this.responseText);
                            let texto = "";
                            for (let chave in objJs) {
                                texto += "\n" + chave.toUpperCase() + ":  " + objJs[chave];
                            }
                            alert(this.statusText + texto);
                            window.location.href = "http://localhost:3000/";
                        }
                    }}>
                        Submit
                    </Button>
                </Form>
            </div>
            <AppFooter />
        </div>
    )
}

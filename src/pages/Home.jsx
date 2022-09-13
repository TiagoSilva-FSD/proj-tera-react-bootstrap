import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import AppFooter from '../organisms/AppFooter';
import AppHeader from '../organisms/AppHeader';


export default function Home() {
    return (
        <div>
            <AppHeader />
            <div className='container mt-5 border p-3 cont_login'>
                <Form>
                    <h2>Realizar login</h2>
                    <Form.Group className="mb-3" controlId="email_login">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="pswd_login">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite senha" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Lembrar" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => {
                        e.preventDefault();
                        let url = "http://127.0.0.1:5000/login";
                        let email = document.getElementById("email_login").value;
                        let senha = document.getElementById("pswd_login").value;

                        const body = {
                            "email": email,
                            "password": senha
                        }

                        let req = new XMLHttpRequest();
                        req.open("POST", url, true);
                        req.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                        req.send(JSON.stringify(body));

                        req.onload = function () {
                            if (this.responseText !== null && this.status === 200) {
                                alert("Login com sucesso!");
                                sessionStorage.setItem("token", this.responseText);
                                window.location.href = "http://localhost:3000/ambiente";
                            } else {
                                alert("Usuário ou senha inválidos");
                            }
                        }
                    }}>
                        Submit
                    </Button>
                </Form>
                <br />
                <a href='http://localhost:3000/cadastro'>Realizar cadastro</a>
            </div>
            <div className='container mt-3'>
                <h1 className='centro'>Plataforma Educacional</h1><br />
                <h2 className='centro'>Aprenda Fácil</h2>
                <Alert variant="primary">
                    <Alert.Heading>Frontend</Alert.Heading>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore possimus consequatur cum. Nihil, repudiandae ex. Repudiandae assumenda,
                        inventore corrupti ab, mollitia delectus a hic temporibus ipsam error obcaecati, nam ullam.
                    </p>
                    <hr />
                    <p className="mb-0">
                        HTML, CSS, JavaScript
                    </p>
                </Alert>
                <Alert variant="primary">
                    <Alert.Heading>Backend</Alert.Heading>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim nostrum quia cum nisi quam esse. Fugiat sapiente ullam eos.
                        Excepturi itaque dolorum pariatur tempore culpa fugit obcaecati, adipisci repellat iure.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Python, PHP
                    </p>
                </Alert>
            </div>
            <div className='mt-3'>
                <Button className="btncentro" variant="primary" onClick={() => {
                    let url = "http://127.0.0.1:5000/";
                    const http = new XMLHttpRequest();
                    http.onload = function () {
                        const objJs = JSON.parse(this.responseText);
                        let texto = "";
                        for (let chave in objJs) {
                            texto += "<br>" + chave + ": " + objJs[chave];
                        }
                        document.getElementById("metodo_get").innerHTML = texto;
                    }
                    http.open("GET", url, true);
                    http.send();
                }}>Info</Button>
                <p className='centro' id='metodo_get'></p>
            </div>
            <AppFooter />
        </div>
    )
}

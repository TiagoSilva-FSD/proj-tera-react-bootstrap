import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import login from '../images/login.png'
import AppFooter from '../organisms/AppFooter';
import AppHeader from '../organisms/AppHeader';


export default function Perfil() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const opt = {
            method: 'POST',
            mode: 'cors',
            cache: 'default'
        }
        try {
            fetch("http://127.0.0.1:5000/auth", opt)
                .then(res => {
                    res.json().then(data => {
                        console.log(data["auth"])
                        console.log(sessionStorage.getItem("token"))
                        if (data["auth"] === sessionStorage.getItem("token")) {
                            alert("Bem-vindo!")
                            return true
                        } else {
                            window.location.href = "http://localhost:3000/";
                            alert("Você não tem permissão!")
                            return false
                        }
                    })
                })
        }
        catch (erro) {
            console.log(erro);
            window.location.href = "http://localhost:3000/";
            alert("Você não tem permissão!")
        }
    }, [])

    return (
        <div>
            <AppHeader />
            <div className="container border mt-3 cont_login">
                <div className='perfil'>
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={login} />
                        <Card.Body>
                            <Card.Title>Tiago Silva</Card.Title>
                            <Card.Text>
                                Clique em "Voltar" para retorna ao ambiemte de aprendizagem.
                                Clique em "Cancelar" para cancelar sua conta.
                            </Card.Text>
                            <Button href="http://localhost:3000/ambiente2" variant="primary">Voltar</Button>
                            <Button variant="danger" onClick={handleShow}>
                                Cancelar
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Realizar Cancelamento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Atenção! Processo irreversível!</Modal.Body>
                    <Form.Group className="m-3" controlId="pin_del">
                        <Form.Control type="text" placeholder="Digite pin" required />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="danger" type="submit" onClick={(e) => {
                            e.preventDefault();
                            let pin = document.getElementById("pin_del").value;
                            let url = "http://127.0.0.1:5000/user/" + pin;

                            const body = {
                                "_id": pin,
                            }


                            let req = new XMLHttpRequest();
                            req.open("DELETE", url, true);
                            req.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                            req.send(JSON.stringify(body));

                            req.onload = function () {
                                alert("A conta foi Cancelada!");
                                window.location.href = "http://localhost:3000";
                                sessionStorage.setItem("token","")
                            }
                            handleClose();
                        }}>
                            Concluir
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form>
                    <Form.Group className="mb-3" controlId="novo_nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite nome" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="novo_email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pin">
                        <Form.Label>Pin</Form.Label>
                        <Form.Control type="text" placeholder="Digite pin" required />
                    </Form.Group>
                    <Button className='btncentro' variant="warning" type="submit" onClick={(e) => {
                        e.preventDefault();
                        let novo_nome = document.getElementById("novo_nome").value;
                        let novo_email = document.getElementById("novo_email").value;
                        let pin = document.getElementById("pin").value;
                        let url = "http://127.0.0.1:5000/update/" + pin;

                        const body = {
                            "_id": pin,
                            "name": novo_nome,
                            "email": novo_email
                        }


                        let req = new XMLHttpRequest();
                        req.open("PUT", url, true);
                        req.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                        req.send(JSON.stringify(body));

                        req.onload = function () {
                            if (this.responseText === "Sucesso" && this.statusText === "OK") {
                                alert("Dados alterados e salvos!");
                            } else {
                                alert("pin inválido!");
                            }
                        }
                    }}>
                        Salvar
                    </Button>
                </Form>
            </div>
            <AppFooter />
        </div>
    )
}

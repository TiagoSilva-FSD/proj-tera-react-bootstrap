import React, { useEffect } from 'react';
import AppFooter from '../organisms/AppFooter';
import AppBody from '../organisms/AppBody';
import ButtonPerfil from '../atoms/ButtonPerfil';
import AppHeader from '../organisms/AppHeader';


export default function Ambiente() {

    const btn = ButtonPerfil();

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
            <AppHeader botao={btn} />

            <AppBody titulo="Back-end" />

            <div className="container mt-3">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="http://localhost:3000/ambiente">Anterior</a></li>
                    <li className="page-item"><a className="page-link" href="http://localhost:3000/ambiente">front-end</a></li>
                    <li className="page-item active"><a className="page-link" href="">back-end</a></li>
                    <li className="page-item disabled"><a className="page-link" href="">Próxima</a></li>
                </ul>
            </div>

            <AppFooter />
        </div>
    )
}

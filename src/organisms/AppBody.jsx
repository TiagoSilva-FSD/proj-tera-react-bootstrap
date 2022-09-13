import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function AppBody(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='container mt-5'>
            <Alert variant="success">
                <Alert.Heading>{ props.titulo }</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor laudantium facilis qui ducimus numquam illo impedit quasi perspiciatis
                    voluptatibus accusantium minima quidem quaerat, nihil ipsa dolorum aliquam molestias enim sed?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam architecto consectetur nesciunt fuga placeat eaque! Nostrum repellendus veniam adipisci,
                    dicta maiores rerum ad pariatur suscipit? Aspernatur harum rerum suscipit repellat.
                </p>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/Em0R3csNMVE"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Button className="btncentro mt-3" variant="success" onClick={handleShow}>
                    Exercício
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Exercício { props.titulo }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ex, possimus, expedita minus distinctio cumque nostrum tempore,
                            ducimus repellat veniam non modi deserunt eum libero omnis harum exercitationem officia quis.
                            Inventore?</p>
                        <Form.Select aria-label="Default select example">
                            <option>Escolha uma opção</option>
                            <option value="1">A - Ex, possimus, expedita minus</option>
                            <option value="2">B - Ex, possimus, expedita minus</option>
                            <option value="3">C - Ex, possimus, expedita minus</option>
                        </Form.Select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            Concluir
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Alert>
        </div>
    )
}

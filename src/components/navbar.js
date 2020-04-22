
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Popup from "./popup"
import { Modal, Button } from "react-bootstrap"
function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Zeeshan</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>



                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="btn btn-success btn-sm m-2" onClick={handleShow}>Add</div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"
                                href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                User </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <i className="dropdown-item">
                                    Logout
                                </i>
                            </div>
                        </li>
                    </ul>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Monitor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Popup handleClose={handleClose}></Popup></Modal.Body>
                </Modal>

            </nav>
        </div >
    );
}
export default Navbar
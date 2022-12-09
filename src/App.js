import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { SlEarphonesAlt } from 'react-icons/sl';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
    const [modalShow, setModalShow] = useState(false);

    const MyVerticallyCenteredModal = (props) => {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <>
                        <div
                            className="text-center"
                            style={{ fontSize: '18px' }}
                        >
                            <a
                                className="modal-text"
                                target="_blank"
                                href="https://www.linkedin.com/in/ng%C3%B4-v%C3%B5-xu%C3%A2n-tr%C6%B0%E1%BB%9Dng-130915231/"
                            >
                                Here my <strong>LinkedIn</strong>
                            </a>
                        </div>
                        <br />
                        <div
                            className="text-center"
                            style={{ fontSize: '18px' }}
                        >
                            <a
                                className="modal-text"
                                target="_blank"
                                href="https://www.facebook.com/xuantruong.ngovo"
                            >
                                Here my <strong>Facebook</strong>
                            </a>
                        </div>
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };

    return (
        <>
            <div className="App">
                <Header />

                <a
                    className="hotline_btn"
                    href="#!"
                    onClick={() => setModalShow(true)}
                >
                    <SlEarphonesAlt
                        style={{
                            color: 'white',
                            fontSize: '20px',
                            fontWeight: 600,
                        }}
                    />
                </a>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                {/* Render children route */}
                <Outlet />

                <Footer />
            </div>
        </>
    );
};

export default App;

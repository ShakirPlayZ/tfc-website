import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';


const ToastComponent: React.FC<{label: string, title:string, time: string, message: string}> = ({label, title, time, message}) => {
    const [show, toggleShow] = useState(true);

    return (
        <>
            {!show && <Button className="col-2" onClick={() => toggleShow(true)}>{label} anzeigen</Button>}

            <Toast show={show} onClose={() => toggleShow(false)}>
                <Toast.Header>
                    <strong className="ml-2 mr-auto">{title}</strong>
                    <small className="ml-1">{time}</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </>
    );
};

export default ToastComponent;
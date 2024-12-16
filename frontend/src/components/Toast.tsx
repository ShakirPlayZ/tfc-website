import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';


const ToastComponent: React.FC<{title:string, time: string, message: string}> = ({title, time, message}) => {
    const [show, toggleShow] = useState(true);

    return (
        <>
            {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}

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
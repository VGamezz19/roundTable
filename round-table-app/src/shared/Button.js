import React from 'react';
import { Button } from 'react-bootstrap';

function  ButtonComponent(props) {
    return (<Button className={props.className} onclick="props.action()">{props.text}</Button>)
}

export default ButtonComponent;
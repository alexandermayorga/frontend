import React from 'react'
import { Toast } from "react-bootstrap";

export default function Confirmation({toggle}) {
    return (
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong className="mr-auto">Your order is in the oven.</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>
                Your delicious pizza will be with you in 30 minutes!
            </Toast.Body>
        </Toast>
    )
}

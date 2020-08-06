import React from 'react'
import { Card, Badge, Button } from "react-bootstrap";

export default function PizzaCard({data,setOrdered}) {
    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={data.image}></Card.Img>
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                    <Badge className="mb-1" pill variant="warning">
                        ${data.price}
                    </Badge>
                </div>
                <Card.Text className="text-secondary">{data.desc}</Card.Text>
                <Button
                    onClick={() => setOrdered()}
                    className="mt-auto font-weight-bold" 
                    variant="primary" 
                    block
                >
                    Order Pizza <span role="img" aria-label="pizza">🍕</span>
                </Button>
            </Card.Body>
        </Card>
    )
}

import React from 'react'
import { Card } from 'react-bootstrap'

const DashCard = ({ value }) => {
    return (
        <>
            <Card className="text-center p-4">
                <Card.Body>
                    <Card.Title>$YLD Price</Card.Title>
                    <Card.Text>
                        <h2>${value}</h2>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default DashCard
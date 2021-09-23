import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import React from 'react'

function Projects() {
    const projectData = [
        {
            name: 'Pic-A-Flick',
            description: 'This full stack web application allows users to search for and movies.',
            img: (''),
            github: 'https://github.com/jwade4207.github.io/Pic-A-Flick/',
            deployed: ' https://pic-a-flick345567.herokuapp.com/'
        },
        {
            name: 'Easy Link',
            description: 'A website designed to connect people with locations in new cities.',
            img: (''),
            github: 'https://github.com/jwade4207.github.io/Group-project-1/',
            deployed: 'https://ryanblessing.github.io/Group-project-1/'
        },
        {
            name: 'Tech Blog',
            description: 'This is a website that allows users to post and update blogs about the tech world. It also allows them to read and interact with other users blogs on the same site',
            img: (''),
            github: 'https://github.com/jwade4207.github.io/Tech-Blog/',
            deployed: 'https://tech-blog-5587.herokuapp.com/'
        },
        {
            name: 'Budget Tracker',
            description: ' I updated an existing web app to give it offline functionality. The user can add or deduct expenses to their budget with or without being online. If the user enters transactions offline, the transaction will be updated when they connect to the internet once again.',
            img: (''),
            github: 'https://github.com/jwade4207.github.io/Budget-Tracker-PWA/',
            deployed: 'https://budget-tracker1000-pwa.herokuapp.com/'
        },
        {
            name: 'Book Search Engine',
            description: 'a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.',
            img: (''),
            github: 'https://github.com/jwade4207.github.io/Book-Store/',
            deployed: 'https://whispering-falls-78114.herokuapp.com/'
        },
        {
            name: 'One-Stop-Print-Shop',
            description: 'Full Stack MERN E-commerce store with Stripe payment',
            img: (''),
            github: 'https://jwade4207.github.io/One-Stop-Print-Shop/',
            deployed: 'https://one-stop-print-shop.herokuapp.com/'
        }
    ]
    return (
        <Container fluid>
            <Row>
                {projectData.map((projectData) => (
                    <Col>
                        <h1></h1>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={projectData.img} />
                            <Card.Body>
                                <Card.Title>{projectData.name}</Card.Title>
                                <Card.Text>
                                    {projectData.description}
                                </Card.Text>
                                <Button variant="primary" href={projectData.github} target="_blank">GitHub</Button>
                                <Button variant="primary" href={projectData.deployed} target="_blank">Deployed App</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Projects
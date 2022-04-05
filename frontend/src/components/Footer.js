import React from 'react'
import { Container, Row, Col     } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy;GreyCamp
                     <i className='fab fa-facebook'></i>
                        <i className='fab fa-twitter'></i>
                        <i className='fab fa-instagram'></i>
                    </Col>
                </Row>
               
            </Container>
        </footer>
    )
}

export default Footer

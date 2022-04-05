import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer  } from 'react-router-bootstrap'

const CheckoutSteps = ({step1, step2, step3, step4}) => {
    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (  
                    
                        <Nav.Link href='/login' style={{background: 'black', color: 'white', borderRadius: '15px'}}>Sign In</Nav.Link>
                      
                ) : <Nav.Link disabled>Sign In</Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {step2 ? (  
                   
                        <Nav.Link href='/shipping' style={{background: 'black', color: 'white', borderRadius: '15px'}}>Shipping</Nav.Link>
                        
                ) : <Nav.Link disabled>Shipping</Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {step3 ? (  
                    <LinkContainer to='/payment' style={{background: 'black', color: 'white', borderRadius: '15px'}}>
                        <Nav.Link>Payment</Nav.Link>
                        </LinkContainer>
                ) : <Nav.Link disabled>Payment</Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {step4 ? (  
                    <LinkContainer to='/placeorder' style={{background: 'black', color: 'white', borderRadius: '15px'}}>
                        <Nav.Link>Place Order</Nav.Link>
                        </LinkContainer>
                ) : <Nav.Link disabled>Place Order</Nav.Link>}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps

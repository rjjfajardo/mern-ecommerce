import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from "../actions/productActions";
import Message from '../components/Message'
import Loader from '../components/Loader'




const ProductListScreen = ({history}) => {


    const dispatch = useDispatch() 
     
        
    const productList  = useSelector((state) => state.productList)
    const { loading , error , products } = productList   



    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo} = userLogin;


     useEffect(() => {
       if(userInfo && userInfo.isAdmin){
         dispatch(listProducts())
       }else{
         history.push('/login')
       }
     }, [dispatch])

     


   const createProductHandler = () => {
     console.log('triggerd');
   }

   const deleteHandler = () => {
     console.log('triggerd');
   }

    return (
        <>
        <Row className='align-items-center'>
          <Col>
            <h1>Products</h1>
          </Col>
          <Col className='text-right'>
            <Button className='my-3' onClick={createProductHandler}>
              <i className='fas fa-plus'></i> Create Product
            </Button>
          </Col>
        </Row>
               
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID </th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product) => (
              <tr key={product._id}>
                
                <td>{product.name}</td>
                <td>
                 ${product.price}
                </td>
                <td>
                 {product.category}
                </td>
                <td>{product.brand}</td>
                <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                        <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>

                        </Button>
                    </LinkContainer>
                    <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
                        <i className='fas fa-trash'></i>
                    </Button>
                </td>
              </tr>
            ))} 
          </tbody>
        </Table>
      )} 
        </>
    )
}

export default ProductListScreen

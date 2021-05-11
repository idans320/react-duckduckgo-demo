import React from 'react'
import Search from "./searchComponent"
import {Container,Col,Row} from "react-bootstrap"

function HeaderComponent(props) {
    return (
        <header className="App-header">
        <Container>
          <Row className = "row d-flex justify-content-center">
            <Col className= "col-md-6 header">
              <h1>DUCK DUCK GO ASSIGMENT.</h1>
            </Col>
          </Row>
          <Row className = "row d-flex mt-3 justify-content-center">
            <Col className= "col-md-7 header">
              <Search/>
            </Col>
          </Row>
        </Container>
      </header>
    )
}

export default HeaderComponent

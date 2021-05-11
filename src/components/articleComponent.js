import { Container } from '@material-ui/core'
import React from 'react'
import {Row,Col} from "react-bootstrap"
import Results from "./resultComponent"
import Highlight from "./highlightComponent"

function ArticleComponent(props) {
    return (
        <article>]
            <Container>
                <Row>
                    <Col>
                        <Results/>
                    </Col>
                </Row>
                <Row className = "mt-5">
                    <Col>
                        <Highlight/>
                    </Col>
                </Row>
            </Container>
      
        </article>
    )
}

export default ArticleComponent

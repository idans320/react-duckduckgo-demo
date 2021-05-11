import React from 'react'
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap"
import { connect } from "react-redux";
import { setPage } from "../redux/actions";
import Highlighter from "react-highlight-words";

function renderItems(RelatedTopics, keyword) {
    return RelatedTopics.map((topic) => <ListGroup.Item><a href={topic.FirstURL}><Highlighter searchWords={[keyword]} textToHighlight = {topic.Text}/></a></ListGroup.Item>)
}

function renderResults(searchResult, setPage, keyword) {
    let { results, pageNumber } = searchResult
    if (results) {
        return (
            <Card id="item-results">
                <Container>
                    <Col>
                        <Row>
                            <h1><a href={results.AbstractURL}>{results.Heading}</a></h1>
                        </Row>
                        <Row>
                            <h3>Related Topics</h3>
                        </Row>
                        <Row>
                            <ListGroup>
                                {renderItems(results.RelatedTopics[pageNumber], keyword)}
                            </ListGroup>
                        </Row>
                        <Row>
                            <span>
                                {[...Array(results.RelatedTopics.length).keys()].map((n) => {
                                    return <a class="page" href="#" onClick={() => {
                                        setPage((n))
                                    }}>{n}</a>
                                })}
                            </span>
                        </Row>
                    </Col>
                </Container>

            </Card>
        )
    }
    else {
        return null
    }
}

function mapStateToProps(state) {
    return { searchResult: state.searchResult, keyword: state.highlightText.keyword }
}

function ResultComponent({ searchResult, setPage, keyword }) {
    return (
        renderResults(searchResult, setPage, keyword)
    )
}

const mapDispatchToProps = dispatch => {
    return { setPage: page => dispatch(setPage(page)) };
};

const result = connect(mapStateToProps, mapDispatchToProps)(ResultComponent)

export default result

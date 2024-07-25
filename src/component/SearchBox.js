import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

const SearchBox = () => {
    return (
        <Row className='sb-1'>
            <Col lg={10}>
                <Form.Label>연락처</Form.Label>
                <Form.Control type="text" placeholder="이름을 입력해주세요" />
            </Col>
            <Col lg={2}>
                <Button className='find-button'>찾기</Button>
            </Col>
        </Row>
    )
}

export default SearchBox

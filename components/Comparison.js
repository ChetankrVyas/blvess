import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Comparison = () => {
    return (
        <div style={{margin:'90px',transform:'scale(1.3)'}}>
            <h3 style={{textAlign:'center',marginBottom:'30px'}}>YEAR-WISE COMPARISON OF PRODUCTION</h3>
            <div style={{ margin: 'auto', width: '50%' }}>
                <Row>
                    <Col className='com1'>Year</Col>
                    <Col className='com2'>FARMERS (Seed Growers and Demos)</Col>
                    <Col className='com1'>
                        <Row className='com3' style={{textAlign:'center'}}> TARGET PRODUCTION (Ton)</Row>
                        <Row>
                            <Col >Seeds</Col>
                            <Col style={{borderLeft:'2px solid black'}}>Grains</Col>
                        </Row>
                    </Col>
                    <Col className='com2'>AREA (Acre)</Col>
                    <Col className='com1'>ACHIEVED/ PROPOSED (Ton)</Col>
                </Row>
                <Row>
                    <Col className='com4'>2018-19 ACHIEVED</Col>
                    <Col style={{background:'rgb(37, 205, 37)'}}>130</Col>
                    <Col className='com4'>
                        <Row>
                            <Col>50</Col>
                            <Col style={{borderLeft:'2px solid black'}}>__</Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col style={{borderLeft:'2px solid black',color:'transparent'}}>n</Col>
                        </Row>
                    </Col>
                    <Col style={{background:'rgb(37, 205, 37)'}}>50</Col>
                    <Col className='com4'>50</Col>
                </Row>
                <Row>
                    <Col className='com5'>2019-20 ACHIEVED</Col>
                    <Col className='com6'>250</Col>
                    <Col className='com5'>
                        <Row>
                            <Col>160</Col>
                            <Col style={{borderLeft:'2px solid black'}}>25</Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col style={{borderLeft:'2px solid black',color:'transparent'}}>n</Col>
                        </Row>
                    </Col>
                    <Col className='com6'>100</Col>
                    <Col className='com5'>130</Col>
                </Row>
            </div>
        </div>
    )
}

export default Comparison
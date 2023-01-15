import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Lgo from '../assets/logo1.png'


const Header = () => {
    return (
        <div className='header'>
            <Row>
                <Col>
                    <div >
                        <Image src={Lgo} alt='photo' height={400} width={400} style={{ borderRadius: '50%', margin: 'auto', display: 'block' }} />
                    </div>
                </Col>
                <Col>
                    <div style={{ display: 'block', margin: '20px' }}>
                        <h1>OUR VISION IS TO BUILD</h1>
                        <h2>
                            a prosperous and sustainable agriculture sector, through the participation and capacity building of farmers, thereby enabling them to enhance productivity and cost-effectiveness and utilize sustainable resources by increasing the quality and quantity of crop production
                        </h2>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header;

import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Lgo from '../assets/logo.png'


const Header = () => {
    return (
        <div className='header'>
            <Image src={Lgo} alt='photo' />
            <p>
                II.	 VISION
                To build a prosperous and sustainable agriculture sector, through the participation and capacity building of farmers, thereby enabling them to enhance productivity and cost-effectiveness and utilize sustainable resources by increasing the quality and quantity of crop production
            </p>
        </div>
    )
}

export default Header;
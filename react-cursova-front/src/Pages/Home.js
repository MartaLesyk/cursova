import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component {
    render() {
        return (
            <div className='container-fluid p-0'>
                <CarouselBox />
            </div>
        )
    }
}

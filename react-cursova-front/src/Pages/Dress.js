import React, { Component } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class Dress extends Component {
    constructor(props) {
        super(props);



        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/dress')
            .then(response => {
                this.setState({ products: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }



    departureList() {
        const item = this.state.products.map(value =>{
            return <div className="col-md-4 ">
                <div className=" bg-white append-news news-item text-center">
                    <div className="crop sin">
                        <img width='100%' src={value.img}
                             alt="Житло"/>
                    </div>
                    <h3 className="news-date">{value.name}</h3>
                    <hr/>
                    <div className="inf">
                        <p>Тип: <span className='morrrr'>{value.type}</span></p>

                    </div>
                    <div className="inf">
                        <p>Ціна: <span className='morrrr'>{value.prise}</span> грн</p>

                    </div>
                    <hr/>
                    <p className="news-desc">
                        {value.about.slice(0, 70)}...
                    </p>
                    <hr/>
                    <Button сlassName = 'headerBtn'
                            variant="contained"
                            color="inherit"
                            size="small"
                    >

                        <Link  to={`/${value.id}`}>Купити</Link>
                    </Button>
                </div>
            </div>
        })

        return item
    }


    render() {
        return (
            <div className='container'>
                <div className='row upp'>
                    { this.departureList() }
                </div>
            </div>
        )
    }
}

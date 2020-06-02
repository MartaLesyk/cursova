import React, {Component} from "react";
import axios from 'axios';
import Button from "@material-ui/core/Button";


export default class AllCart extends Component {
    constructor(props) {
        super(props);



        this.state = {cart: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cart/cart')
            .then(response => {
                console.log(response);
                this.setState({ cart: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
        // axios.get('http://localhost:5000/products')
        //     .then(response => {
        //         this.setState({ products: response.data })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }



    departureList() {
        const item = this.state.cart.map(value =>{
            return <div className=" ">
                <div className=" bg-white append-news news-item text-center row align-center">
                    <div className="col-1">
                        <img width='100%' src={value.img}
                             alt="Житло"/>
                    </div>
                    <div className="col-11 d-flex justify-content-between">
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
                            {value.about.slice(0, 70)}
                        </p>
                        <p>
                            Розмір <hr/> {value.size}
                        </p>
                    </div>
                </div>
                <hr/>
            </div>
        })

        return item
    }


    render() {
        return (
            <div className='container upp'>
                <h2 className='text-center'>Ваша корзина</h2>
                { this.departureList() }
                <div className="text-center">
                    <Button сlassName = 'headerBtn'
                            variant="contained"
                            color="inherit"
                            size="small"

                    >

                        Оформити замовлення
                    </Button>
                </div>
            </div>
        )
    }
}

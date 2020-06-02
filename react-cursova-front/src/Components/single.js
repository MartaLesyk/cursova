import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";



export default class Single extends React.Component {
    diss = false;
    state = {
        diss: false
    };

    constructor(props) {
        super(props);

        this.state.order = {
            houseId: 0,
            houseName: '',
            prise: 0,
            phone: '',
            email: '',
            message: ''
        }

        this.state = {size: 0};
        this.state = {product: []};





    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get(`http://localhost:5000/products/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
                this.setState({product: response.data})
            })
            .catch((error) => {
                console.log(error);
            })

    }

    handleChange = e => {
        this.setState({size: e.target.value});
    }

    submitProduct = () =>{
        console.log(this.state);
        alert(`${this.state.product.name} - Успішно доданий у корзину!`)
        const data = this.state;
        axios.post('http://localhost:5000/cart', data);
    }


    render() {

        const {diss} = this.state;


        return (
            <div className='container row center'>


                <div className="slider col-4">
                    <img src={this.state.product.img} alt=""/>
                </div>
                <div className='col-8'>
                    <div className="cont">
                        <h3 className="news-date text-center">{this.state.product.name}</h3>
                        <div className="inf">
                            <p>Тип: <span className='morrrr'>{this.state.product.type}</span></p>

                        </div>
                        <div className="inf">
                            <p>Ціна: <span className='morrrr'>{this.state.product.prise}</span> грн</p>

                        </div>

                        <p className="news-desc">
                            {this.state.product.about}
                        </p>

                        <hr/>
                        <select
                            onChange={this.handleChange}
                            className="browser-default custom-select">
                            <option>Виберіть розмір</option>
                            <option value="S">S</option>
                            <option value="XS">XS</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </select>
                        <hr/>
                        <Button сlassName = 'headerBtn'
                                variant="contained"
                                color="inherit"
                                size="small"
                                onClick={this.submitProduct}
                        >

                            Купити
                        </Button>

                    </div>
                </div>

            </div>
        );
    }
}

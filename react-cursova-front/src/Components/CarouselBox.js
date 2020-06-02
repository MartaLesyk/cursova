import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import photo1 from '../assets/photo1.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo6 from '../assets/99px_ru_wallpaper_305658_devushka_shiomi_shuuko_s_krasnoj_sumochkoj_na_fone.jpg';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
           <div className=''>
               <Carousel>
                   <Carousel.Item className='item'>
                       <img
                           className="d-block w-100"
                           src='https://s1.1zoom.ru/b5050/652/Birds_Rain_Houses_Umbrella_Dress_521753_1920x1080.jpg'
                           alt="Photo1"
                       />
                       <Carousel.Caption>
                           <h3>
                               <a href="/dress">Сукні</a>
                           </h3>
                       </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item className='item'>
                       <img
                           className="d-block w-100"
                           src={ photo3 }
                           alt="Photo3"
                       />
                       <Carousel.Caption>
                           <h3>
                               <a href="/blouse">Блузки</a>

                           </h3>
                       </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item className='item'>
                       <img
                           className="d-block w-100"
                           src={ photo4 }
                           alt="Photo4"
                       />
                       <Carousel.Caption>
                           <h3>
                               <a href="/mike">Майки</a>

                           </h3>
                       </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item className='item'>
                       <img
                           className="d-block w-100"
                           src={ photo6 }
                           alt="Photo6"
                       />
                       <Carousel.Caption>
                           <h3>
                               <a href="/novelty">Спідниці</a>
                           </h3>
                       </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item className='item'>
                       <img
                           className="d-block w-100"
                           src='https://c.pxhere.com/photos/5c/f3/Clothes_Discovery_Person_Shop_Woman_Women-1613702.jpg!d'
                           alt="Photo8"
                       />
                       <Carousel.Caption>
                           <h3>
                               <a href="/all">Усі товари</a>
                           </h3>
                       </Carousel.Caption>
                   </Carousel.Item>
               </Carousel>
           </div>
        )
    }
}

import React, { Component } from 'react';
import Card from "../card/Card.jsx";
import cat01Img from "./../../img/categories/01.jpg";
import cat02Img from "./../../img/categories/02.jpg";
import cat03Img from "./../../img/categories/01.jpg";

import "./arrivals.css";

class Arrivals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [
                {
                    src: cat01Img,
                    title: 'Hoodies & Sweetshirt'
                },
                {
                    src: cat02Img,
                    title: 'Coats & Parkas'
                },
                {
                    src: cat03Img,
                    title: 'Tees & T-Shirt'
                }
            ]
        };
    }

    render() {
        const { content } = this.state;
        
        return (
            <section className="arrivals">
                <div className="container">
                    <div className="arrivals__header">
                        <div className="title-2">NEW ARRIVALS</div>
                    </div>
                    <div className="arrivals__cards">
                        {content.map((item, index) => (
                            <Card item={item} key={index} width={100 / content.length} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Arrivals;

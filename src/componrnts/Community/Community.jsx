import React, { Component } from 'react';
import "./community.css";

class Community extends Component {
    render() {
        return (
            <section className="community">
                <div className="container">
                    <h3>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h3>
                    <span>Type your email down below and be young wild generation</span>
                    <div className="input">
                        <input type="text" placeholder="Add your email here" />
                        <button>SEND</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Community;

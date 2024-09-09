import React, { Component } from 'react';
import styles from "./card.module.css";
import arrowImg from "./../../img/icons/arrow.svg";

class Card extends Component {
    render() {
        const { item, width } = this.props;

        return (
            <div className={styles.card} style={{ width: `${width}%` }}>
                <a href="#!" className={styles.card__link}></a>
                <img className={styles.card__img} src={item.src} alt="img" />
                <div className={styles.card__body}>
                    <div className={styles.card__text}>
                        <div className={styles.card__title}>{item.title}</div>
                        <div className={styles.card__muted}>Explore Now</div>
                    </div>
                    <div className={styles.card__icon}>
                        <img src={arrowImg} alt="arrow" />
                    </div>  
                </div>
            </div>
        );
    }
}

export default Card;

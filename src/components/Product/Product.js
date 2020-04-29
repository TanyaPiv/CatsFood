import React, {Component} from 'react';
import styles from './Product.module.scss';
import img from '../../img/cat.png';
import ProductWeight from '../ProductWeight';
import classnames from 'classnames';

export default class Product extends Component {
    state = {
        hover : false,
        select: false,
    }

    onProductHover = (boolean) => {

        if (this.props.product.empty) {
            return
        }

        this.setState({
            hover: boolean
        })
    }

    onProductSelect = (event) => {
        event.preventDefault();

        if (this.props.product.empty) {
            return
        }

        this.setState({
            select: !this.state.select,
            hover: false
        })
    }

    declarationRender = () => {
        const { declaration, empty, description } = this.props.product;
        const { select } = this.state;

        if (empty) {
            return `Печалька, ${description} закончился.`
        }

        if (select) {
            return declaration;
        }

        return <>Чего сидишь? Порадуй котэ, <a href='#' onClick={this.onProductSelect}>купи.</a></>
    }

    render () {
        const { description, offer, weight, empty} = this.props.product;
        const { serving, present, satisfied } = offer; 
        const { num, text} = weight;
        const offerText = `${serving} ${present} ${satisfied ? 'заказчик даволен' : ''}`; 
        const productClassName = classnames(styles.item, {
            [styles.item_hover]: !this.state.select && this.state.hover,
            [styles.item_select]: this.state.select && !this.state.hover,
            [styles.item_select_hover]: this.state.select && this.state.hover,
            [styles.item_empty]: empty
        })
        return (
            <div>
                <div 
                    className={productClassName}
                    onMouseEnter={() => this.onProductHover(true)}
                    onMouseLeave={() => this.onProductHover(false)}
                    onClick={this.onProductSelect}
                >
                    {
                        empty ? <div className={styles.off}></div> : null
                    }
                    <div 
                        className={styles.label} 
                        style={{ color: (this.state.select && this.state.hover) && '#D91667'}}
                    >
                        {
                            this.state.select && this.state.hover 
                                ? 'Котэ не одобряет?'
                                : 'Сказочное заморское яство'
                        }
                    </div>
                    <div className={styles.title}>Нямушка</div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.offer}>{offerText}</div>
                    <img src={img} alt="cat" className={styles.img}/>
                    <ProductWeight 
                        num={num} 
                        text={text} 
                        hover={this.state.hover} 
                        select={this.state.select} 
                        empty={empty}
                    />
                </div>
                <div 
                    className={styles.link}
                    style={{ color: empty && '#FFFF66' }}
                >
                    {this.declarationRender()}
                </div>
            </div>

        )
    }
}

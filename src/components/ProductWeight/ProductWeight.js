import React from 'react';
import styles from './ProductWeight.module.scss';
import classnames from 'classnames';

const ProductWeight = ({ num, text, hover, select, empty }) => {
    const productWeightClassname = classnames (styles.circle, {
        [styles.circle_hover]: hover && !select,
        [styles.circle_select]: select && !hover,
        [styles.circle_select_hover]: select && hover,
        [styles.circle_empty]: empty
    })


    return (
        <div className={productWeightClassname}>
            <div className={styles.num}>{num}</div>
            <div className={styles.text}>{text}</div>
        </div>
    )
}

export default ProductWeight;

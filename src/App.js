import React, {Component} from 'react';
import Product from './components/Product';

class App extends Component {
    state = {


        products:[
            { 
                description: "c фуа-гра",
                offer:{
                    serving: '10 порций',
                    present: 'мышь в подарок', 
                    satisfied: false
                },
                weight:{
                    num: '0,5',
                    text: 'кг'
                },
                empty: false,
                declaration: 'Печень утки разварная с артишоками.'
            },
            {
                description: "с рыбой",
                offer: {
                    serving: '40 порций',
                    present: '2 мыши в подарок',
                    satisfied: false
                },
                weight: {
                    num: '2',
                    text: 'кг'
                },
                empty: false,
                declaration: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
            },
            {
                description: "c курой",
                offer: {
                    serving: '100 порций',
                    present: '5 мышей в подарок',
                    satisfied: true
                },
                weight: {
                    num: '5',
                    text: 'кг'
                },
                empty: true,
                declaration: 'Филе из цыплят с трюфелями в бульоне.'
            }
        ]
    }

    render () {
        return (
            <>
                <h1>Ты сегодня покормил кота?</h1>
                <div className='product-wrap'>
                    {this.state.products.map(product => (
                        <Product key={product.description} product={product}/>
                    ))}                     
                </div>
            </>
        )
    }
}

export default App;

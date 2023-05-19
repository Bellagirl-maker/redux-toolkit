import React from 'react'
import ItemCart from './ItemCart'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'

const ContainerCart = () => {
    const dispatch = useDispatch();
    const {cartItems, total, amount} = useSelector((store) =>store.cart)

    if (amount < 1){
        return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </section>
        );
    }

  return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <ItemCart key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <h4>total<span>${total}</span></h4>
                <button className='btn clear-btn' onClick={()=>dispatch(clearCart)}>Clear cart</button>
            </footer>
        </section>
        );
    }
export default ContainerCart
import BasketItem from './BasketItem';
import { VB_TO_RUB } from '../config';


function BasketList({
    order = [],
    handleBasketShow,
    removeFromBasket,
    incQuantity,
    decQuantity,
    }) {


    const totalPrice = order.reduce((sum, item) => {
    return sum + item.price.finalPrice * item.quantity * VB_TO_RUB;
    }, 0);


    return (
        <div
        className="position-fixed top-0 end-0 bg-white border rounded shadow p-3 m-3"
        style={{ width: '320px', zIndex: 2000 }}
        >
        <h5 className="mb-3">Корзина</h5>
        <button
            className="btn-close position-absolute top-0 end-0 m-3"
            onClick={handleBasketShow}
        ></button>
        {order.length ? (
            <ul className="list-group">
            {order.map((item) => (
                <BasketItem
                key={item.mainId}
                item={item}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
                />
            ))}
            <li className="list-group-item fw-bold text-end">
                Итого: {totalPrice.toFixed(0)} ₽
            </li>
            </ul>
        ) : (
            <p className="mt-3">Корзина пуста</p>
        )}
        </div>
    );
}

export default BasketList;

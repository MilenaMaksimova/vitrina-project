import { VB_TO_RUB } from '../config';


function BasketItem({ item, removeFromBasket, incQuantity, decQuantity }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
            {item.displayName} &nbsp;
            <button
            className="btn btn-sm btn-outline-secondary me-1"
            onClick={() => decQuantity(item.mainId)}
            >
            –
            </button>
            <span>{item.quantity}</span>
            <button
            className="btn btn-sm btn-outline-secondary ms-1"
            onClick={() => incQuantity(item.mainId)}
            >
            +
            </button>
        </div>
        <div>
            {(item.price.finalPrice * item.quantity * VB_TO_RUB).toFixed(0)} ₽
            <button
            className="btn btn-sm btn-danger ms-2"
            onClick={() => removeFromBasket(item.mainId)}
            >
            ✕
            </button>
        </div>
        </li>
    );
}

export default BasketItem;

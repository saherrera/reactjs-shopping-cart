import { getProduct } from '../ducks/products';

// actions
const CART_ADD   = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';
const IMP_IVA = 0.16;

// reducer
const initialState = {
    items: [], // array of product ids
    currency: 'MXN'
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    return {
        ...state,
        items: [ ...state.items, payload.productId ]
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}

// action creators
export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

// selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}

export function getCurrency(state, props) {
    return state.cart.currency;
}

export function getSubTotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + item.price;
    }, 0);
}

export function getImp(state, props) {
    let total = 0;
    state.cart.items.map((id) => {
        const item = getProduct(state, { id });
        total = total + item.price;
    });
    total = total * IMP_IVA
    return total.toFixed(2);
}

export function getTotal(state, props) {
    let total = 0;
    state.cart.items.map((id) => {
        const item = getProduct(state, { id });
        total = total + item.price;
    });
    total = (total * IMP_IVA) + total
    return total.toFixed(2);
}

export function getDetailProducts(state, props) {
    let products = [];
    state.cart.items.map((id) => {
        const item = getProduct(state, { id });
        products.push(item)
    });
    return products;
   
}

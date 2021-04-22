import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [
        {
          id: 1,
          title: "Nike Air Green",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 7000.0,
          image: require('../../images/cart_0007_item-8.jpg'),
        },
        {
          id: 2,
          title: "Nike Air 02",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 150.0,
          image: require('../../images/cart_0003_item-4.jpg'),
        },
        {
          id: 3,
          title: "Nike Air 03",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 185.0,
          image: require('../../images/cart_0000_item-1.jpg'),
        },
        {
          id: 4,
          title: "Nike Air 04",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 390.0,
          image: require('../../images/cart_0005_item-6.jpg'),
        },
        {
          id: 5,
          title: "Nike Swoosh",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 225.0,
          image: require('../../images/cart_0001_item-2.jpg'),
        },
        {
          id: 6,
          title: "Vans",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 800.0,
          image: require('../../images/cart_0002_item-3.jpg'),
        },
        {
          id: 7,
          title: "Nike Air 07",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 100.0,
          image: require('../../images/cart_0008_item-9.jpg'),
        },
        {
          id: 8,
          title: "Nike Air 08",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 99.0,
          image: require('../../images/cart_0009_item-10.jpg'),
        },
      ],
    cart: [],
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            // get item data from products and check if already in cart
            const cartItem = state.products.find(prod => prod.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)

            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item)
                : [...state.cart, {...cartItem, qty: 1}]
            }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }

        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
            }

        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }

        default:
            return state;
    }
}

export default shopReducer;
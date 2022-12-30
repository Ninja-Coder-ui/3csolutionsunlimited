const PRODUCTS = [
    { id: 101, name: "Basketball", price: 30, img: "https://res.cloudinary.com/raykuo/image/upload/v1486418846/meme-placeholder_o84mbg.jpg" },
    { id: 102, name: "Baseball", price: 10, img: "https://res.cloudinary.com/raykuo/image/upload/v1486418846/meme-placeholder_o84mbg.jpg" },
    { id: 103, name: "Sport Shoes", price: 70, img: "https://res.cloudinary.com/raykuo/image/upload/v1486418846/meme-placeholder_o84mbg.jpg" },
    { id: 104, name: "Tennis Ball", price: 130, img: "https://res.cloudinary.com/raykuo/image/upload/v1486418846/meme-placeholder_o84mbg.jpg" },
    { id: 105, name: "Net Ball", price: 120, img: "https://res.cloudinary.com/raykuo/image/upload/v1486418846/meme-placeholder_o84mbg.jpg" },
    { id: 106, name: "Sport Cloth", price: 700, img: "https://res.cloudinary.com/raykuo/image/upload/v1486418846/meme-placeholder_o84mbg.jpg" },
    { id: 107, name: "Sport Cloth", price: 800, img: "https://res.cloudinary.com/raykuo/image/upload/v1486418846/meme-placeholder_o84mbg.jpg" },
    { id: 108, name: "Sport Cloth", price: 900, img: "https://res.cloudinary.com/raykuo/image/upload/v1486418846/meme-placeholder_o84mbg.jpg" }
];


const CartItem = ({ product, removeCartItem }) => /*#__PURE__*/
    React.createElement("li", { className: "list-group-item" }, /*#__PURE__*/
        React.createElement("span", { className: "badge" }, product.count), /*#__PURE__*/
        React.createElement("a", {
                className: "c-btn-delete",
                onClick: removeCartItem
            }, /*#__PURE__*/

            React.createElement("i", { className: "fa fa-trash" })),

        " ",
        product.name);



const Cart = ({ toggleCart, productCount, children }) => {
    return /*#__PURE__*/ (
        React.createElement("div", { className: "well clearfix" }, /*#__PURE__*/
            React.createElement("button", {
                    className: "btn btn-primary pull-right",
                    type: "button",
                    onClick: toggleCart
                }, /*#__PURE__*/

                React.createElement("i", { className: "fa fa-shopping-cart" }),
                " ", /*#__PURE__*/
                React.createElement("span", { className: "badge" }, productCount)),

            children));


};

const Product = ({ product, addToCart }) => /*#__PURE__*/
    React.createElement("div", { className: "col-sm-6 col-md-4" }, /*#__PURE__*/
        React.createElement("div", { className: "thumbnail" }, /*#__PURE__*/
            React.createElement("img", { src: product.img, alt: "..." }), /*#__PURE__*/
            React.createElement("div", { className: "caption" }, /*#__PURE__*/
                React.createElement("h3", null, product.name), /*#__PURE__*/
                React.createElement("p", null, "$", product.price), /*#__PURE__*/
                React.createElement("a", {
                    className: "btn btn-primary",
                    role: "button",
                    onClick: addToCart
                }, "Add to cart"))));








const Shop = ({
    productsData,
    toggleCart,
    showCart,
    addToCart,
    cartItems,
    removeCartItem
}) => {
    let products = [],
        cartListItems = [],
        productCount = 0,
        totalPrice = 0,
        totalPriceUI = null;
    if (productsData) {
        products = productsData.map(
            (productItem, index) => /*#__PURE__*/
            React.createElement(Product, {
                product: productItem,
                addToCart: () => addToCart(index)
            }));



    }

    if (cartItems.length > 0) {
        cartListItems = cartItems.map(
            (cartListItem, index) => /*#__PURE__*/
            React.createElement(CartItem, {
                product: cartListItem,
                removeCartItem: () => removeCartItem(index)
            }));



        for (var i = 0; i < cartItems.length; i++) {
            productCount += cartItems[i].count;
            totalPrice += cartItems[i].price * cartItems[i].count;
        }
        totalPriceUI = /*#__PURE__*/
            React.createElement("li", { className: "list-group-item" }, /*#__PURE__*/
                React.createElement("h4", null, "Total Price: $", totalPrice), /*#__PURE__*/
                React.createElement("a", { className: "btn btn-primary" }, "Checkout"));

    }
    return /*#__PURE__*/ (
        React.createElement("div", null, /*#__PURE__*/

            React.createElement(Cart, { toggleCart: toggleCart, productCount: productCount }, /*#__PURE__*/
                React.createElement("div", { className: "c-dropdown " + (showCart ? "is-active" : "") }, /*#__PURE__*/
                    React.createElement("ul", { className: "list-group" },
                        cartListItems,
                        totalPriceUI))), /*#__PURE__*/




            React.createElement("div", { className: "container" }, /*#__PURE__*/
                React.createElement("div", { className: "row" },
                    products))));




};

class ShopContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            products: PRODUCTS,
            showCart: false,
            cartItems: []
        };

        this.toggleCart = this.toggleCart.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removeCartItem = this.removeCartItem.bind(this);
    }

    toggleCart() {
        this.setState({
            showCart: !this.state.showCart
        });

    }

    addToCart(index) {
        //console.log(index);
        let inCartItems = this.state.cartItems;
        let itemToAdd = this.state.products[index];
        const cartCheck = () => {
            let result = false;
            for (let i = 0; i < inCartItems.length; i++) {
                if (itemToAdd.id === inCartItems[i].id) {
                    result = i;
                }
            }
            return result;
        };
        if (inCartItems.length === 0 || cartCheck() === false) {
            //console.log("new item in cart");
            itemToAdd.count = 1;
            inCartItems.push(itemToAdd);
            //console.log(inCartItems);
        } else {
            //console.log("same item in cart");
            inCartItems[cartCheck()].count += 1;
        }
        this.setState({
            cartItems: inCartItems,
            showCart: true
        });

        //console.log(this.state.cartItems)
    }

    removeCartItem(index) {
        const itemRemoved = this.state.cartItems;
        itemRemoved.splice(index, 1);
        this.setState({
            cartItems: itemRemoved
        });

    }

    render() {
        return /*#__PURE__*/ (
            React.createElement(Shop, {
                productsData: this.state.products,
                toggleCart: this.toggleCart,
                showCart: this.state.showCart,
                addToCart: index => this.addToCart(index),
                cartItems: this.state.cartItems,
                removeCartItem: index => this.removeCartItem(index)
            }));


    }
}


ReactDOM.render( /*#__PURE__*/
    React.createElement(ShopContainer, null),
    document.querySelector("#root"));
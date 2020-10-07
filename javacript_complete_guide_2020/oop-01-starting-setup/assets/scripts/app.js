class Product {
  //   title = 'Default';
  //   imgUrl;
  //   description;
  //   price;

  constructor(title, imgUrl, price, description) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}
class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    console.log('adding cart');
    console.log(this.product);
    App.addToCart(this.product);
  }
  render() {
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
                  <div>
                      <img src=${this.product.imgUrl} alt=${this.product.title}/>
                      <div class="product-item__content">
                          <h2>${this.product.title}</h2>
                          <h3>${this.product.price}</h3>
                          <p>${this.product.description}</p>
                          <button>Add to Cart</button>
                      </div>
                  </div>
              `;
    const addToCartBtn = prodEl.querySelector('button');
    //이벤트리스너에 등록하는 함수는 이벤트리스너가 달린 엘리먼트가 호출하기에 this가 addToCardBtn이 된다.
    // 그렇기에 등록하는 시점에 bind(this)를 통해 ProductItem으로 this를 바인딩해야한다.
    addToCartBtn.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList extends Component {
  products = [
    new Product(
      'Pillow',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStvd1ZpnfLaj6rvXG7ujs3cl61uq5OktMG2Ynr8pVc4zalb-y9-ATrLvBXrP233g&usqp=CAc',
      19.9,
      'soft pillow'
    ),
    new Product(
      'Carpet',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSbmOOcHqrHZTu8ZkMR3mPdN3igX3lPwcD-DKzOJzlhsN5u9xuxXh2HCCzC1iZW1nc_R_Hw58rFK4GmODiHvrNGdWMc91_kiJ3LRF0K-v29&usqp=CAc',
      89.99,
      'Good Carpet'
    ),
  ];
  constructor(renderHookId) {
    super(renderHookId);
  }
  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list'),
    ]);
    for (const prod of this.products) {
      const prodItem = new ProductItem(prod, 'prod-list');
      prodItem.render();
    }
  }
}

class ShoppingCart extends Component {
  items = [];

  constructor(renderHook) {
    super(renderHook);
  }
  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: ${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }
  get totalAmount() {
    return this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
  }
  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }
  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
            <h2>Total: ${0}</h2>
            <button> Order now!</button>
        `;
    this.totalOutput = cartEl.querySelector('h2');
  }
}
class Shop {
  cart;

  render() {
    this.cart = new ShoppingCart('app');
    this.cart.render();
    const productList = new ProductList('app');
    productList.render();
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init();

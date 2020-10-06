class Product {
  //   title = 'Default';
  //   imgUrl;
  //   description;
  //   price;

  constructor(title, imgUrl, description, price) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('adding cart');
    console.log(this.product);
  }
  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
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

class ProductList {
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

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodItem = new ProductItem(prod);
      const prodEl = prodItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}
const productList = new ProductList();
productList.render();

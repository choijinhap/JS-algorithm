const productList={
    products:[
        {
            title:'Pillow',
            imgUrl:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStvd1ZpnfLaj6rvXG7ujs3cl61uq5OktMG2Ynr8pVc4zalb-y9-ATrLvBXrP233g&usqp=CAc',
            price:19.9,
            description:'soft pillow'
        },
        {
            title:'Carpet',
            imgUrl:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSbmOOcHqrHZTu8ZkMR3mPdN3igX3lPwcD-DKzOJzlhsN5u9xuxXh2HCCzC1iZW1nc_R_Hw58rFK4GmODiHvrNGdWMc91_kiJ3LRF0K-v29&usqp=CAc',
            price:89.99,
            description:'Good Carpet'
        }
    ],
    render(){
        const renderHook=document.getElementById('app')
        const prodList=document.createElement('ul')
        prodList.className='product-list'
        for(const prod of this.products){
            const prodEl=document.createElement('li');
            prodEl.className='product-item'
            prodEl.innerHTML=`
                <div>
                    <img src=${prod.imgUrl} alt=${prod.title}/>
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}
productList.render();

const  base = require("@playwright/test");
exports.customtest = base.test.extend(
    {
    loginInfo :{
        email : "anshika@gmail.com",
        password : "Iamking@000"
    },
})
exports.newtest= base.test.extend(
    { googlelocator : {
        textField : "[id='APjFqb']",
        searchValue : "today news",
        firstProduct: '[class="LC20lb MBeuO DKV0Md"]>>nth=0',
        productList : '[class="LC20lb MBeuO DKV0Md"]',
    }
})
exports.example2test = base.test.extend(
    {    dataset:{
            // web input
            webInput: '[class="card-body"]>>nth=0',
            inputNum: '#input-number',
            inputText : '#input-text',
            inputPwd: '#input-password',
            //  add and delete
            addRemove: '.card-body>>nth=1',
            addElement: 'button:text-is("Add Element")',
            removeElement: 'button:text-is("Delete")>>nth=0',
            // drop down
            ddBtn : '#examples-dropdown',
        }
    })

exports.flipkart = base.test.extend(
    {
        dataset :{
            allProductList : 'a>div+div>div',
            productPrice : 'div',
            tittle: 'img[title="Flipkart"]',
            cartTxt: '[title="Cart"]',
            loginIcon: 'img[alt="Login"]',
            rightText: 'a[title="Become a Seller"]>>nth=1',

        }
    }
)
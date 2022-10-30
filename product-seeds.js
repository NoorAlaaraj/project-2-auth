const db = require("./models")

async function createProduct(){
    try{
      db.product.bulkCreate(
            [
                {orderId: "ESPRESSO",
                 description:"A full-flavored concentrated form of coffee that is served in shots.It is made by forcing pressurized hot water through very finely ground coffee beans using an espresso machine.",
                 price: 1.4,
                 photo: "https://i.imgur.com/IuslkIc.jpg",
                },
        
                {orderId: "ARABIC",
                 description:"Made from lightly roasted coffee beans infused with a mix of fragrant spices like cardamom, ginger, cloves, and saffron.",
                 price: 1.4,
                 photo: "https://i.imgur.com/oXhJArW.jpg",
                },
        
                {orderId: "LATTE",
                 description:"A milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.",
                 price: 1.4,
                 photo: "https://i.imgur.com/IAGPlgo.jpg",
                },
        
                {orderId: "CAPPUCINO",
                 description:"The perfect balance of espresso, steamed milk and foam. This coffee is all about the structure and the even splitting of all elements into equal thirds.",
                 price: 1.4,
                 photo: "https://i.imgur.com/sqEaOT5.jpg",
                },
        
                { orderId:"MOCHA",
                 description:"Combines freshly pulled shots of espresso with hot water to achieve the size of a standard cup of brewed coffee.",
                 price: 1.4,
                 photo: "https://i.imgur.com/TG0du0j.jpg",
                },

                { orderId:"BELGIAN",
                 description:"The standard cookie flavor but don't understimate other Noor's coffee beans cookies, you will fall in love with it on your first bite!",
                 price: 1,
                 photo: "https://i.imgur.com/9Mdxr18.jpg",
                },

                { orderId:"KINDER",
                 description:"Did you try this type of cookie? we call it cookies from heaven, you must have some with Arabic coffee!",
                 price: 1,
                 photo: "https://i.imgur.com/it4SP71.jpg",
                },

                { orderId:"DARK KINDER",
                 description:"All time favorite! You could never eat one only. Enjoy these rich chocolate chip cookies with a kick of espresso",
                 price: 1,
                 photo: "https://i.imgur.com/aAGeTbq.jpg",
                },

                { orderId:"NUTELLA",
                 description:"These cookies taste fantastic with the nutella. Enjoy these cookies that taste so festive during your holiday",
                 price: 1,
                 photo: "https://i.imgur.com/jibstcr.jpg",
                },
        ]
        )
    }catch(err){
        console.log(err)
    }
}
createProduct()
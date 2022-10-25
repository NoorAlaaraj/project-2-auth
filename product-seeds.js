const db = require("./models")

// let URL = ...
async function createEvent(){
    try{
      await db.product.bulkInsert(
            [
                {Description:"Espresso: A full-flavored concentrated form of coffee that is served in shots.It is made by forcing pressurized hot water through very finely ground coffee beans using an espresso machine.",
                 Price: "1.5",
                 Photo: URL,
                },
        
                {Description:"Arabic Coffee: Made from lightly roasted coffee beans infused with a mix of fragrant spices like cardamom, ginger, cloves, and saffron.",
                 Price: "1.5",
                 Photo: URL,
                },
        
                {Description:"Latte: A milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.",
                 Price: "1.5",
                 Photo: URL,
                },
        
            {Description:"Cappucino: the perfect balance of espresso, steamed milk and foam. This coffee is all about the structure and the even splitting of all elements into equal thirds.",
             Price: "1.5",
             Photo: URL,
            },
        
            {Description:"Mocha: combines freshly pulled shots of espresso with hot water to achieve the size of a standard cup of brewed coffee.",
             Price: "1.5",
             Photo: URL,
            },
        ]
        )
    }catch(err){
        console.log(err)
    }
}

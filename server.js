const express = require('express')
const app = express()
const PORT = 8000
const CORS = require('cors')
app.use(express.static('public'))
app.use(express.static('IMG'))
app.use(CORS())


/*
const coreDrinks = {
    'brewed': {
        "coffee":{
            'Simplicity':10,
            'Bitterness': 10,
            'Charge For Alt Milk': false,
            'Description':''
        },
        "dark roast":{
            'Simplicity':10,
            'Bitterness': 10,
            'Charge For Alt Milk': false,
            'Description':''
        },
        "blonde roast":{
            'Simplicity':10,
            'Bitterness': 10,
            'Charge For Alt Milk': false,
            'Description':''
        },
        "cafe misto":{
            'Simplicity':10,
            'Bitterness': 10,
            'Charge For Alt Milk': false,
            'Description':''
        },
        "iced coffee":{
            'Simplicity':10,
            'Bitterness': 10,
            'Charge For Alt Milk': false,
            'Description':''
        },
        "cold brew":{
            'Simplicity':10,
            'Bitterness': 10,
            'Charge For Alt Milk': false,
            'Description':''
        },
        "vanilla sweet cream cold brew":{
            'Simplicity':10,
            'Bitterness': 10,
            'Charge For Alt Milk': false,
            'Description':''
        },
        "salted caramel cream cold brew":{
            'Simplicity':10,
            'Bitterness': 10,
            'Charge For Alt Milk': false,
            'Description':''
        },
        "chocolate cream cold brew":{
            'Simplicity':10,
            'Bitterness': 10,
            'Charge For Alt Milk': false,
            'Description':''
        },
        'draft':{
            "nitro cold brew":{
                'Simplicity':10,
                'Bitterness': 10,
                'Charge For Alt Milk': false,
                'Description':''
            },
            "vanilla sweet cream nitro cold brew":{
                'Simplicity':10,
                'Bitterness': 10,
                'Charge For Alt Milk': false,
                'Description':''
            },
            "nitro cold brew":{
                'Simplicity':10,
                'Bitterness': 10,
                'Charge For Alt Milk': false,
                'Description':''
            },
        }
    },
    'espresso':{
        "latte":{
            'Simplicity':8,
            'Bitterness': 8,
            'Charge For Alt Milk': true,
            'Description':''
        },
        "cinnamon dolce latte":{
            'Simplicity':8,
            'Bitterness': 8,
            'Charge For Alt Milk': true,
            'Description':''
        },
        "cappuccino":{
            'Simplicity':8,
            'Bitterness': 8,
            'Charge For Alt Milk': true,
            'Description':''
        },
        "americano":{
            'Simplicity':9,
            'Bitterness': 10,
            'Charge For Alt Milk': false,
            'Description':''
        },
        "espresso":{
            'Simplicity':10,
            'Bitterness': 10,
            'Charge For Alt Milk': false,
            'Description':''
        },
        "espresso con pana":{
            'Simplicity':10,
            'Bitterness': 8,
            'Charge For Alt Milk': false,
            'Description':''
        },
        "espresso macchiato":{
            'Simplicity':7,
            'Bitterness': 9,
            'Charge For Alt Milk': true,
            'Description':''
        },
        "iced shaken espresso":{
            'Simplicity':7,
            'Bitterness': 9,
            'Charge For Alt Milk': true,
            'Description':''
        }


    }


}
*/


const roasts ={
    'blonde':[],
    'medium':[],
    'dark':[],
}

const coreDrinks = {
    brewed:[],
    espresso:[],
    blended : [],
    tea : [],
    other : [],
}





class Roasts{
    constructor(title,desc,darkness,flavor,Body,acid,process,country){
        this.name = title
        this.description = desc
        this.roast=darkness
        this.flavorNotes = flavor
        this.body = Body
        this.acidity = acid
        this.processing = process
        this.region = country
    }
}
roasts.blonde.push(new Roasts("Veranda",'Subtle with delicate nuances of soft cocoa and lightly toasted nuts.','Blonde','Mellow and soft','Light','Medium','Washed','Latin America'))
roasts.blonde.push(new Roasts("Blonde Espresso",'Incredibly smooth and subtly sweet with a creamy mouthfeel.','Blonde','Smooth and sweet','Medium','Medium','Washed','Multi-Region'))

roasts.medium.push(new Roasts("Siren's Blend",'Notes of citrus and floral aromas balanced by the taste of cocoa.','Medium','Citrus and chocolate','Medium','Medium','Washed','Multi-Region'))
roasts.medium.push(new Roasts("Pike's Place",'Well rounded with subtle notes of cocoa and toasted nuts balancing the smooth mouthfeel.','Medium','Smooth and balanced','Medium','Medium','Washed','Latin America'))
roasts.medium.push(new Roasts("Yukon Blend",'Big and balanced, with a liveliness at the start and herbal depth in the finish.','Medium','Hearty and well-rounded','Full','Medium','Washed and Semi-Washed','Multi-Region'))

roasts.dark.push(new Roasts("Sumatra",'Full-bodied with a smooth mouthfeel and lingering herbal flavors.','Dark','Earthy and Herbal','Full','Low','Semi-Washed','Asia/Pacific'))
roasts.dark.push(new Roasts("Komodo Dragon Blend",'Earthy and layered with notes of fresh herbs and a lingering spice.','Dark','Complex and Herbal','Full','Low','Washed and Semi-Washed','Asia/Pacific'))
roasts.dark.push(new Roasts("Cafè Verona",'Well balanced and rich with a dark cocoa texture.','Dark','Roasty sweet and Dark Cocoa','Full','Low','Washed and Semi-Washed','Multi-Region'))
roasts.dark.push(new Roasts("Espresso Roast",'Intense, caramelly sweet and perfect with steamed milk. Delicious as brewed coffee too','Dark','Rich and Caramelly','Full','Medium','Washed','Multi-Region'))
roasts.dark.push(new Roasts("Italian Roast",'Intense with a rich,deep flavor and notes of caramelized sugar.','Dark','Roasty and sweet','Medium','Low','Washed','Multi-Region'))

class Espresso{
    constructor(Name,Steps,Contents,Iced){
        this.name = Name
        this.instructions = Steps
        this.hotBuild =Contents
        this.iced = Iced
    }
}
coreDrinks.espresso.push(new Espresso('Americano',['que','add water','pour'],{'room':'1%','water':'72%','espresso':'27%'},true))
coreDrinks.espresso.push(new Espresso('Espresso',['que','pour'],{'room':'87%','espresso':'13%'},true))
coreDrinks.espresso.push(new Espresso('Espresso Macchiatto',['que','pour'],{'room':'57%','foam':'30%','espresso':'13%'},true))
coreDrinks.espresso.push(new Espresso('Espresso Con Panna',['que','pour'],{'room':'77%','whipped cream':'10%','espresso':'13%'},true))
coreDrinks.espresso.push(new Espresso('Latte',['steam','que','pump syrup','pour'],{'room':'1%','foam':'15%','steamed milk':'71%','espresso':'13%'},true))
coreDrinks.espresso.push(new Espresso('Cinnamon Dolce Latte',['steam','que','pump syrup','pour'],{'whipped cream':'6%','foam':'11%','steamed milk':'63%','espresso':'13%','syrup':'7%'},true))
coreDrinks.espresso.push(new Espresso('Flat White',['steam','que','pump syrup','pour'],{'room':'1%','foam':'15%','steamed milk':'74%','espresso':'10%'},true))

coreDrinks.espresso.push(new Espresso('White Mocha',['steam milk','que shots','pump syrup','pour milk','add whip'],{'whipped cream':'6%','foam':'11%','steamed milk':'63%','espresso':'13%','syrup':'7%'},true))
coreDrinks.espresso.push(new Espresso('Mocha',['steam milk','que shots','pump syrup','pour milk','add whip'],{'whipped cream':'6%','foam':'11%','steamed milk':'63%','espresso':'13%','syrup':'7%'},true))
coreDrinks.espresso.push(new Espresso('Caramel Macchiatto',['steam milk','que shots','pump syrup','pour milk'],{'caramel drizzle':'3%','foam':'10%','espresso':'13%','steamed milk':'67%','syrup':'7%'},true))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/roasts',(req,res)=>{
    res.sendFile(__dirname+'/public/roasts.html')
})
app.get('/coredrinks',(req,res)=>{
    res.sendFile(__dirname+'/public/coreDrinks.html')
})


app.get('/api/coreDrinks'.toLowerCase(),(req,res)=>{
    res.json(coreDrinks)
})

app.get('/api/roasts'.toLowerCase(),(req,res)=>{
    res.json(roasts)
})

app.get('/coredrinks/:cat',(req,res)=>{
    const category = req.params.cat.toLowerCase()
    if(coreDrinks[category]){
        res.json(coreDrinks[category])
    }else res.json(coreDrinks['brewed'])
})

// app.get('/coredrinks/:cat/:drink',(req,res)=>{
//             const category = req.params.cat.toLowerCase()
//             const drink = req.params.drink.toLowerCase()
//             if(coreDrinks[category][drink]){
//                 res.json(coreDrinks[category][drink])
//             }else res.json(coreDrinks[category])
//         })



app.listen(process.env.PORT || PORT)
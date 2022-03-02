const einkaufsliste = [
    {
        name: "Eier",
        preis: 2.89
    },
    {
        name: "Kaffe",
        preis: 1.80
    },
    {
        name: "mehl",
        preis: 0.45
    }

   
   
];
//console.log(einkaufsliste);

//komplexfrage:Wieviel kosten meine einkäufe?

//für alle Produkte in den Einkaufsliste

let summe = 0;
for(let product of einkaufsliste){
    console.log("name", product.name);
    console.log("preis", product.preis);
    console.log("ganzes objekt", product);
    summe += product.preis;
};
console.log("gesamtpreis", summe.toFixed(2));


const kunden = [

    //sarah
    {
    name: "sarah",
    kunde: "2017-02-11",
    verifiziert: true,
    bestellung: ["super racer", "bottle"], //hat Array wert..kann wieder arrays haben.. als verschachtlung
    bezahlt: true,

},


    //nancy
    {   name: "nancy",
        kunde: undefined,
        verifiziert: false,
        bestellung: ["bike"],
        bezahlt: false,
    },
];
//console.log(kunde);


const orders = [
    //helm
    {
        name: "super racer",
        preis: 28,
        target: "unisex",
        material: "plastik"
    },

    //trinkflasche
    {
        name: "bottle",
        preis: 9,
        color: "blue",
        size: "1L",
        material: "wood"
    },

    //bike
    {
        name: "bike",
        preis: 1280,
        size: "28 Inch",
        target: "woman"
    },
];

//wieviel müssen sarahund nancy zahlen
for(let kunde of kunden){
    //console.log("kunde",kunden );
    //console.log("bestellung", kunden.bestellung );
    //console.log("name",kunden.name );
    
    let summe = 0;
    for(let produktname of kunde.bestellung){
    console.log(kunde.name, produktname);
   
//wieviel kostet der superRacer, bottle, Fahrrad?
    
    
    for(let produkt of orders){
        if(produktname === produkt.name){
        console.log("preis",produkt.preis);
        summe += produkt.preis; 
        
        }
       
    } 
    
}
console.log(`${kunde.name} muss ${summe} bezahlen`);
   
};


let current_email = "muwongelawrence44@gmail.com";

const shoes = [
    {
     _id: 1,
    title : "Weighing_scale 1",
    price:12000,
    description  :`This is one of the most performing weighing scale out there .try it today and testify the results.`,
    category: "air_mass",
    image : "/products/w1.jpg",
    numberInStock : 45,
    quantity : 0
   },

    {
        _id:2,
       title : "Weighing_scale 2",
       price:15000,
       description  :`This is one of the most performing weighing scale out there .try it today and testify the results.`,
        category: "small_mass",
        image : "/products/w2.jpg",
        numberInStock : 45,
        quantity : 0
    
    },

    {
        _id:3,
       title : "Weighing_scale 3",
       price:14000,
       description  :`This is one of the most performing weighing scale out there .try it today and testify the results.`,
        category: "heavy_mass",
        image : "/products/springScale.jpg",
        numberInStock : 45,
        quantity : 0
        
    },

    {
        _id:4,
       title : "Weighing_scale 4",
       price:15000,
       description  :`This is one of the most performing weighing scale out there .try it today and testify the results.`,
        category: "air_mass",
        image : "/products/w1.jpg",
        numberInStock : 45,
        quantity : 0
       

    },
       
    {
        _id:5,
       title : "Weighing_scale 5",
       price:12000,
       description  :`This is one of the most performing weighing scale out there .try it today and testify the results.`,
        category: "small_mass",
        image : "/products/w2.jpg",
        numberInStock : 45,
        quantity : 0
        
    },

    {
        _id:6,
       title : "Weighing_scale 6",
       price:12000,
       description  :`This is one of the most performing weighing scale out there .try it today and testify the results.`,
        category: "heavy_mass",
        image : "/products/springScale.jpg",
        numberInStock : 45,
        quantity : 0
        
    },

    {
        _id:7,
       title : "Weighing_scale 7",
       price:12000,
       description  :`This is one of the most performing weighing scale out there .try it today and testify the results.`,
        category: "heavy_mass",
        image : "/products/springScale.jpg",
        numberInStock : 45,
        quantity : 0
        
    },

    {
        _id:8,
       title : "Weighing_scale 8",
       price:12000,
       description  :`This is one of the most performing weighing scale out there .try it today and testify the results.`,
        category: "heavy_mass",
        image : "/products/springScale.jpg",
        numberInStock : 45,
        quantity : 0
        
    },
       
    


];

export  function getShoes(){
  return shoes;
}

export function getShoe(id){
    return shoes.find(s => s._id === id);
}

export function saveShoe(shoe){
    // console.log(shoe);
    let shoeInDb = shoes.find(s => s._id === shoe._id) || {};
    shoeInDb.title = shoe.title;
    shoeInDb.price = shoe.price;
    shoeInDb.description = shoe.description;
    shoeInDb.category = shoe.category;
    shoeInDb.numberInStock = shoe.numberInStock;
    
    if(!shoeInDb._id){
        shoeInDb._id = Date.now().toString();
        shoes.push(shoeInDb);
    }

    return shoeInDb;
}

export function getCurrentEmail(){
    return current_email;
}

export function setCurrentEmail(email){
    current_email = email;
    //console.log(current_email);
}
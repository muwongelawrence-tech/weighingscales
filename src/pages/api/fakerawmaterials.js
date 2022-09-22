
const url = "/rawmaterials/a.png";

const rawmaterials = [
    {
     id:"1",
    title : "contact Adhesive",
    price:62000,
    description  :`This is used to bond the two surfaces together
    `,
     category: "GUNDI",
     image : url,
     numberInStock:45,
     quantity: 0,
    },

    {
        id:"2",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together`,
        category: "GUNDI",
        image : url,
        numberInStock:45,
        quantity: 0,
    },

    {
        id:"3",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together.`,
        category: "GUNDI",
        image : url,
        numberInStock:45,
        quantity: 0,
    },

    {
        id:"4",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together`,
        category: "Premier",
        image : url,
        numberInStock:45,
        quantity: 0,
    },
       
    {
        id:"5",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together`,
        category: "Premier",
        image : url,
        numberInStock:45,
        quantity: 0,

    },
       
    {
        id:"6",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together`,
        category: "Premier",
        image : url,
        numberInStock:45,
        quantity: 0,
    },

       
    {
        id:"7",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together`,
        category: "Premier",
        image : url,
        numberInStock:45,
        quantity: 0,
    },
       
    {
        id:"8",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together`,
        category: "Premier",
        image : url,
        numberInStock:45,
        quantity: 0,
       
    },
       
    {
        id:"9",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together`,
        category: "Premier",
        image : url,
        numberInStock:45,
        quantity: 0,
      
    },
       
    {
        id:"10",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together`,
        category: "GUNDI",
        image : url,
        numberInStock:45,
        quantity: 0,
       
    },
       
    {
        id:"11",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together`,
       category: "GUNDI",
       image : url,
       numberInStock:45,
       quantity: 0,
       
    },
       
    {
        id:"12",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together.`,
        category: "GUNDI",
        image : url,
        numberInStock:45,
        quantity: 0,
       
    },
    
    {
        id:"13",
       title : "bond",
       price:12000,
       description  :`This is used to bond the two surfaces together`,
        category: "GUNDI",
        image : url,
        numberInStock:45,
        quantity: 0,
    },


];

export  function getRawMaterials(){
  return rawmaterials;
}

export function getRawMaterial(id){
    return rawmaterials.find(r => r.id === id);
}

export function saveRawMaterial(material){
    let materialInDb = rawmaterials.find(m => m.id === material.id) || {};
    materialInDb.title = material.title;
    materialInDb.price = material.price;
    materialInDb.description = material.description;
    materialInDb.category = material.category;
    materialInDb.numberInStock = material.numberInStock;
    
    if(!materialInDb.id){
        materialInDb.id = Date.now().toString();
        rawmaterials.push(materialInDb);
    }

    return materialInDb;
}
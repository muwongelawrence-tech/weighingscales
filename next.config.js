module.exports = {
    images : {
        domains:[
        "links.papareact.com", 
        "fakestoreapi.com" ,
        "images.unsplash.com",
        "thawing-headland-35196.herokuapp.com",
        "african-craft-shoes.herokuapp.com"
    ],
        
    },

    env:{
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
        flutterwave_key: process.env.FLUTTER_WAVE_KEY
    }
}
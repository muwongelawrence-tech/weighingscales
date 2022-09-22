
 const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req,res) => {
      const { items , email}  = req.body;
       //console.log(items);
      // console.log(email);
      
     const transformedItems = items.map(item => ({
        description: item.description,
        quantity :item.quantity,
        price_data : {
         currency : "ugx",
         unit_amount :item.price * 100,
         product_data :{
             name :item.title,
             images :[item.image]

         }
     }
      }));


  const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    shipping_rates: ['shr_1JIbm3CQIm1v4FksaKQQBUwW'],
    shipping_address_collection :{
     allowed_countries : ['GB' ,'US','CA']
    },
    line_items:transformedItems,
    mode:"payment",
    success_url:`${process.env.HOST}/success`,
    cancel_url : `${process.env.HOST}/checkout`,
    metadata:{
        email,
        images: JSON.stringify(items.map(item => item.image))
    }
  });

     res.status(200).json({ id: session.id });

};



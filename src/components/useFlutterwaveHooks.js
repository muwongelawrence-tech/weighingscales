import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function App({total , email }) {
  const config = {
    public_key: process.env.flutterwave_key,
    tx_ref: Date.now(),
    amount: total,
    currency: 'UGX',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email,
      phonenumber: '0755168391',
      name: 'Muwonge Lawrence',
    },
    customizations: {
      title: 'Pay Lawrence',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
     {/* <h1>Hello Test user</h1> */}

      <button
       className='button rounded-sm mt-3'
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Pay Now
      </button>
    </div>
  );
}
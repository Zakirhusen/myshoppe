import Script from "next/script";

const Payment = () => {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
      />
      <Script type="application/javascript" id="stripe-js" src="https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/BluSMU01785622758672.js" onLoad={async () => {
          let oId=Date.now();
          let data={
            amount:1,
            oId,
            email:"zakirhusesayed@gmail.com"
          }
          alert("this is alert");
          let result = await fetch("http://localhost:3000/api/preTransaction",{
            method:"post",
            body:JSON.stringify(data)
          });
          let res=await result.json()
          res=JSON.parse(res)
          console.log("response from payment page",res)
          console.log("res.body",res.body)
          let token=res.body.txnToken
          let subtotal = 20;
          var config = {
            root: "",
            flow: "DEFAULT",
            data: {
              orderId: oId /* update order id */,
              token:token /* update token value */,
              tokenType: "TXN_TOKEN",
              amount: subtotal  /* update amount */,
            },
            handler: {
              notifyMerchant: function (eventName, data) {
                console.log("notifyMerchant handler function called");
                console.log("eventName => ", eventName);
                console.log("data => ", data);
              },
            },
          };

          // if (window.Paytm && window.Paytm.CheckoutJS) {
          //   window.Paytm.CheckoutJS.onLoad(
              // function excecuteAfterCompleteLoad() {
                // initialze configuration using init method
                window.Paytm.CheckoutJS.init(config)
                  .then(function onSuccess() {
                console.log("executionAftercomplete")
                    // after successfully updating configuration, invoke JS Checkout
                    console.log("success is ")
                    window.Paytm.CheckoutJS.invoke();
                  })
                  .catch(function onError(error) {
                    console.log("error => ", error);
                  });
              // }
              // excecuteAfterCompleteLoad()
          //   );
          // }
        }}
      />
      <div className="min-h-screen">This is payment page</div>
    </>
  );
};
export default Payment;

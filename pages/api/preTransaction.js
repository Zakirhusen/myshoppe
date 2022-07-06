const https = require("https");
const PaytmChecksum = require("paytmchecksum");

export default async function hello(req, res) {
  if (req.method == "POST") {
    let resRes;
    const { amount, email, oId } = JSON.parse(req.body);
    let paytmParams = {};
    paytmParams.body = {
      requestType: "Payment",
      mid: process.env.NEXT_PUBLIC_MID,
      websiteName: "myshoppe",
      orderId: oId,
      callbackUrl: "https://localhost:3000/api/postTransaction",
      txnAmount: {
        value: amount,
        currency: "INR",
      },
      userInfo: {
        custId: email,
      },
    };

      /*
     * Generate checksum by parameters we have in body
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
     */
    let checksum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body),process.env.NEXT_PUBLIC_MKey);
    paytmParams.head = {
      signature: checksum,
    };

    const asyncCheckSum = () => {
      return new Promise((resolve, reject) => {

        let post_data = JSON.stringify(paytmParams);
        let options = {
          /* for Staging */
          hostname: "securegw-stage.paytm.in",
          /* for Production */ 
          // hostname: 'securegw.paytm.in',
          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_MID}&orderId=${oId}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };
         let response = "";
        let post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            resRes = response;
            console.log("Response: ", typeof response);
            console.log("Response: ", response);
            //  res.status(200).json(response)
            resolve(response);
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
    };
    let resultof = await asyncCheckSum();
    //   console.log('resultof',resultof);
    res.status(200).json(resultof);
  }
}




 
// **************************************************************************************

// const https = require("https");
// const PaytmChecksum = require("paytmchecksum");

// export default function hello(req, res) {
//   if (req.method == "POST") {
//     //   console.log('resultof',resultof);

// var paytmParams = {};

// paytmParams.body = {
//     "requestType"   : "Payment",
//     "mid"           : "BluSMU01785622758672",
//     "websiteName"   : "YOUR_WEBSITE_NAME",
//     "orderId"       : "ORDERID_987655",
//     "callbackUrl"   : "https://<callback URL to be used by merchant>",
//     "txnAmount"     : {
//         "value"     : "1.00",
//         "currency"  : "INR",
//     },
//     "userInfo"      : {
//         "custId"    : "CUST_001",
//     },
// };


// PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), "GwtQ@h6Zl7pwBIzO").then(function(checksum){

//     paytmParams.head = {
//         "signature"    : checksum
//     };

//     var post_data = JSON.stringify(paytmParams);

//     var options = {

//         /* for Staging */
// //         hostname: 'securegw-stage.paytm.in',

//         /* for Production */
//         hostname: 'securegw.paytm.in',

//         port: 443,
//         path: '/theia/api/v1/initiateTransaction?mid=BluSMU01785622758672&orderId=ORDERID_987655',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Content-Length': post_data.length
//         }
//     };

//     var response = "";
//     var post_req = https.request(options, function(post_res) {
//         post_res.on('data', function (chunk) {
//             response += chunk;
//         });

//         post_res.on('end', function(){
//             console.log('Response: ', response);
//         res.status(200).json(response);
//         });
//     });
//     post_req.write(post_data);
//     post_req.end();
// });
//     // res.status(400).json({success:"failure"});
//   }
// }
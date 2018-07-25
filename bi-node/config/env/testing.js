module.exports = {
    port : 3003,
    jwt: {
        secret: "BISecretKey",
        options: {expiresIn: 365 * 60 * 60 * 24} // 365 days
    },
    db : {
        mongo : {
            uri:"mongodb://localhost:27017/biDEv",
            options: {
                user: '',
                pass: ''
            }
        }
    },
    emailVericationLinkExpireTime : 365 * 60 * 60 * 24,//365 days
    sendGrid : {
        apiKey : "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",
        defaultFromAddress:'rajesh.d@mtwlabs.com'
    },
    mail:{
        defaultFromAddress:'noreply@goodclap.com',        
        mailGun: {
            apiKey:"key-6618dcec814f4b58830d9532b953c7d2",
        },
    },
    paymentGateway:{
        paytm:{
            MID: 'HRFoot75935590680769',
            WEBSITE: 'goodclapWEB',
            CHANNEL_ID: 'WEB',
            INDUSTRY_TYPE_ID: 'Retail',
            MERCHANT_KEY : 'gDcWkFq1TzDf6gmU'
        },
        razorPay:{
            keyId:'rzp_test_TDxci7fKYbZ9w1',
            keySecret:'VQVLM4qNT5IMjzxHn8oIKn2p'
        },
        payPal:{

        }
    },
    aws:{
        bucketName:'rajeshfbdemo',
        accessKey:'AKIAJNZHDTEWQ7KHSIMA',
        secretKey:'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',
        region:'ap-southeast-1',
        presignedUrlExpiration : 24*60*60 //seconds
    },
    facebook: {
        clientId: 220939165057827,
        clientSecret: "41942af58917cf1732f3e0daf86e9fcf"
    },
    baseUrl:'http://13.250.11.197'+':'+3003,
    blogLink:"goodclapbloglink",
    projectDisaprovalLink:"projectDisaprovalLink"

}
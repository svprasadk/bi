module.exports = {
    port: 3001,
    jwt: {
        secret: "BISecretKey",
        options: { expiresIn: 365 * 60 * 60 * 24 } // 365 days
    },
    db: {
        mongo: {
            uri: "mongodb://localhost:27017/biDev",
            options: {
                user: '',
                pass: ''
            }
        }
    },
    emailVericationLinkExpireTime: 365 * 60 * 60 * 24,//365 days
    sendGrid: {
        apiKey: "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",
        defaultFromAddress: 'info@bi.com'
    },
    mail: {
        defaultFromAddress: 'noreply@bi.com',
        mailGun: {
            apiKey: "key-6618dcec814f4b58830d9532b953c7d2",
            domainName: "mg.goodclap.com"
        },
    },
    paymentGateway: {
        paytm: {
          /*  MID: 'HRFoot75935590680769',
            WEBSITE: 'goodclapWEB',
            CHANNEL_ID: 'WEB',
            INDUSTRY_TYPE_ID: 'Retail',
            MERCHANT_KEY: 'gDcWkFq1TzDf6gmU'*/
            MID: 'HRFoot57124643853809',
            WEBSITE: 'HRFoWEB',
            CHANNEL_ID: 'WEB',
            INDUSTRY_TYPE_ID: 'Retail109',
            MERCHANT_KEY: '4PL_KItkbKRzn1ZS'
        },
        // razorPay: {
        //     keyId: 'rzp_test_TDxci7fKYbZ9w1',
        //     keySecret: 'VQVLM4qNT5IMjzxHn8oIKn2p'
        // },
        razorPay: {
            keyId: 'rzp_live_Izjz9AK46fycyF',
            keySecret: 'j8OqzHoH6uXzRm7FXFQmnw9l'
        },
        payPal: {
            clientId: 'AcicHSK1cWcFxFnE8d9_rxoH9H1YBnc_ftRRlz3Vn3e64RUI2M92anhMhJHhBPRn_k1pqdF5KKnLZIY2',
            clientSecret: 'EEi9p3EUxdYhNBZqc55wRabYG5zljX1k7zjMcKyPVWottWYHAq6p4VELI39d5S8evt2aLOaXE94NGmw6'
        }
    },
    aws: {
        bucketName: 'goodclapprod',
        accessKey: 'AKIAJ6HB7ADUOLLIYIGQ',
        secretKey: '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',
        region: 'ap-south-1',
        presignedUrlExpiration: 24 * 60 * 60 //seconds
    },
    facebook: {
        clientId: 220939165057827,
        clientSecret: "41942af58917cf1732f3e0daf86e9fcf"
    },
    msg91: {
        clientId: "GDCLAP",
        clientSecret: "128728AIBkdUGch58070302",
        ROUTE_NO: "1"
    },
    baseUrl: 'http://localhost:' + 3001,
    blogLink: "goodclapbloglink",
    projectDisaprovalLink: "projectDisaprovalLink",
    adminEmail:"dasireddinaresh@gmail.com"
}


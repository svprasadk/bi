module.exports = {
    port: 3003,
    jwt: {
        secret: "BI@2018",
        options: { expiresIn: 60 * 60 * 24 } // 1 day
    },
    db: {
        mongo: {
            uri: "mongodb://localhost:27017/biProd",
            options: {
                user: '',
                pass: ''
            }
            /*options: {
                user: 'bi',
                pass: 'bi2018'
            }*/
        }
    },
    emailVericationLinkExpireTime: 1 * 60 * 60 * 24,//1 days
    sendGrid: {
        apiKey: "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"
    },
    mail: {
        defaultFromAddress: 'noreply@goodclap.com',
        mailGun: {
            apiKey: "key-6618dcec814f4b58830d9532b953c7d2",
            domainName: "mg.goodclap.com"
        },
    },
    paymentGateway: {
        paytm: {
            MID: 'HRFoot57124643853809',
            WEBSITE: 'HRFoWEB',
            CHANNEL_ID: 'WEB',
            INDUSTRY_TYPE_ID: 'Retail109',
            MERCHANT_KEY: '4PL_KItkbKRzn1ZS'
        },
        razorPay: {
            keyId: 'rzp_live_Izjz9AK46fycyF',
            keySecret: 'j8OqzHoH6uXzRm7FXFQmnw9l'
        },
        payPal: {
            clientId: 'AXW9WVr-vHkn2LcCo1FZGjRFF7ANE9eLvxIqM6d90wwUZj8Jt5YppcPg_VvqvXbIgw8BMhuxFYquZIuq',
            clientSecret: 'EP2m4NTNStnJXfsUP4F-m8ahINc9VrL7zsGwBPtbHjyRgLtalDSlm4l_M68ukW7XCw0O4QOtVl9gR813'
        }
    },
    aws: {
        bucketName: 'goodclapprod',
        accessKey: 'AKIAJ6HB7ADUOLLIYIGQ',
        secretKey: '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',
        region: 'ap-south-1',
        presignedUrlExpiration: 24 * 60 * 60 //seconds
    },
    // facebook: {
    //     clientId: 340713712966670,
    //     clientSecret: "1536674818bea37e3ed4b6b35128e9e6"
    // },
    facebook: {
        clientId: 259159461286056,
        clientSecret: "887d6b02e6c377959ed541a170a7083b"
    },
    msg91: {
        clientId: "GDCLAP",
        clientSecret: "128728AIBkdUGch58070302",
        ROUTE_NO: "1"
    },    
    baseUrl: 'https://projects.goodclap.com',    
    blogLink: "goodclapbloglink",
    projectDisaprovalLink: "projectDisaprovalLink",
    adminEmail:"goodclap1@gmail.com"
}
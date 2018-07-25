let jwt = require('jsonwebtoken');
let config = require('./../config/config');

let generatePassword = require('generate-password');

let awsLib = require('./../config/libs/aws');

let uuidv4 = require('uuid/v4');

var ShortUniqueId = require('short-unique-id');

var uid = new ShortUniqueId();

let keyForPasswordEncryption = "RightVendorsSecret";

var Cryptr = require('cryptr'),
    cryptr = new Cryptr(keyForPasswordEncryption);

let generateJWTForUser = (userData) => {
    return jwt.sign({_id:userData._id,role:userData.role},config.jwt.secret,config.jwt.options);
}

let decodeJWTForUser = (token)=>{
    return jwt.verify(token,config.jwt.secret);
}

let encryptPassword = (password)=>{
    return cryptr.encrypt(password);
    // return password;
}

let decryptPassword = (encryptedPassword)=>{
    return cryptr.decrypt(encryptedPassword);
}

let generateUniqueId = ()=>{
    return uuidv4(); // ⇨ 'df7cca36-3d7a-40f4-8f06-ae03cc22f045'
}

let generateUserEmailVerificationLink = (userData)=>{


    let token = jwt.sign({email:userData.email},config.jwt.secret,{expiresIn: config.emailVericationLinkExpireTime});

    // return 'http://localhost:4200/auth/verify-email/' + token;
    return config.baseUrl + '/auth/verify-email/' + token;

}


let generateVendorInvitationLinkForBuyer = (buyerId,vendorEmail)=>{


    let token = jwt.sign({buyerId,vendorEmail},config.jwt.secret,{expiresIn: config.vendorInvitationLinkExpireTime});

    return config.baseUrl+'/invite-vendor/'+token; 

}

let getUserEmailFromVerificationToken = (token)=>{
    
    return new Promise((resolve,reject)=>{
        let decodedData;
        try{
            decodedData =  jwt.verify(token,config.jwt.secret);
            if(decodedData.email){
                resolve(decodedData.email);
            }else{
                reject("Invalid token");
            }
        }catch (err){
           reject("Invalid/Expired token");
        }
    });
}

let generateRandomPassword = ()=>{
    return generatePassword.generate({
        length: 8,
        numbers: true
    });
}


let getDayFromDate = (date)=>{
    try{
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[new Date(date).getDay()];
    }catch(err){
        console.log(err);
        throw err;
    }
}


let getUniqueBookingID = ()=>{
    return "BOOK"+uid.randomUUID(8).toLowerCase();
}

let getUniquePaymentID = ()=>{
    return "PAYMENT"+uid.randomUUID(8).toLowerCase();    
}

let getUniqueOrderID = ()=>{
    return "ORDER"+uid.randomUUID(10).toLowerCase();        
}


function formatUserData(userData) {
    if(userData){
        if(userData.password)
            delete userData.password;
        if (userData.isEmailVerified)
            delete userData.isEmailVerified;  
        if (userData.profileImageUrl) {
            userData.profileImageKey = userData.profileImageUrl;
            userData.profileImageUrl = awsLib.getPresignedUrlOfAfile(userData.profileImageUrl);
        }
    }
    return userData;
}

let generatePasswordResetLinkForUser = (email)=>{
        let baseUrl = config.siteUrl;
        return baseUrl+"/auth/reset-password/"+jwt.sign({email:email},config.jwt.secret,{expiresIn: 10*60});//10 mins
}

let decodePasswordResetToken = (token)=>{
    return new Promise((resolve,reject)=>{
        try{
        let decodedData =  jwt.verify(token,config.jwt.secret);
        resolve(decodedData);
        }catch(err){
            reject("Invalid or Expired");
        }
    });
}

module.exports = {
    generateJWTForUser,
    decodeJWTForUser,
    encryptPassword,
    decryptPassword,
    generateUniqueId,
    generateUserEmailVerificationLink,
    generateVendorInvitationLinkForBuyer,
    getUserEmailFromVerificationToken,
    generateRandomPassword,
    getDayFromDate,
    getUniqueBookingID,
    getUniquePaymentID,
    getUniqueOrderID,
    formatUserData,

    generatePasswordResetLinkForUser,

    decodePasswordResetToken
}
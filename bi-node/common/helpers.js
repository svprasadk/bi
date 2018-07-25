"use strict";

let _ = require("underscore");


var Helper = function () {
};

Helper.prototype.isValidEmail = function (email) {
    return _.isString(email) && /^\S+@\S+\.\S+/.test(email);
}

Helper.prototype.isValidPhoneNumber = function (phNo) {
    return /[0-9]{10}/.test(phNo);
}

Helper.prototype.isValidPasword = function (password) {
    return password.length >= 6;
}

module.exports = new Helper();

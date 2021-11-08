var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var t = function (medication) {
    var map = {
        medication_id: 'prescription_id',
        display_name: 'drug_name',
        directions: 'instructions',
        notes: 'instructions',
        quantity: 'dispense'
    };
    return Object.keys(medication).reduce(function (carry, k) {
        var _a;
        return __assign(__assign({}, carry), (_a = {}, _a[(map[k] !== undefined ? map[k] : k)] = medication[k], _a));
    }, {});
};
var medication = {
    medication_id: 12345,
    display_name: "Lipitor",
    strength: "20 mg",
    route: "by mouth",
    directions: "Take 1 tablet daily",
    quantity: 30
};
var result = t(medication);
console.log(result);
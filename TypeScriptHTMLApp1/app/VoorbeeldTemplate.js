var VoorbeeldTemplate = (function () {
    function VoorbeeldTemplate() {
    }
    VoorbeeldTemplate.prototype.setValues = function (model) {
        return "\n\t\t\t<div>Naam: " + model.name + "</div>\n\t\t\t<div>Leeftijd: " + model.age + "</div>\n\t\t";
    };
    return VoorbeeldTemplate;
}());
//# sourceMappingURL=VoorbeeldTemplate.js.map
var AbstractView = (function () {
    function AbstractView(elementClass) {
        this.elementClass = elementClass;
    }
    AbstractView.prototype.D = function (model, template) {
        var tmpl = template.setValues(model);
        document.querySelector(this.elementClass).appendChild(tmpl);
    };
    ;
    return AbstractView;
}());
//# sourceMappingURL=AbstractView.js.map
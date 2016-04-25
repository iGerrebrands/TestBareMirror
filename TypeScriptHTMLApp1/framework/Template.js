var Template = (function () {
    function Template(element, scope, html) {
        this.element = element;
        this.scope = scope;
        this.html = html;
        var self = this;
        HtmlTranspiler.replaceHashes(this.html, this.scope, function (transpiledHtml) {
            document.querySelector(self.element).innerHTML = transpiledHtml;
        });
    }
    Template.prototype.draw = function () {
        document.querySelector(this.element).innerHTML = this.html;
    };
    return Template;
}());
//# sourceMappingURL=Template.js.map
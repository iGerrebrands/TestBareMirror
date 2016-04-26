var Template = (function () {
    function Template(element, scope, html) {
        this.element = element;
        this.scope = scope;
        this.html = html;
        var self = this;
        HtmlTranspiler.replaceHashes(this.html, this.scope, function (transpiledHtml) {
            var allElements = document.querySelectorAll(self.element);
            for (var i = 0; i < allElements.length; i++) {
                allElements[i].innerHTML = transpiledHtml;
            }
        });
    }
    return Template;
}());
//# sourceMappingURL=Template.js.map
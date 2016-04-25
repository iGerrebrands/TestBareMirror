var Component = (function () {
    function Component(element, html, scope) {
        this.element = element;
        this.html = html;
        this.scope = scope;
        this.template = new Template(this.element, this.scope, this.html);
    }
    return Component;
}());
//# sourceMappingURL=Component.js.map
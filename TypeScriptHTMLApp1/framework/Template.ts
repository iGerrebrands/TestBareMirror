class Template {
    
    constructor(private element: string, public scope: any, public html: string) {
        let self = this;
        HtmlTranspiler.replaceHashes(this.html, this.scope, function (transpiledHtml) {
            document.querySelector(self.element).innerHTML = transpiledHtml;
        });
    }

    draw() {
        document.querySelector(this.element).innerHTML = this.html;
    }

}
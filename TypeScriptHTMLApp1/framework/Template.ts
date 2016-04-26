class Template {
    
    constructor(private element: string, public scope: any, public html: string) {
        let self = this;
        HtmlTranspiler.replaceHashes(this.html, this.scope, function (transpiledHtml) {
            let allElements = document.querySelectorAll(self.element);
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].innerHTML = transpiledHtml;
            }
        });
    }

}
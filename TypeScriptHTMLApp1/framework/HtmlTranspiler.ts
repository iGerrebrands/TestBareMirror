class HtmlTranspiler {

    static replaceHashes(html: string, scope: Scope, callback: any): void {
        let firstPos = html.indexOf('$');
        if (firstPos !== -1) {
            firstPos++;
            let endPos = html.indexOf('$', firstPos);
            let replateText = html.substring(firstPos, endPos);

            // To split dots for objects
            let splitDots = replateText.split('.');
            let transpiledVar = scope.$[replateText];
            if (splitDots.length > 0) {
                transpiledVar = scope.$[splitDots[0]];
                for (let i = 1; i < splitDots.length; i++) {
                    transpiledVar = transpiledVar[splitDots[i]];
                }
            }
            
            let transpiledHtml = html.replace('$' + replateText + '$', transpiledVar);
            HtmlTranspiler.replaceHashes(transpiledHtml, scope, callback);
        } else {
            callback(html);
        }
    }
}
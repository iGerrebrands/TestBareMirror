var HtmlTranspiler = (function () {
    function HtmlTranspiler() {
    }
    HtmlTranspiler.replaceHashes = function (html, scope, callback) {
        var firstPos = html.indexOf('$');
        if (firstPos !== -1) {
            firstPos++;
            var endPos = html.indexOf('$', firstPos);
            var replateText = html.substring(firstPos, endPos);
            // To split dots for objects
            var splitDots = replateText.split('.');
            var transpiledVar = scope.$[replateText];
            if (splitDots.length > 0) {
                transpiledVar = scope.$[splitDots[0]];
                for (var i = 1; i < splitDots.length; i++) {
                    transpiledVar = transpiledVar[splitDots[i]];
                }
            }
            var transpiledHtml = html.replace('$' + replateText + '$', transpiledVar);
            HtmlTranspiler.replaceHashes(transpiledHtml, scope, callback);
        }
        else {
            callback(html);
        }
    };
    return HtmlTranspiler;
}());
//# sourceMappingURL=HtmlTranspiler.js.map
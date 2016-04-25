class Component {

    protected template: Template;

    constructor(private element: string, private html: string, public scope: Scope) {
        this.template = new Template(this.element, this.scope, this.html);
    }
    
}
class AnotherComponent extends Component {

    static html: string = `<ul>
        <li><span>$listItem.id$</span>&nbsp;<span>$listItem.title$</span></li>
    </ul>`;

    constructor() {
        let scope = new Scope({});
        scope.$.listItem = { id: 1, title: 'Some List Item' };
        super(".another-component", AnotherComponent.html, scope);
    }

}
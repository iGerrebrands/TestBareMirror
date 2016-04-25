class TestComponent extends Component {

    static html: string = `<h3>Name: $user.name$ $user.age$</h3>`;

    constructor() {
        let scope = new Scope({});
        scope.$.user = { name: 'Ian' };
        scope.$.user.age = 23;
        super(".content", TestComponent.html, scope);
    }

}
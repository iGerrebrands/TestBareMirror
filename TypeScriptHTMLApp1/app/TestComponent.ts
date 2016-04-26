class TestComponent extends Component {

    static html: string = `<h3>Name: $user.name$, Age: $user.age$</h3>`;

    constructor() {
        let scope = new Scope({});
        scope.$.user = { name: 'Ian', age: 23 };
        super(".test-component", TestComponent.html, scope);
    }

}
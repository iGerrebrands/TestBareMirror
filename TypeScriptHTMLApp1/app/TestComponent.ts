class TestComponent extends Component {

    static html: string = `
    <h2>Test Component</h2>
    <h3>Name: $user.name$, Age: $user.age$, Gender: $user.gender$</h3>`;

    constructor() {
        let scope = new Scope({});
        scope.$.user = { name: 'Ian', age: 23, gender: 'Male' };
        super(".test-component", TestComponent.html, scope);
    }

}
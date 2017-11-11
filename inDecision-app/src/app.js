const appRoot = document.getElementById('app');

const app = {
    title: 'My inDecision App',
    subtitle: 'The Best App Eva',
    options: ['Option One', 'Option Two']
}

const template = (

    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
    </ol>
</div>
)

const user = {
    name: 'Brandon',
    age: 18,
    location: 'Goodyear,AZ'
}



function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

const template2 = (
    <div>
        <h1>Name: {user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age > 17) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

ReactDOM.render(template, appRoot)

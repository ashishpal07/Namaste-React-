# Namaste React 

## Episode 1 -
1. created html file and created element with javascript and appendchild to that element by javascript
2. React cn be added in project/html file by REACT CDN link in script tag
3. create element & create root from React and ReactDOM and render element inside root.
4. Segregate javscript code from HTML file to App.js file.
5. created nested HTML elements from React and render in root.
6. file ordering is impoertant in html file eg (link css, inside body after root element, add CDN link in script tag, add javascript file by using script tag)

## Episode 2 -
1. npm init -> will create package.json file.
2. ```npm i -D parcel``` :- there are 2 type of dependancies 1 is normal and other is dev dependancy which is only required in development environment and normal dependancy is needed on production as well.
after running ```npm i -D parcel``` this command we will see package-lock.json file 
    1. inside of package.json file dev dependacy will be added 
    2. created pachage-lock.json
    3. there is versions of library is start with (^) which meanse if minor update will come in future it will automatically updgrate to that version.
    eg. (^2.8.3) => (^2.8.4) - this is minor updgrade.
    4. there is versions of library is start with (~) which meanse if major update will come in future it will automatically updgrate to that version.
    eg. (~2.8.3) => (~3.0.1) - this is major updgrade (this is not good practice).
3. package-lock.json => It keeps track of exact version of library gets installed/in use.
4. package.json => It keeps track all dependacy install will minor/major (^/~) update sign.
5. After installing parcel we have run ```npx parcel index.html``` to execute our app.
6. Now, taking react from CDN link is not good practice so, now we will install them
    ```npm i React ReactDOM``

    ## parcel -
    1. HRM => Hot Reload Module
    2. Dev Build
    3. Local Server
    4. File Watcher Algorithm written in C++

## Episode 3 :-
1. JSX 
```
// React.createElement => ReachElement is JS-object => HTMLElement(render)
const heading1 = React.createElement("h1", {id: "heading"}, "Heading 1");

// jsx => (using bable) React.createElement => ReachElement is JS-object => HTMLElement(render)
const jsxHeading = <h1>Heading from JSX!</h1>

// both jsx and reactElement are nothing bu js-object 
```
2. Functional component
3. Component composition - call component inside component

## Episode 4 :-
Build a Food Ordering App
Think of a cool name for your app
Build an AppLayout
Build a Header Component with Logo & Nav Items & Cart
Build a Body Component
Build RestaurantList Component
Build RestaurantCard Component
Use static data initially
Make your card dynamic(pass in props)
Props - passing arguments to a function - Use Destructuring & Spread operator
Render your cards with dynamic data of restaurants
Use Array.map to render all the restaurants

## Episode 5 :-
Types of export/ inport

1. named export/import
    export const component;
    import {component} from "path"

2. default export/import
    export default component;
    import component from "path"
    in 1 file you can do only one default export

3. React Hooks
    - Nothing but normal JS utility function
    - 2 very important react hooks are :
        - useState() - whenever a state veriable update react re-renders the component
        - userEffect()

4. Reconcilliation (React Fiber) - [Why react is fast ?]
    virtual DOM - is the representation of Actual DOM & it is normal JS-Object
    Actual DOM - 
        <div>
            <p>
                <span>
                    HI
                </span>
            </p>
        </div>

    Diff-Algorith - this finds the diffrerence between 2 virtual DOM (current and previous)
    are render(update) the UI.
    
## Episode 6 :-
    1. Microservice architecture and Monolith architecture ?
        ```Microservice``` => also known as the microservice architecture - is an architectural and organizational approach to software development where software is composed of small independent services like database, server or a UI of the application, that communicate over well-defined APIs. These services are owned by small, self-contained teams. Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features. means we are dividing software into small, well-defined modules enables teams to use functions for multiple purposes.

        Benefits of Microservices:
            Flexible Scaling
            Easy Deployment
            Technological Freedom
            Reusable Code
            Resilience
        
        ```Monolith``` => Monolith architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming. means we are not dividing software into small, well-defined modules, we use every services like, database, server or a UI of the application, in one Application file.

    2. difference between microservice and monolith architecture ?
        A: With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

        With a microservices architecture, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

    3. Why do you need useEffect() Hook ?
        useEffect Hook is javascript function provided by react. The useEffect Hook allows you to eliminate side effects in your components. Some examples of side effects are: fetching API data, directly updating the DOM, and setting up subscriptions or timers, etc can be lead to unwarranted side-effects. useEffect accepts two arguments, a callback function and a dependency array. The second argument is optional.

        ``` useEffect(() => {}, []) ```

        The () => {} is callback function and [] is called a empty dependency array. If anything that we pass (suppose currentState) inside the [] it trigger the callback function and changes the state of the application.

        ```
        useEffect(() => {
            setCurrentState("true");
        }, [currentState])
        ```

        If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

        ```useEffect(() => {})```

    4. What is the optional chaining ?
        Optional Chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null , it returns undefined instead of throwing an error. Optional Chaining (?.) is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns undefined.
    
    5. What is Shimmer UI ?
        Shimmer UI resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load. Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.
    
    6. What is Conditional Rendering? explain with a code example ?
        Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them. for example:

        ```
            // Using Ternary operator as a shorthand way or writing an if-else statement
            {isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
            // Using an if…else Statement
            {
            (if (isLoggedIn) {
                return <UserGreeting />;
            }else {
                return <GuestGreeting />;
            })
            }
            // Using Logical &&
            {isLoggedIn && <button>Logout</button>}
        ```

    7. What is CORS ?
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

    8. What is async and await ?
    9. What is await data.json() ?

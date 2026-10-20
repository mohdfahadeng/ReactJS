function customRender(reactElements,container) {
    // const domElement = document.createElement(reactElements.type)
    // domElement.innerHTML = reactElements.children
    // domElement.setAttribute("href",reactElements.props.href)
    // domElement.setAttribute("target", reactElements.props.target)
    // container.appendChild(domElement)


    const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElements.children
    for (const prop in reactElements.props) {
       if (prop === "children") continue;
       domElement.setAttribute(prop, reactElements.props[prop])
        
    }
    container.appendChild(domElement);

}



const reactElements = {
    type : "a" ,
    props : {
        href : "https://google.com",
        target : "_blank",

    },
    children : "Click me Visit Google"


};

const mainContainer=document.querySelector("#root");

customRender(reactElements,mainContainer);

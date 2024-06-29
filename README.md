#This is the react course episode 

#parcel
- Dev build
- local server
- HMR -Host Module Replacement
- File matching Algorithm-written in C++
- caching -faster Builds
- Image Optimization
- minification
- Bundling
- compress
- Differentiate Bundling
- Diagnostic
- Different dev and product bundles






























// //Epiosode -3 --ch(4)

// // React Element
// const Head = () =>(               //converting React element to the functional component
// <h1 className="heading">
//   Namaste React using jsx🚀</h1>
// );

// //React functional component

// const HeadingComponent = () =>{
//     return <h1 className="heading">Namaste React using Functional component🚀</h1>
// };

// const HeadingComponent2 = () =>(
//     <div>
//         <Head/>
//     <h1 className="heading">Namaste React using Functional component2🚀</h1>
//     </div>
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent2/>);







// Episode 3 --ch-03
// learn from begin
//create  React Element => javascript(object) => HtmlElement(render)
  
// const heading=React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React🚀"
// );

// console.log(heading);
 

//jsx =>babel transpiled it into React.createElement => ReactElement-js object => HtmlElement(render)

// const jsxheading = <h1 id="heading">Namaste React using jsx🚀</h1>
// console.log(jsxheading);

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);



//Episode 2

// const parent=React.createElement("div",{id:"parent"},[
//         React.createElement("div",{id:"child"},
//             [React.createElement("h1",{},"Hello Bharath❤️"),
//             React.createElement("h2",{},"I'm h2 tag")
//         ]),
//         React.createElement("div",{id:"child2"},
//             [React.createElement("h1",{},"I'm h1 tag"),
//             React.createElement("h2",{},"I'm h2 tag")
//         ])
// ]);

// console.log(parent);  //return  object
// const root=ReactDOM.createRoot(document.getElementById("root"));
    

// root.render(parent);

/*
<div id="parent">
    <div id="child">
    <h1> I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
    </div>
</div>    
*/
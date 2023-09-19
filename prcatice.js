// REACT
//! This heading constant is known as a JSX expression. React can use it to render that <h1> tag in our app.
// const heading = <h1>Mozilla Developer Network</h1>;
//! The JSX approach allows us to nest our elements within each other, just like we do with HTML:
// const header = (
//   <header>
//     <h1>Mozilla Developer Network</h1>
//   </header>
// );
//! When compiled (using a tool like Babel or Parcel), our header expression would look like this:
// const header = React.createElement(
//   "header",
//   null,
//   React.createElement("h1", null, "Mozilla Developer Network"),
// );
// !
// jsx is converted by babel transpiler into html
// !
// we can use values of string, number in variables but not objects and boolean values
// if we pass array to a variable and then print it  then it will combine all the values of array into a string .
// ! useEffect
// useEffect hook function is run initially when the component first loads and thereafter whenever re-render of the Dom take place or data or state changes.
// inside useEffect function we could do something like fetch data or communicate with some kind of authentication services and these things are known as side effects.
//  useEffect takes two arguments a callback function and an dependency array.
// useEffect( () => {} , [] ); [] empty array means it will only runs the function after the first initial render thereafter if state changes it won't run the function again

// ! using CSS by making it a module
// App.module.css //* change the file name and it it will become CSS module style sheet
// import styles from "./App.module.css";
// className = {styles.App} //* include this in place of string like "App" in className
// className = {styles.name}

// ! Ternanry Operation
// const age = 17
// {age >= 18 ?  <h1> over age </h1> : <h1> under age </h1> }
//* Styling with ternary operator
// const isGreen = False;
// <h1 style = {{color: isGreen ? "green" : "red"}}> Show Color </h1>
// while using inline CSS keep in mind that properties like background-color
// does not required '-' in between instead we use backgroundColor: "white"
// and also we have to mention color in double qoutes
//* Another way is to use && 
// {isgreen && <button> Click Me! </button>}
// if isGreen is true then a button will show up else it will not be shown.

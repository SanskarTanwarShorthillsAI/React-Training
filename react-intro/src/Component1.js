import {useState} from 'react'
function Component1() {

  const subject = "React";
  const title = "Welcome to new blog"
  // const person = {"name":"sanskar", "age":50} //! printing this will show error
  const link = "https://www.google.com"
  const clickHandler = (e) => {
    console.log("Hello, Everyone!", e);
  }

  const handleClickAgain = (name,e) =>{
      console.log('hello '+ name, e.target)
  }

  const [name, setName] = useState("Sanskar")
    const [age, setAge] = useState(25)

  const clickHandler2 = (e) => {
        setName("Mario")
        setAge(30)
  }

  return (
    <div className="App"> 
    
      <div className="content">

          <h1>{title}</h1>
          <p> Favourite subject is {subject}</p>
          {/* <p>{person}</p> */}

          <p style={{
            color:"white",
            backgroundColor: "black",
            borderRadius: "8px"
          }}>
            {10}
          </p>
          <p>{"Hello, Friends"}</p>
          <p>{ [1,2,3,4,5] }</p>
          <p> { Math.random()*10 } </p>
          <a href={link}>Google</a>
      </div>

      {/* //! Event Handle */}
      <div className="home">
            <h2>HomePage</h2>
            <button onClick={clickHandler}> Click Me </button>
            <button onClick={ (e) => {handleClickAgain("sanskar", e)}}> Click Me Again</button>
      </div>
      <div className="home-second">
          <h2>HomePage</h2>
          <p>{name} is {age} years old</p>
          <button onClick={clickHandler2}> Click Me </button>
      </div>

    </div>
  );
}

export default Component1;

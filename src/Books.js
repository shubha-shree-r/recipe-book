function Book(props) {
    console.log(props.book)

    function clickHandler (){
        alert("hello")
    }
    return (
      <div>
        <h1>{props.book.title}</h1>
        <h2>{props.book.authoe}</h2>
        <button onClick={clickHandler}>Click Me Here</button>
      </div>
    );
  }

  export default Book;
function Greet(props){
  return <div className="greet">
    <h1 className="title">{props.greeting}</h1>
    <p>
      <small>
        <strong>It is {new Date().toLocaleTimeString(props.locale)} now!</strong>
      </small>
    </p>
  </div>
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const greeting = "Good night Mr. Niladri!";
const locale = "en-in";
rootElement.render(<Greet greeting={greeting} locale={locale} />);
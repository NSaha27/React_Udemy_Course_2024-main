import "bootstrap/dist/css/bootstrap.min.css";

function ErrorHandler() {
  return (
    <div className="p-2 m-1 bg-danger">
      <h5 className="text-light text-center">
        sorry, no food is available now!
      </h5>
    </div>
  );
}

export default ErrorHandler;

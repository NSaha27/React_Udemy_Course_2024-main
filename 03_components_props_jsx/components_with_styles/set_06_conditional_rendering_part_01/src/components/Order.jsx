function Order(){
  return <div id="order">
    <h2 className="title"><span>Order</span></h2>
    <div className="order-form-container">
      <form action="" method="post">
        <div className="order-form">
          <p>
            <label htmlFor="name">Name</label> <br />
            <input type="text" name="name" id="name" />
          </p>
          <p>
            <label htmlFor="delAddress">Delivery Address</label> <br />
            <textarea name="delAddress" id="delAddress" rows={7}></textarea>
          </p>
          <p>
            <label htmlFor="contact">Contact No.</label> <br />
            <input type="text" name="contact" id="contact" />
          </p>
          <p>
            <label htmlFor="email">Email</label> <br />
            <input type="email" name="email" id="email" />
          </p>
          <p>
            <button type="submit" className="btn">Order Now</button>
          </p>
        </div>
        <div className="order-details">
          <h2>Order Details -</h2>
          <div>
            <p>Items:</p>
            
          </div>
        </div>
      </form>
    </div>
  </div>
}

export default Order;
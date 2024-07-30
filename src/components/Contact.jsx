

const Contact = () => {
  return (
    <>
     <h4 className="mb-3 mt-3 text-center"> <span>Fill this Form to Connect with Us!</span></h4>
    <form>
        <div className="mb-3">
    <label for="inputName" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="inputName"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div className="mb-3">
    <label for="text" className="form-label">Your Message</label>
    <textarea name="text-area"  className="form-control" id="text" rows="6" col="30"></textarea>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
</>
  )
}

export default Contact


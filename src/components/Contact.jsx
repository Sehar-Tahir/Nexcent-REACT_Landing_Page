import { useState } from "react"


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  return (
    <>
     <h4 className="mb-3 mt-3 text-center"> <span>Fill this Form to Connect with Us!</span></h4>
    <form>
        <div className="mb-3">
    <label for="inputName" className="form-label">Full Name</label>
    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="inputName"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div className="mb-3">
    <label for="text" className="form-label">Your Message</label>
    <textarea name="text-area" required value={text} onChange={(e) => setText(e.target.value)} className="form-control" id="text" rows="4" col="30"></textarea>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
<span><p className="text-center fw-bold">{name}</p></span>
<span><p className="text-center fw-bold"> {email}</p></span>
<span><p className="text-center fw-bold"> {text}</p></span>
</>
  )
}

export default Contact


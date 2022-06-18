
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
      <form>
        <div>
          <h2>Input fields with borders</h2>
          <label for="fname">First Name</label><input type="text" id="fname" name="fname" />
          <label for="lname">Last Name</label>
          <input type="text" id="fname" name="fname" />






        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <Button type="button" variant="primary">envoyer</Button>




      </form>
    </div>
  )
}

export default App;

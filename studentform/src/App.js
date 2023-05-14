import logo from './logo.svg';
import './App.css';
import InputCustom from './InputCustom';
import SelectCustom from './SelectCustom';

function App() {
  return (
    <div className="App">
       <div class="container">
      <div>
        <div class="header">
          <h1>Student Registeration Form</h1>
          <hr color="#fff" />
        </div>

        <form action="" class="bieumau">
          <div>
            Firstname<br />
           <InputCustom type={'text'} name={'FistName'} placeholder="FirstName"/>
            <br /><br />
            Lastname:<br />
            <InputCustom type={'text'} name={'Lastname'} placeholder="Lastnamee"/>
            <br />
            Middlename:<br />
            <InputCustom type={'text'} name={'Middlenamee'} placeholder="Middlename"/>
            <br /><br />
           
          </div>
          <div class="khoahoc">
            <label for="lang-select">Course:</label>
            <select name="lang" id="lang-select">
              <option value="">Coure</option>
              <option value="Full-stack">Full-stack</option>
              <option value="Back-end">Back-end</option>
              <option value="Front-end">Front-end</option>
            </select>
          </div>
          <br />
          Gender:
          <input type="radio" name="gioitinh" value="1" />Male
          <input type="radio" name="gioitinh" value="0" />Female
          <input type="radio" name="gioitinh" value="2" />Other <br /><br />
        </form>
        <form action="" class="bieumau2">
          <div>
            <label for="phone">Phone:</label><br />
            <input type="tel" class="sdt" name="phone" placeholder="+91" />
            <br />
            <input type="text" class="sdt1" placeholder="Phone No" />
            <br /><br />
            Current Address:<br />
            <textarea
              cols="20"
              class="diachi"
              rows="10"
              placeholder="Current Address"
            ></textarea>
            <br /><br />
            <b>Email</b><br />
            <input type="emai" class="mail" placeholder="Enter Email" />
            <br />
            <b>Password</b><br />
            <input
              type="password"
              class="matkhau"
              placeholder="Enter Password"
            />
            <br />
            <b>Re-type Password</b><br />
            <input
              type="password"
              class="ghilaimk"
              placeholder="Retype Password"
            />
            <br />
          </div>
          <input type="button" class="nut" value="Register" />
        </form>
      </div>
    </div>
    </div>
  );
}

export default App;

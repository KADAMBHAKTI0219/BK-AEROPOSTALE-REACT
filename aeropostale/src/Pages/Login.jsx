import React from 'react'


const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="">
          <input type="text" placeholder='First Name' name='firstName' value={""}/><br />
          <input type="text" placeholder='Last Name' name='lastName' value={""}/><br />
          <input type="text" placeholder='Phone' name='phone' value={""}/><br />
          <select name="" id="">
            <option value="Month">Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select name="" id="">
            <option value="Year">Day</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <input type="email"  placeholder='Email Address' name='email' value={""}/> <br />
          <input type="password"  placeholder='Password' name='password' value={""}/> <br />
          <input type="check" />
          <p>Sign Up for Emails
          By signing up, you agree to receive emails from Aeropostale about sales, promotions, events, new arrivals, and more. View Terms and Privacy.</p>
        <button>Apply</button>
      </form>
    </div>
  )
}

export default Login

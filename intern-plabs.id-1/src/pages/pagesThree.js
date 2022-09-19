import React from 'react';
function PagesThree() {

    const buttonClick = () => {
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;

        document.getElementById("result").innerHTML = fname + " " + lname;
    }

    return (
      <div className="App">
        <header className="App-header">
            <label htmlFor="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" /><br/>
            <label htmlFor="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname" /><br/><br/>
            <input type="submit" onClick={() => buttonClick() }/>

            <p id='result'></p>
        </header>
      </div>
  )
}

export default PagesThree
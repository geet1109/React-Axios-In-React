import { useEffect } from "react";
import { useState } from "react";

function User() {
  const [userdata, setUserData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").
      then((result) => {
        result.json().then((response) => {
          setData(response);
        })
      })
  }, [])
  function addData() {
    let data = { userdata };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: 'Post',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((item) => {
        console.log(item);
      })
    })

  }

  return (
    <div>
      <div className="header">
        <h1>Digikull Students</h1>
      </div>

      <div className="userContent">
        <h1>Hello User</h1>
        <input type="text" value={userdata} onChange={(e) => setUserData(e.target.value)} />
        <button onClick={addData}>ADD</button>
      </div>

      <div className="list">
        {
          data.map((items, i) =>
            <ul key={i}>
              <li>{items.name}</li>
            </ul>
          )
        }
      </div>

    </div>
  )
}
export default User;
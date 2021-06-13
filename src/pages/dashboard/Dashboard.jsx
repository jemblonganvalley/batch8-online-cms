import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //unsubscribe
    return () => {};
  }, []);

  return (
    <main className="dashboard">
      <h1>dashboard</h1>

      {data.map((e) => {
        return (
          <div className="card" key={e.id}>
            <img src={e.avatar} alt="" width="200px" />
            <p>{e.username}</p>
            <small>{e.created_at}</small>
          </div>
        );
      })}
    </main>
  );
};

export default Dashboard;

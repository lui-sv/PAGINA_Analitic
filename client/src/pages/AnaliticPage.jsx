import React, {useState} from "react";
import SimpleBarChart from "../components/SimpleBarChart"

function AnaliticPage() {
    const [data] = useState([
      { name: "Maria", age: 20, weight: 60, xt: 50 },
      { name: "Juan", age: 25, weight: 70, xt: 60 },
      { name: "Ana", age: 22, weight: 65, xt: 55 },
    ]);
  
  
    return (
      <div>
        <h1>AnaliticPage</h1>
        <SimpleBarChart data={data} />
      </div>
    );
  }
export default AnaliticPage
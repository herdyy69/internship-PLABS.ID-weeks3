import React, { useState, useEffect } from "react";
function PagesOne() {
  const [temanSaya, setTemanSaya] = useState(0);
  const [namaTeman, setNamaTeman] = useState("");

  useEffect(() => {
    if(temanSaya >= 3) {
      setNamaTeman("Herdyansah");
    } else {
      setNamaTeman("NULL");
    }
    console.log("useEffect");
  }, [temanSaya])

  return (
    <div className="App">
      <header className="App-header">
     <h1>Saya Memiliki {temanSaya} teman bernama {namaTeman}</h1>
     <button onClick={() => setTemanSaya(temanSaya + 1)}>Tambah Teman</button>----
     <button onClick={() => setTemanSaya(temanSaya - 1)}>Kurangi Teman</button>
      </header>
    </div>
  );
}

export default PagesOne;

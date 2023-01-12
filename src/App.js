import React, { useState, useEffect } from "react";

/* 
  useEffect Kullanımı:
  1. Amacı lifecycle method'lardan componentDidMount,componentDidUpdate
  ve componentWillUnmount'u simüle etmektir.
  2. Yazım şekli:
    a. İki tane parametre alır. Birincisi effect kısmı (yapılacak iş)
    İkincisi dependency (bağımlılık-bir dizi)
  3. Çalışma Mantığı:
    a. İki parametre de verilir ve dependency kısmı boş olursa
    componentDidMount gibi çalışır. Yani component ekrana basılırken 1 kez
    çalışır ve state değişimlerinde tekrar çalışmaz.
    b. İki parametre de verilir ve dependency kısmına STATE yazılırsa
    dependency olarak verilen state her değiştiğinde useEffect tekrar
    çalışır. Bu haliyle componentDidUpdate olur. (NOT: dependency versek
      bile component ilk ekrana basılırken yine de çalışır. Yani dependency
      verilmiş hali hem componentDidMount hem componentDidUpdate olur.
      )
    c. Tek parametre olarak sadece yapılacak iş verilirse bunun lifeCycle
    ile bir alakası olmaz; her state değişiminde çalışır.
  DİP NOT: Component içerisinde istediğiniz kadar useEffect yazabilirsiniz
*/

/* 
    TRICK: BİR COMPONENT'IN YAŞAM DÖNGÜSÜNDE MUTLAKA OLMASI GEREKEN
    BİR LIFECYCLE METHOD VARDIR O DA RENDER METHODUDUR
*/

import FunctionBasedComponent from "./components/FunctionBasedComponent";

function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");

  /*
    Yukarıdaki a maddesi
   componentDidMount. Yani component ekrana basılırken 1 kere çalışır
    daha sonra state değişse bile tekrar çalışmaz.
  */
  /* useEffect(() => {
    console.log("useEffect ile componentDidMount");
  }, []); */

  /* 
    Yukarıdaki b maddesi
    componentDidMount ve componentDidUpdate
  */
  /* useEffect(() => {
    console.log("hem componentDidMount hem componentDidUpdate");
  }, [name,show]); */

  /* 
    Yukarıdaki c maddesi
    Sadece yapılacak iş parametresinin verildiği durum
  */
 /* useEffect(()=>{
  console.log("Acayip bir durum")
 }) */

 

  return (
    <div className="App">
      
      
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="name"
      />
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show === true && <FunctionBasedComponent />}
    </div>
  );
}

export default App;

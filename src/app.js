import React, {useState, Component} from "react";
import "./styles.css";


const INITIAL_STATE = [
    {id: 1, baslik: "Alisveris yap", tamamlandi: false},
    {id: 2, baslik: "Fatura ode", tamamlandi: false},
    {id: 3, baslik: "Okul odevi", tamamlandi: true}
]

export default function App() {
    const [liste, setListe] = useState(INITIAL_STATE);
    const [yeniBaslik, setYeniBaslik] = useState('');
    const addNew = title => {
        title === "" ? alert("Lüften yapılacak iş ekleyin") :
            setListe([...liste, {id: Date.now(), baslik: title, tamamlandi: false}]);
        setYeniBaslik("");
    }

    const marktamamlandi = (id) => {
        setListe(
            liste.map(el =>
                el.id === id ? {...el, tamamlandi: !el.tamamlandi} : el
            )
        );
    }

    const clearall = () => {
        setListe(liste.filter(item => !item.tamamlandi))
    }


    return (
        <div className="App">
            <h1>Yapılacaklar Listesi</h1>
            <div className="ekleme-formu">
                <input
                    value={yeniBaslik}
                    onChange={e => setYeniBaslik(e.target.value)}
                    placeholder="listeye ekle"/>
                <button onClick={() => addNew(yeniBaslik)}>Ekle</button>
            </div>
            <div className="liste">
                {liste.map(item => (
                    <div key={item.id}
                         onClick={() => {
                             marktamamlandi(item.id);
                         }}
                         className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}
                    </div>))}
            </div>
            <button
                onClick={() => clearall()}
                className="temizle">Tamamlananları temizle
            </button>
        </div>
    )
}


//import React, {useState} from "react";
// import "./styles.css";
//
// const INITIAL_STATE = [
//     {id: 1, baslik: "Alisveris yap", tamamlandi: false},
//     {id: 2, baslik: "Fatura ode", tamamlandi: false},
//     {id: 3, baslik: "Okul odevi", tamamlandi: true}
// ]
//
// export default function App() {
//     const [liste, setListe] = useState(INITIAL_STATE);
//     const [yeniBaslik, setYeniBaslik] = useState('');
//     const addNew = title => {
//         title === "" ? alert("Lüften yapılacak iş ekleyin") :
//             setListe([...liste,{id: Date.now(),baslik:title, tamamlandi: false}]);
//             setYeniBaslik("");
//     }
//
//     const marktamamlandi = (id) => {
//         setListe(
//             liste.map(el =>
//                 el.id === id ? {...el, tamamlandi: !el.tamamlandi} : el
//             )
//         );
//     }
//
//     const clearall = () => {
//         setListe(liste.filter(item => !item.tamamlandi))
//     }
//
//     return (
//         <div className="App">
//             <h1>Yapılacaklar Listesi</h1>
//             <div className="ekleme-formu">
//                 <input
//                     value={yeniBaslik}
//                     onChange={e => setYeniBaslik(e.target.value)}
//                     placeholder="listeye ekle"/>
//             <button onClick={() => addNew(yeniBaslik)}>Ekle</button>
//         </div>
//     <div className="liste">
//         {liste.map(item => (
//             <div key={item.id}
//             onClick={() => {
//                 marktamamlandi(item.id);
//             }}
//             className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}
//         </div>))}
//     </div>
//     <button
//         onClick={() => clearall()}
//         className="temizle">Tamamlananları temizle</button>
// </div>
// )
// }
// -------------------


//                 <div>Yapılacak</div>
//                 <div className="yapildi">Yapıldı</div>

//setListe([...liste,{id: Date.now(),baslik:title, tamamlandi: false}]);
//         setYeniBaslik("");
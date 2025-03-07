// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// // import { changeLanguage } from "../redux/reduser/lang";
// import i18next from "i18next";
// // import "./Language.css"; // CSS faylni import qilish

// export default function Language() {
//   const dispatch = useDispatch();
//   const [active, setActive] = useState(
//     localStorage.getItem("JADID_LAN") === "en" ? "Eng" : "Oʻz"
//   );
//   const [selectClicked, setSelectClicked] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleSelectClick = () => {
//     setSelectClicked(!selectClicked);
//     setMenuOpen(!menuOpen);
//   };

//   const handleChange = (value) => {
//     dispatch(changeLanguage(value));
//     localStorage.setItem("JADID_LAN", value);
//     i18next.changeLanguage(value);
//     setActive(value === "en" ? "Eng" : "Oʻz");
//     setSelectClicked(false); // Menyuni yopish
//     setMenuOpen(false); // Menyuni yopish
//   };

//   return (
//     <div className={`dropdown ${selectClicked ? "select-clicked" : ""}`}>
//       <div className="select" onClick={handleSelectClick}>
//         <span className="selected">{active}</span>
//         <div className={`caret ${selectClicked ? "caret-rotate" : ""}`}></div>

//         {menuOpen && (
//           <ul className="menu">
//             <li
//               className={active === "Oʻz" ? "active" : ""}
//               onClick={() => handleChange("uz")}
//             >
//               Oʻzbek
//             </li>
//             <li
//               className={active === "Eng" ? "active" : ""}
//               onClick={() => handleChange("en")}
//             >
//               English
//             </li>
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

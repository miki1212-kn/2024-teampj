// "use client";
// import { useState } from "react";
// import SearchBar from "./components/SearchBar";
// import Header from "./components/Header";
// import styles from "./page.module.scss";
// import data from "./data/keywords.json";
// import { Keywords } from "./types/keywords";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   const keywords: Keywords = data;
//   const [selectedKeywords, setSelectedKeywords] = useState<{
//     seasons: Set<number>;
//     livingThings: Set<number>;
//     hue: Set<number>;
//     atmosphere: Set<number>;
//     locations: Set<number>;
//     features: Set<number>;
//   }>({
//     seasons: new Set(),
//     livingThings: new Set(),
//     hue: new Set(),
//     atmosphere: new Set(),
//     locations: new Set(),
//     features: new Set(),
//   });
//   const toggleSelect = (
//     category: keyof typeof selectedKeywords,
//     index: number
//   ) => {
//     setSelectedKeywords((prevState) => {
//       const newSet = new Set(prevState[category]);
//       if (newSet.has(index)) {
//         newSet.delete(index);
//       } else {
//         newSet.add(index);
//       }
//       return { ...prevState, [category]: newSet };
//     });
//   };

//   return (
//     <>
//       <Header />
//       <input type="search" id="bookSearch" name="search" />
//       <main className={styles.main}>
//         <SearchBar />
//         <div className={styles.selectList}>
//           <section className={styles.keywordWrap}>
//             <div>
//               <h2>季節</h2>
//               <ul>
//                 {keywords.seasons.map((season, index) => (
//                   <li
//                     key={index}
//                     className={
//                       selectedKeywords.seasons.has(index) ? styles.selected : ""
//                     }
//                     onClick={() => toggleSelect("seasons", index)}
//                   >
//                     {season}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>
//           <section className={styles.keywordWrap}>
//             <div>
//               <h2>生き物</h2>
//               <ul>
//                 {keywords.livingThings.map((thing, index) => (
//                   <li
//                     key={index}
//                     className={
//                       selectedKeywords.livingThings.has(index)
//                         ? styles.selected
//                         : ""
//                     }
//                     onClick={() => toggleSelect("livingThings", index)}
//                   >
//                     {thing}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>
//           <section className={styles.keywordWrap}>
//             <div>
//               <h2>色合い</h2>
//               <ul>
//                 {keywords.hue.map((color, index) => (
//                   <li
//                     key={index}
//                     className={
//                       selectedKeywords.hue.has(index) ? styles.selected : ""
//                     }
//                     onClick={() => toggleSelect("hue", index)}
//                   >
//                     {color}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>
//           <section className={styles.keywordWrap}>
//             <div>
//               <h2>雰囲気</h2>
//               <ul>
//                 {keywords.atmosphere.map((atmos, index) => (
//                   <li
//                     key={index}
//                     className={
//                       selectedKeywords.atmosphere.has(index)
//                         ? styles.selected
//                         : ""
//                     }
//                     onClick={() => toggleSelect("atmosphere", index)}
//                   >
//                     {atmos}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>
//           <section className={styles.keywordWrap}>
//             <div>
//               <h2>国</h2>
//               <ul>
//                 {keywords.locations.map((location, index) => (
//                   <li
//                     key={index}
//                     className={
//                       selectedKeywords.locations.has(index)
//                         ? styles.selected
//                         : ""
//                     }
//                     onClick={() => toggleSelect("locations", index)}
//                   >
//                     {location}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>
//           <section className={styles.keywordWrap}>
//             <div>
//               <h2>特徴</h2>
//               <ul>
//                 {keywords.features.map((feature, index) => (
//                   <li
//                     key={index}
//                     className={
//                       selectedKeywords.features.has(index)
//                         ? styles.selected
//                         : ""
//                     }
//                     onClick={() => toggleSelect("features", index)}
//                   >
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>
//         </div>
//         <div className={styles.btnWrap}>
//           <button
//             className={styles.resetBtn}
//             onClick={() => {
//               setSelectedKeywords({
//                 seasons: new Set(),
//                 livingThings: new Set(),
//                 hue: new Set(),
//                 atmosphere: new Set(),
//                 locations: new Set(),
//                 features: new Set(),
//               });
//             }}
//           >
//             <p>リセット</p>
//           </button>
//           <button
//             className={styles.searchBtn}
//             onClick={() => {
//               const queryString = new URLSearchParams({
//                 selectedKeywords: JSON.stringify({
//                   seasons: Array.from(selectedKeywords.seasons),
//                   livingThings: Array.from(selectedKeywords.livingThings),
//                   hue: Array.from(selectedKeywords.hue),
//                   atmosphere: Array.from(selectedKeywords.atmosphere),
//                   locations: Array.from(selectedKeywords.locations),
//                   features: Array.from(selectedKeywords.features),
//                 }),
//               }).toString();

//               router.push(`/result?${queryString}`);
//             }}
//           >
//             <p>検索</p>
//           </button>
//         </div>
//       </main>
//     </>
//   );
// }

"use client";

import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      {/* <SearchBar /> */}
      <div className={styles.questionWrap}>
        <div className={styles.question}>
          {/* 仮でとりあえず */}
          <p>Q1. 絵本の種類はどれでしたか?</p>
        </div>
        <div className={styles.cat}></div>
      </div>
      <div className={styles.answerWrap}>
        <ul>
          <li>物語メイン</li>
          <li>布製</li>
          <li>仕掛け絵本</li>
          <li>形が特殊</li>
          <li>間違い探し</li>
          <li>迷路</li>
        </ul>
      </div>
      <div className={styles.btnWrap}>
        <button>
          <p>戻る</p>
        </button>
        <button>
          <p>
            <span>見つかった絵本(13冊)</span>検索
          </p>
        </button>
        <button>
          <p>次へ</p>
        </button>
      </div>
    </>
  );
}

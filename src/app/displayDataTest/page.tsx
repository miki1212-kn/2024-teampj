// "use client";

// import Link from "next/link";
// import styles from "./Result.module.scss";
// // import { usePathname } from "next/navigation";
// import SearchBar from "@/app/components/SearchBar";
// import Header from "@/app/components/Header";

// export default function Result() {
//   // const pathname = usePathname();

//   //ダミーデータ（あとからfirebaseから取得）
//   const ResultDatas = [
//     {
//       id: 1,
//       title: "桃太郎",
//       writer: "不明",
//       illustrator: "不明",
//       image: "/img/momotaro.jpeg",
//       livingThing: ["人間", "陸の生き物", "空の生き物"],
//       mainCharacter: "桃太郎",
//       character: [
//         "桃太郎",
//         "犬",
//         "猿",
//         "キジ",
//         "鬼",
//         "おじいさん",
//         "おばあさん",
//       ],
//       genre: "昔話",
//       location: "日本",
//       hue: "不明",
//       atmosphere: "",
//       season: "不明",
//     },
//     {
//       id: 2,
//       title: "赤ずきん",
//       writer: "不明",
//       illustrator: "不明",
//       image: "/img/littleRedRidingHood.jpeg",
//       livingThing: ["人間", "陸の生き物", "空の生き物"],
//       mainCharacter: "赤ずきん",
//       character: ["赤ずきん", "おばあさん", "オオカミ"],
//       hue: "不明",
//       atmosphere: ["かわいい", "怖い"],
//       genre: "昔話",
//       location: "海外",
//       season: "不明",
//     },
//     {
//       id: 3,
//       title: "シンデレラ",
//       writer: "不明",
//       illustrator: "不明",
//       image: "/img/cinderella.jpeg",
//       livingThing: "人間",
//       mainCharacter: "シンデレラ",
//       character: ["シンデレラ", "王子", "魔法使い"],
//       genre: "昔話",
//       location: "海外",
//       hue: "不明",
//       atmosphere: "",
//       season: "不明",
//     },
//     {
//       id: 4,
//       title: "白雪姫",
//       writer: "不明",
//       illustrator: "不明",
//       image: "/img/snowWhite.jpeg",
//       livingThing: ["人間", "陸の生き物"],
//       mainCharacter: "白雪姫",
//       character: ["白雪姫", "王子", "魔女", "小人"],
//       genre: "昔話",
//       location: "海外",
//       hue: "不明",
//       atmosphere: "",
//       season: "不明",
//     },
//     {
//       id: 5,
//       title: "アラジンと魔法のランプ",
//       writer: "不明",
//       illustrator: "不明",
//       image: "/img/aladdin.jpeg",
//       livingThing: ["人間", "陸の生き物"],
//       mainCharacter: "アラジン",
//       character: ["アラジン", "ジーニー", "王女", "魔法使い", "盗賊"],
//       genre: "昔話",
//       location: "海外",
//       hue: "不明",
//       atmosphere: "",
//       season: "不明",
//     },
//   ];
//   return (
//     <>
//       <Header />
//       <div className={styles.searchBarWrap}>
//         <SearchBar />
//       </div>
//       <main className={styles.resultContainer}>
//         <h2 className={styles.resultTitle}>検索結果({ResultDatas.length}件)</h2>
//         <ul className={styles.resultList}>
//           <div className={styles.resultItemWrap}>
//             {ResultDatas.map((result) => (
//               <li key={result.id} className={styles.resultItem}>
//                 <Link href={`/result/resultDetail/${result.id}`}>
//                   <div className={styles.resultItemWrap}>
//                     <div className={styles.itemImageWrap}>
//                       <img
//                         src={result.image}
//                         alt={result.title}
//                         className={styles.image}
//                       />
//                     </div>
//                     <div className={styles.itemDescriptionWrap}>
//                       <h3 className="title">題名　{result.title}</h3>
//                       <div className={styles.fixedBottom}>
//                         <p className="writer">作者　{result.writer}</p>
//                         <p className="illustrator">絵　{result.illustrator}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </div>
//         </ul>
//       </main>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import styles from "./Result.module.scss";
// import { usePathname } from "next/navigation";
import SearchBar from "@/app/components/SearchBar";
import Header from "@/app/components/Header";
import { useEffect, useState } from "react";

// export default function Result() {
//   type storyBooks = {
//     id: number;
//     title: string;
//   };
//   const [storyBooks, setStoryBooks] = useState<storyBooks[]>([]);
//   // const pathname = usePathname();

//   //ダミーデータ（あとからfirebaseから取得）
//   // const ResultDatas = [
//   //   {
//   //     id: 1,
//   //     title: "桃太郎",
//   //     writer: "不明",
//   //     illustrator: "不明",
//   //     image: "/img/momotaro.jpeg",
//   //     livingThing: ["人間", "陸の生き物", "空の生き物"],
//   //     mainCharacter: "桃太郎",
//   //     character: [
//   //       "桃太郎",
//   //       "犬",
//   //       "猿",
//   //       "キジ",
//   //       "鬼",
//   //       "おじいさん",
//   //       "おばあさん",
//   //     ],
//   //     genre: "昔話",
//   //     location: "日本",
//   //     hue: "不明",
//   //     atmosphere: "",
//   //     season: "不明",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "赤ずきん",
//   //     writer: "不明",
//   //     illustrator: "不明",
//   //     image: "/img/littleRedRidingHood.jpeg",
//   //     livingThing: ["人間", "陸の生き物", "空の生き物"],
//   //     mainCharacter: "赤ずきん",
//   //     character: ["赤ずきん", "おばあさん", "オオカミ"],
//   //     hue: "不明",
//   //     atmosphere: ["かわいい", "怖い"],
//   //     genre: "昔話",
//   //     location: "海外",
//   //     season: "不明",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "シンデレラ",
//   //     writer: "不明",
//   //     illustrator: "不明",
//   //     image: "/img/cinderella.jpeg",
//   //     livingThing: "人間",
//   //     mainCharacter: "シンデレラ",
//   //     character: ["シンデレラ", "王子", "魔法使い"],
//   //     genre: "昔話",
//   //     location: "海外",
//   //     hue: "不明",
//   //     atmosphere: "",
//   //     season: "不明",
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "白雪姫",
//   //     writer: "不明",
//   //     illustrator: "不明",
//   //     image: "/img/snowWhite.jpeg",
//   //     livingThing: ["人間", "陸の生き物"],
//   //     mainCharacter: "白雪姫",
//   //     character: ["白雪姫", "王子", "魔女", "小人"],
//   //     genre: "昔話",
//   //     location: "海外",
//   //     hue: "不明",
//   //     atmosphere: "",
//   //     season: "不明",
//   //   },
//   //   {
//   //     id: 5,
//   //     title: "アラジンと魔法のランプ",
//   //     writer: "不明",
//   //     illustrator: "不明",
//   //     image: "/img/aladdin.jpeg",
//   //     livingThing: ["人間", "陸の生き物"],
//   //     mainCharacter: "アラジン",
//   //     character: ["アラジン", "ジーニー", "王女", "魔法使い", "盗賊"],
//   //     genre: "昔話",
//   //     location: "海外",
//   //     hue: "不明",
//   //     atmosphere: "",
//   //     season: "不明",
//   //   },
//   // ];
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         console.log("APIへ接続中");
//         const response = await fetch("/api/getBooksData");
//         // if (!response.ok) {
//         //   throw new Error("データ取得失敗");
//         // }
//         console.log("API Response:", response);
//         const data = await response.json();
//         // console.log("Parsed Data:", data);
//         setStoryBooks(data.books);
//       } catch (error) {
//         console.error("データの取得に失敗", error);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Header />
//       {/* <div className={styles.searchBarWrap}>
//         <SearchBar />
//       </div> */}
//       {/* <main className={styles.resultContainer}>
//         <h2 className={styles.resultTitle}>検索結果({ResultDatas.length}件)</h2>
//         <ul className={styles.resultList}>
//           <div className={styles.resultItemWrap}>
//             {ResultDatas.map((result) => (
//               <li key={result.id} className={styles.resultItem}>
//                 <Link href={`/result/resultDetail/${result.id}`}>
//                   <div className={styles.resultItemWrap}>
//                     <div className={styles.itemImageWrap}>
//                       <img
//                         src={result.image}
//                         alt={result.title}
//                         className={styles.image}
//                       />
//                     </div>
//                     <div className={styles.itemDescriptionWrap}>
//                       <h3 className="title">題名　{result.title}</h3>
//                       <div className={styles.fixedBottom}>
//                         <p className="writer">作者　{result.writer}</p>
//                         <p className="illustrator">絵　{result.illustrator}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </div>
//         </ul>
//       </main> */}
//       {/* <p>絵本</p> */}
//       <ul>
//         {storyBooks.map((book) => (
//           <li key={book.id}>{book.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
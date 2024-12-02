import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <p>책과 썸타는 공간 BOOKSOME</p>
        <button >글쓰기</button>
      </div>
      <div>
        <p>이 책을 추천합니다</p>
      </div>
      <div>
        <p>다른 유저들은 이런 책을 읽고 있어요</p>
      </div>
    </>
  );
}

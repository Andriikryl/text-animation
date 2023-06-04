import styles from "./page.module.css";

const projects = [
  {
    title: "New York",
    color: "#F06318",
    id: 1,
  },
  {
    title: "San Francisco",
    color: "#DCF018",
    id: 2,
  },
  {
    title: "San Antonio",
    color: "#18F0E8",
    id: 3,
  },
  {
    title: "Nashville",
    color: "#8C0CF0",
    id: 4,
  },
  {
    title: "Houston",
    color: "#F0183C",
    id: 5,
  },
  {
    title: "New Orleans",
    color: "#F0BA18",
    id: 6,
  },
  {
    title: "Oklahoma City",
    color: "#0C34F0",
    id: 7,
  },
  {
    title: "Detroit",
    color: "#0CBCF0",
    id: 8,
  },
  {
    title: "Indianapolis",
    color: "#91F018",
    id: 9,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      {projects.map((project, index) => {
        return (
          <div key={project.id}>
            <p>{project.title}</p>
          </div>
        );
      })}
    </main>
  );
}

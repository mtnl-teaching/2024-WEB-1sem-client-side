import styles from "./CardItem.module.css";

interface Props {
  name: string;
}

export default function CardItem({ name }: Props) {
  return <div className={styles.card}> {name} </div>;
}

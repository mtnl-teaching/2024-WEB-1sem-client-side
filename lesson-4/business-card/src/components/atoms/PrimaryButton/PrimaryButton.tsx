import styles from "./PrimaryButton.module.css";

interface Props {
  buttonText: string;
  onClick: () => void;
}

export default function PrimaryButton({ buttonText, onClick }: Props) {
  return (
    <button className={styles.main} onClick={onClick}>
      {buttonText}
    </button>
  );
}

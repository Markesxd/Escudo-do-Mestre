import styles from './styles.module.scss';

export default function Batalha() {
  return(
    <table className={styles.container}>
      <thead>
        <tr>
        <td>Iniciativa</td>
        <td>Nome Jogador</td>
        <td>Nome</td>
        <td>Vida</td>
        <td>CA</td>
        <td>Info</td>
        <td>+</td>
        </tr>
      </thead>
    </table>
  );
}

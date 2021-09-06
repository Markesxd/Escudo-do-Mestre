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
        <td><button type='button' onClick={addMenu}>+</button></td>
        </tr>
      </thead>
      <tbody ref={tbodyRef}>
      </tbody>
    </table>
  );
}

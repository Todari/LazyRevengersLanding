import styles from '@/styles/Partners.module.scss';
import LogoWrapper from '../LogoWrapper/LogoWrapper';

const PartnersBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2>Partners</h2>
      </div>
      <br />
      <br />
      <div className={styles.comingSoon}>
        <h1>COMING SOON</h1>
      </div>
    </div>
  );
};

export default PartnersBlock;

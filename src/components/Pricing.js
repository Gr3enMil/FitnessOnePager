import styles from '../app/styles/page.module.css';


export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <h2>Pricing</h2>
      <div className={styles.pricing}>
        <div className={styles.pricingLeft}>
          <p>jidelak</p>
          <p>nutelak</p>
          <p>zmrzlina</p>
          <p>chleba</p>
          <p>steroidy</p>
        </div>
        <div className={styles.pricingRight}>
          <p>100 Kč</p>
          <p>200 Kč</p>
          <p>50 Kč</p>
          <p>20 Kč</p>
          <p>500 Kč</p>
        </div>
      </div>
    </section>
  );
}
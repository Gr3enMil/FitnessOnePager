import styles from "../app/styles/page.module.css";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <h2>Services</h2>
      <h3>COMPLEX TRAINING</h3>
      <div className={styles.services}>
        <div className={styles.service}>
          <Image
            src="/aaa.jpg"
            width={250}
            height={150}
            alt="Fitness"
          />
          <h4>Tréninky ve fitku</h4>
          <p>
            Our fitness classes are designed to help you reach your fitness goals
            in a supportive environment.
          </p>
        </div>
        <div className={styles.service}>
          <Image
            src="/aaa.jpg"
            width={250}
            height={150}
            alt="Aerial Silks"
          />
          <h4>Jídelníček</h4>
          <p>
            Aerial silks is a fun way to build strength and flexibility while
            learning a new skill.
          </p>
        </div>
        <div className={styles.service}>
          <Image
            src="/aaa.jpg"
            width={250}
            height={150}
            alt="Complex Training"
          />
          <h4>Obdelníček</h4>
          <p>
            Complex training combines strength and cardio exercises for a
            full-body workout.
          </p>
        </div>
      </div>
      <h3>FITNESS TRAINING</h3>
      <div className={styles.services}>
        <div className={styles.service}>
          <Image
            src="/aaa.jpg"
            width={250}
            height={150}
            alt="Fitness"
          />
          <h4>Tréninky ve fitku</h4>
          <p>
            Our fitness classes are designed to help you reach your fitness goals
            in a supportive environment.
          </p>
        </div>
        <div className={styles.service}>
          <Image
            src="/aaa.jpg"
            width={250}
            height={150}
            alt="Aerial Silks"
          />
          <h4>Jídelníček</h4>
          <p>
            Aerial silks is a fun way to build strength and flexibility while
            learning a new skill.
          </p>
        </div>
        <div className={styles.service}>
          <Image
            src="/aaa.jpg"
            width={250}
            height={150}
            alt="Complex Training"
          />
          <h4>Obdelníček</h4>
          <p>
            Complex training combines strength and cardio exercises for a
            full-body workout.
          </p>
        </div>
      </div>
      <h3>AERIAL SILKS LESSONS</h3>
      <div className={styles.services}>
        <div className={styles.service}>
          <Image
            src="/aaa.jpg"
            width={250}
            height={150}
            alt="Fitness"
          />
          <h4>Tréninky ve fitku</h4>
          <p>
            Our fitness classes are designed to help you reach your fitness goals
            in a supportive environment.
          </p>
        </div>
        <div className={styles.service}>
          <Image
            src="/aaa.jpg"
            width={250}
            height={150}
            alt="Aerial Silks"
          />
          <h4>Jídelníček</h4>
          <p>
            Aerial silks is a fun way to build strength and flexibility while
            learning a new skill.
          </p>
        </div>
        <div className={styles.service}>
          <Image
            src="/aaa.jpg"
            width={250}
            height={150}
            alt="Complex Training"
          />
          <h4>Obdelníček</h4>
          <p>
            Complex training combines strength and cardio exercises for a
            full-body workout.
          </p>
        </div>
      </div>
    </section>
  );
}

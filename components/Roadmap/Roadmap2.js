import styles from "@/styles/Roadmap2.module.scss";
import { useIntl } from "react-intl";




const Roadmap2 = () => {

    const intl = useIntl();
    const title = intl.formatMessage({ id: "roadmap.title.h1" });
    const box1_h2 = intl.formatMessage({ id: "roadmap.box1.h2" });
    const box1_p1 = intl.formatMessage({ id: "roadmap.box1.p1" });
    const box1_p2 = intl.formatMessage({ id: "roadmap.box1.p2" });
    const box1_p3 = intl.formatMessage({ id: "roadmap.box1.p3" });
    const box1_p4 = intl.formatMessage({ id: "roadmap.box1.p4" });

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.roadmap}>
                <div className={styles.leftContainer}>
                    <div className={styles.leftRow}>
                        <div className={styles.box}>
                            <h2>{box1_h2}</h2>
                            <p>{box1_p1}</p>
                            <p>{box1_p2}</p>
                            <p>{box1_p3}</p>
                            <p>{box1_p4}</p>
                        </div>
                        <div className={styles.leftToCenter} />
                    </div>
                    <div className={styles.emptyContainer} />
                    <div className={styles.leftRow}>
                        <div className={styles.box}>
                            <h2>{box1_h2}</h2>
                            <p>{box1_p1}</p>
                            <p>{box1_p2}</p>
                            <p>{box1_p3}</p>
                            <p>{box1_p4}</p>
                        </div>
                        <div className={styles.leftToCenter} />
                    </div>
                    <div className={styles.emptyContainer} />
                    <div className={styles.leftRow}>
                        <div className={styles.box}>
                            <h2>{box1_h2}</h2>
                            <p>{box1_p1}</p>
                            <p>{box1_p2}</p>
                            <p>{box1_p3}</p>
                            <p>{box1_p4}</p>
                        </div>
                        <div className={styles.leftToCenter} />
                    </div>
                </div>
                <div className={styles.centerLine}>
                    <div className={styles.progressLine} />
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.emptyContainer} />
                    <div className={styles.rightRow}>
                        <div className={styles.rightToCenter}></div>
                        <div className={styles.box}>
                            <h2>{box1_h2}</h2>
                            <p>{box1_p1}</p>
                            <p>{box1_p2}</p>
                            <p>{box1_p3}</p>
                            <p>{box1_p4}</p>
                        </div>
                    </div>
                    <div className={styles.emptyContainer} />
                    <div className={styles.rightRow}>
                        <div className={styles.rightToCenter}></div>
                        <div className={styles.box}>
                            <h2>{box1_h2}</h2>
                            <p>{box1_p1}</p>
                            <p>{box1_p2}</p>
                            <p>{box1_p3}</p>
                            <p>{box1_p4}</p>
                        </div>
                    </div>
                    <div className={styles.emptyContainer} />
                </div>
            </div>
        </div >

    );
};

export default Roadmap2;

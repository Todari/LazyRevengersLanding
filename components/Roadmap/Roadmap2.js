import styles from "@/styles/Roadmap2.module.scss";
import { useIntl } from "react-intl";




const Roadmap2 = () => {

    const intl = useIntl();
    const title = intl.formatMessage({ id: "roadmap.title" });
    const box1_h2 = intl.formatMessage({ id: "roadmap.circles.one.title" });
    const box1_p1 = intl.formatMessage({ id: "roadmap.circles.one.list1" });
    const box1_p2 = intl.formatMessage({ id: "roadmap.circles.one.list2" });
    const box1_p3 = intl.formatMessage({ id: "roadmap.circles.one.list3" });
    const box1_p4 = intl.formatMessage({ id: "roadmap.circles.one.list4" });

    const box2_h2 = intl.formatMessage({ id: "roadmap.circles.two.title" });
    const box2_p1 = intl.formatMessage({ id: "roadmap.circles.two.list1" });
    const box2_p2 = intl.formatMessage({ id: "roadmap.circles.two.list2" });
    const box2_p3 = intl.formatMessage({ id: "roadmap.circles.two.list3" });
    const box2_p4 = intl.formatMessage({ id: "roadmap.circles.two.list4" });

    const box3_h2 = intl.formatMessage({ id: "roadmap.circles.three.title" });
    const box3_p1 = intl.formatMessage({ id: "roadmap.circles.three.list1" });
    const box3_p2 = intl.formatMessage({ id: "roadmap.circles.three.list2" });
    const box3_p3 = intl.formatMessage({ id: "roadmap.circles.three.list3" });
    const box3_p4 = intl.formatMessage({ id: "roadmap.circles.three.list4" });

    const box4_h2 = intl.formatMessage({ id: "roadmap.circles.four.title" });
    const box4_p1 = intl.formatMessage({ id: "roadmap.circles.four.list1" });
    const box4_p2 = intl.formatMessage({ id: "roadmap.circles.four.list2" });
    const box4_p3 = intl.formatMessage({ id: "roadmap.circles.four.list3" });
    const box4_p4 = intl.formatMessage({ id: "roadmap.circles.four.list4" });

    const box5_h2 = intl.formatMessage({ id: "roadmap.circles.five.title" });
    const box5_p1 = intl.formatMessage({ id: "roadmap.circles.five.list1" });
    const box5_p2 = intl.formatMessage({ id: "roadmap.circles.five.list2" });
    const box5_p3 = intl.formatMessage({ id: "roadmap.circles.five.list3" });
    const box5_p4 = intl.formatMessage({ id: "roadmap.circles.five.list4" });
    

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
                            <h2>{box3_h2}</h2>
                            <p>{box3_p1}</p>
                            <p>{box3_p2}</p>
                            <p>{box3_p3}</p>
                            <p>{box3_p4}</p>
                        </div>
                        <div className={styles.leftToCenter} />
                    </div>
                    <div className={styles.emptyContainer} />
                    <div className={styles.leftRow}>
                        <div className={styles.box}>
                            <h2>{box5_h2}</h2>
                            <p>{box5_p1}</p>
                            <p>{box5_p2}</p>
                            <p>{box5_p3}</p>
                            <p>{box5_p4}</p>
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
                            <h2>{box2_h2}</h2>
                            <p>{box2_p1}</p>
                            <p>{box2_p2}</p>
                            <p>{box2_p3}</p>
                            <p>{box2_p4}</p>
                        </div>
                    </div>
                    <div className={styles.emptyContainer} />
                    <div className={styles.rightRow}>
                        <div className={styles.rightToCenter}></div>
                        <div className={styles.box}>
                            <h2>{box4_h2}</h2>
                            <p>{box4_p1}</p>
                            <p>{box4_p2}</p>
                            <p>{box4_p3}</p>
                            <p>{box4_p4}</p>
                        </div>
                    </div>
                    <div className={styles.emptyContainer} />
                </div>
            </div>
        </div >

    );
};

export default Roadmap2;

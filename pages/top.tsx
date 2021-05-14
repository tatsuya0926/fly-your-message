import { useEffect } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Container from "@/components/container";
import EntryForm from "@/components/entry-form";
import $ from "jquery";
import styles from "../styles/plane.module.css";

const TopPage = () => {
  //Planeを飛ばすanimation/jQueryで直接DOM操作
  useEffect(() => {
    console.log("============== start DOM jQuery ==================");
    $("." + styles.send).click(() => {
      setTimeout(() => {
        $("#" + styles.plate).removeClass(styles.front);
        $("#" + styles.container).removeClass(styles.beginning);
        $("." + styles.curvable).addClass(styles.curved);
        setTimeout(() => {
          $("#" + styles.container).addClass(styles.hover);
          setTimeout(() => {
            $("#" + styles.container).addClass(styles.fly_away_first);
            setTimeout(() => {
              $("#" + styles.container).addClass(styles.fly_away);
              setTimeout(() => {
                $("#" + styles.plate).addClass(styles.front);
                $("#" + styles.container)
                  .removeClass(
                    `${styles.fly_away} ${styles.fly_away_first} hover`
                  )
                  .addClass(styles.beginning);
                $("." + styles.curvable).removeClass(styles.curved);
                //thank you action
                console.log("hello");
              }, 3000);
            }, 6000);
          }, 2000);
        }, 2800);
      }, 200);
    });
  }, []);

  const PlaneForm = () => {
    return (
      <div>
        <div id={styles.plate} className={styles.front}>
          <EntryForm />
          <button className={styles.send}> Send it </button> <br />
        </div>
        <div id={styles.container} className={styles.beginning}>
          <div id={styles.leftWing}>
            <div className={`${styles.top_left} ${styles.curvable}`}> </div>
            <div className={`${styles.bottom_left} ${styles.curvable}`}> </div>
            <div className={`${styles.wing} ${styles.wing1}`}></div>
            <div className={`${styles.wing} ${styles.wing2}`}></div>
          </div>
          <div id={styles.rightWing}>
            <div className={`${styles.top_right} ${styles.curvable}`}> </div>
            <div className={`${styles.bottom_right} ${styles.curvable}`}> </div>
            <div className={`${styles.wing} ${styles.wing3}`}></div>
            <div className={`${styles.wing} ${styles.wing4}`}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Nav />
      <Container>
        <PlaneForm />
      </Container>
      <Footer />
    </div>
  );
};
export default TopPage;

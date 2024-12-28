import Image from "next/image";

import styles from "@/styles/Titlebar.module.css";

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <Image
        src="/logos/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Jeffrey Rene - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;

# touched on 2025-06-13T17:42:27.461135Z
# touched on 2025-06-13T17:43:10.341534Z
# touched on 2025-06-13T17:44:07.098652Z
# touched on 2025-06-13T17:44:13.005677Z
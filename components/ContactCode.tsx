import styles from "@/styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "jeffreyrene575@gmail.com",
    href: "mailto:jeffreyrene575@gmail.com",
  },
  {
    social: "github",
    link: "jeffreyrene",
    href: "https://github.com/jeffreyrene",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;

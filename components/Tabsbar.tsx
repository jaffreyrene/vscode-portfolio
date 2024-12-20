import Tab from "@/components/Tab";

import styles from "@/styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/react_icon.svg" filename="home.tsx" path="/" />
      <Tab icon="/logos/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/logos/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab
        icon="/logos/markdown_icon.svg"
        filename="github.md"
        path="/github"
      />
    </div>
  );
};

export default Tabsbar;

# touched on 2025-06-13T17:42:09.704317Z
# touched on 2025-06-13T17:43:07.721884Z
# touched on 2025-06-13T17:43:28.547087Z
# touched on 2025-06-13T17:43:45.144987Z
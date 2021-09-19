import styles from "../styles/dashnav.module.css";
import React from "react";

export default function DashNav() {
  return (
    <div>
      <ul className={styles.dashnav}>
        <li>Nav Item 1</li>
        <li>Nav Item 2</li>
        <li>Nav Item 3</li>
        <li>Nav Item 4</li>
      </ul>
    </div>
  );
}

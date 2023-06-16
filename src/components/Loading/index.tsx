import React, { CSSProperties } from "react";
import styles from "./index.module.css";
import classNames from "classnames";

interface Props {
  /**
   * Width of item
   */
  width?: number;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Color
   */
  color?: string;
}

export interface LoadingCustomCSS extends CSSProperties {
  "--loading-width": string;
  "--loading-height": string;
}

const Loading: React.FC<Props> = ({ width = 49, className, color }) => (
  <div
    className={classNames({
      [className as string]: !!className,
      [styles.fcLoading]: true,
    })}
    style={
      {
        "--loading-width": `${width}px`,
        "--loading-height": `${(width * 69) / 49}px`,
      } as LoadingCustomCSS
    }
  >
    <div className={styles.fcLoadingTfc}>
      <div className={`${styles.fcLoadingTfc1} ${styles.fcLoadingTfcItem}`}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 117.03 63.12"
        >
          <title>loading-1</title>
          <polygon
            fill={color || "#f05b28"}
            points="117.03 46.84 94.04 0 0 24.05 75.21 63.12 117.03 46.84"
          />
        </svg>
      </div>
      <div className={`${styles.fcLoadingTfc2} ${styles.fcLoadingTfcItem}`}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.07 51.28"
        >
          <title>loading-2</title>
          <polygon
            style={{ fill: color || "#f05b28", opacity: 0.7 }}
            points="38.07 0 0 14.82 1.32 38.26 1.32 38.26 2.01 51.28 19.62 27.22 38.07 0"
          />
        </svg>
      </div>
      <div className={`${styles.fcLoadingTfc3} ${styles.fcLoadingTfcItem}`}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.55 29.25"
        >
          <title>loading-3</title>
          <polygon
            style={{ fill: color || "#f05b28", opacity: 0.6 }}
            points="7.64 0 0 10.45 13.77 29.25 29.55 12.26 7.64 0"
          />
        </svg>
      </div>
      <div className={`${styles.fcLoadingTfc4} ${styles.fcLoadingTfcItem}`}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 47.25 60.1"
        >
          <title>loading-4</title>
          <polygon
            style={{ fill: color || "#f05b28", opacity: 0.9 }}
            points="23.39 0 0 25.25 8.17 23.71 21.14 60.1 47.25 35.67 23.39 0"
          />
        </svg>
      </div>
      <div className={`${styles.fcLoadingTfc5} ${styles.fcLoadingTfcItem}`}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 90.9 57.03"
        >
          <title>loading-5</title>
          <polygon
            fill={color || "#f05b28"}
            points="78.46 0 54.87 4.32 54.91 4.54 0 14.61 39.54 57.03 90.9 35.44 78.46 0"
          />
        </svg>
      </div>
      <div className={`${styles.fcLoadingTfc6} ${styles.fcLoadingTfcItem}`}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12.62 17.84"
        >
          <title>loading-6</title>
          <polygon
            style={{ fill: color || "#f05b28", opacity: 0.6 }}
            points="12.62 15.44 3.5 0 0 17.84 12.62 15.44"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default Loading;

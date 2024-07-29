import React from 'react';
import styles from '../styles/sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSync, faPlus, faClipboard, faUsers, faFileAlt, faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItems}>
        <div className={`${styles.sidebarItem} ${styles.active}`}>
          <FontAwesomeIcon icon={faHome} />
          <span>Overview</span>
        </div>
        <div className={styles.sidebarItem}>
          <FontAwesomeIcon icon={faSync} />
          <span>My loops</span>
        </div>
        <div className={styles.sidebarItem}>
          <FontAwesomeIcon icon={faPlus} />
          <span>New loop</span>
        </div>
        <div className={styles.sidebarItem}>
          <FontAwesomeIcon icon={faClipboard} />
          <span>Board</span>
        </div>
        <div className={styles.sidebarItem}>
          <FontAwesomeIcon icon={faUsers} />
          <span>All Matches</span>
        </div>
        <div className={styles.sidebarItem}>
          <FontAwesomeIcon icon={faFileAlt} />
          <span>My Applications</span>
        </div>
        <div className={styles.sidebarItem}>
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span>Questions</span>
        </div>
        <div className={styles.sidebarItem}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Inbox</span>
        </div>
      </div>
      <div className={styles.additionalBlock}>
        {/* Your additional block content */}
        <p>Additional Block</p>
      </div>
    </div>
  );
};

export default Sidebar;

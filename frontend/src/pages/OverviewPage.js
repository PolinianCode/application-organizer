import React from 'react';
import styles from '../PageStyles/overview.module.css'
import Sidebar from '../components/overview/SidebarComponent';


export default function Overview() {
  return (
    <div className={styles.overviewContainer}>
      
      <div className={styles.workPanel}>
        <Sidebar />
      </div>
    </div>
  )
}
import * as React from 'react';
import styles from "./Card.module.css";
import Chip from '@mui/material/Chip';

export default function Card({ image, follows, name }) {
  follows = follows + " Follows";
  return (
    <>
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div className={styles.chipContainer}>
          <Chip sx={{ backgroundColor: 'black', color: 'white' }} size="small" label={follows} />
        </div>
      </div>
      <div className={styles.color}>
        <p className={styles.cardArtist}>{name}</p>
      </div>
    </div>
    </>
  );
}
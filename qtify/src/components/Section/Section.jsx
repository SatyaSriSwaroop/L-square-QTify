import React, { useEffect } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { useState } from "react";
import Button from "../Button/Button";

const Section = (title, collapse) => {
    title = "Top Albums";
    const [albums, setAlbums] = useState([]);

    const getAlbums = async () => {
        try{
            let response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
            console.log(response.data);
            setAlbums(response.data);
        }
        catch(err)
        {
            console.log(err);
        }
    };

    getAlbums();
    // useEffect(() => {
    //     getAlbums();
    //   }, [albums]);

    
    return (
        <div className={styles.AlbumsContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Top Albums</h2>
        <Button text="Collapse"/>
      </div>
      <div className={styles.grid}>
        {albums.map((album, index) => (
          <Card 
            key={index} 
            image={album.image} 
            follows={album.follows} 
            name={album.title} 
          />
        ))}
      </div>
    </div>
    );
}

export default Section;

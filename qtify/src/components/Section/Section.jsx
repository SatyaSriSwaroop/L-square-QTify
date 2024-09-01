import React, { useEffect } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { useState } from "react";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";

const Section = (title) => {
    title = "Top Albums";
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [collapse, setCollapse] = useState(true);
    const [newCollapse, setNewCollapse] = useState(true);

    const getTopAlbums = async () => { 
        try{
            let response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
            console.log(response.data);
            setTopAlbums(response.data);
        }
        catch(err)
        {
            console.log(err);
        }
    };

    const getNewAlbums = async () => { 
      try{
          let response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
          console.log(response.data);
          setNewAlbums(response.data);
      }
      catch(err)
      {
          console.log(err);
      }
  };

    // getAlbums();
    useEffect(() => {
      getTopAlbums();
      getNewAlbums();
      }, []);

    
    return (
      <>
        <div className={styles.AlbumsContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Top Albums</h2>
        <Button text={collapse ? "Show All" : "Collapse"} collapse={collapse} handleCollapse={setCollapse}/>
      </div>
      {(collapse) ? 
        (<div>{topAlbums.length > 0 ? (
          <Carousel items={topAlbums} renderItem={(album) => (
            <Card image={album.image} follows={album.follows} name={album.title}/>
          )} />
        ) : (<p>Loading...</p>)}</div>) :
      (<div className={styles.grid}>
        {topAlbums.map((album, index) => (
          <Card 
            key={index} 
            image={album.image} 
            follows={album.follows} 
            name={album.title} 
          />
        ))}
      </div>)
}
    </div>

    {/* New Albums */}
    <div className={styles.AlbumsContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>New Albums</h2>
        <Button text={collapse ? "Show All" : "Collapse"} collapse={newCollapse} handleCollapse={setNewCollapse}/>
      </div>
      {(newCollapse) ? 
        (<div>{newAlbums.length > 0 ? (
          <Carousel items={newAlbums} renderItem={(album) => (
            <Card image={album.image} follows={album.follows} name={album.title}/>
          )} />
        ) : (<p>Loading...</p>)}</div>) :
      (<div className={styles.grid}>
        {newAlbums.map((album, index) => (
          <Card 
            key={index} 
            image={album.image} 
            follows={album.follows} 
            name={album.title} 
          />
        ))}
      </div>)
}
    </div>
    </>
    );
}

export default Section;

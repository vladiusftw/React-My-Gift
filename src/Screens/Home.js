import React, { useEffect, useState } from 'react'
import AutoPlaySilentVideo from '../Components/AutoPlaySilentVideo'
import TopBar from '../Components/TopBar'
import "../Styles/Home.css"
import bgVid from '../bgVid.mp4'
import Grid from '@mui/material/Grid';
import Card from '../Components/Card'
import { db } from '../Firebase'
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import LoadingOverlay from 'react-loading-overlay';

const Home = () => {
  const [poems,setPoems] = useState([])
  const [isActive,setActive] = useState(true);

  const getPoems = async() => {
    const q = query(collection(db, "poems"),orderBy("len","desc"));

    const querySnapshot = await getDocs(q);
    const temp = []
    querySnapshot.forEach((doc) => {
      const item = {
        content: doc.data().content,
        isMine: doc.data().isMine
      };
      temp.push(item);
    });
    setPoems([...temp]);
    setActive(false);
  }
  useEffect(() => {
    getPoems();
  },[])
  return (
    <LoadingOverlay
      active={isActive}
      spinner
      text='Loading your content...'
    >
      <AutoPlaySilentVideo className={'video-tag'} video={bgVid} />
      <TopBar />
      <Grid container rowGap={{xs:5,sm:5,md:5,lg:5}} columnSpacing={{sm:5,md:10,lg:20}} justifyContent="center" className='cards'>
        {
          poems.map((item,index) => {
            return(
              <Grid key={index} item xs={10} sm={10} md={5} display={"flex"}>
                <Card content={item.content} isMine={item.isMine}/>
              </Grid>
            )
          })
        }
      </Grid>
    </LoadingOverlay>
  )
}

export default Home
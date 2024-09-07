import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { default as UITabs} from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function Tabs({handleChange}) {
  const [value, setValue] = React.useState('All');
  const [geners, setGeners] = useState([]);

  const getGeners = async () => { 
    try{
        let response = await axios.get("https://qtify-backend-labs.crio.do/genres");
        setGeners(response.data.data);
    }
    catch(err)
    {
        console.log(err);
    }
};

  const handleChangeInput = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getGeners();
    }, []);

  return (
    <Box>
    <UITabs
  value={value}
  onChange={handleChangeInput}
  aria-label="wrapped label tabs example"
  TabIndicatorProps={{
          style: {
            backgroundColor: 'green', // Green color for the highlight bar
          },
        }}
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none', // Disable uppercase text
          },
          '& .Mui-selected': {
            color: 'white !important', // Set the selected tab text color to green
          },
        }}>

<Tab sx={{ color: 'white'}} label="All" value="All" onClick={() => {
            handleChange("All");
          }} />
  {geners.map((gener, index) => (
          <Tab sx={{ color: 'white'}} label={gener.label} value={gener.key} onClick={() => {
            handleChange(gener.label);
          }} />
          ))}
  
</UITabs>
</Box>
  );
}
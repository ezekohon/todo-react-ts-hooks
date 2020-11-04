import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import axios from 'axios';
import { HNItem } from './types';
import { List, ListItem, ListItemText, TextField } from '@material-ui/core';

function App() {
  const [items, setItems] = useState<HNItem[]>([]);
  const [query, setQuery] = useState('redux');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`,
      );
      console.log(result)
      setItems(result.data.hits);
    };
 
    fetchData();
  }, [query]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <>
    <TextField id="standard-basic" label="Search" value={query} onChange={handleChange}/>
    <List>
      {items.map(item => (
        <ListItem button>
        <ListItemText primary={item.title} />
      </ListItem>
      ))}
    </List>
    </>
  );
}

export default App;

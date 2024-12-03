'use client';

import React, {useEffect, useState} from 'react';
import json from '@/../config/data.json'
import {findById} from "@/app/Editor/utils/FindById";
import classes from './Edited.module.css'
import {FaEdit} from "react-icons/fa";
import ChangeTextModal from "@/app/Editor/components/modals/ChangeTextModal";
import ChangeImageModal from "@/app/Editor/components/modals/ChangeImageModal";

function Edited({id, type, src,children, ...params}) {
  const [isDev, setIsDev] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsDev(params.get('dev') === 'true');
  }, []);




  const [text, setText] = React.useState('');

  useEffect(() => {
    if(type === 'text'){
      const targetItem = findById(json.texts, id);
      if (targetItem) {
        setText(targetItem.value)
      }
    }
  }, [])

  if(type === 'image' && !isDev){ return children}
  if(type === 'text' && !isDev){ return text}

  return (
    <div {...params}  className={classes.wrp}>
      {isDev && (
        <>
          {type === 'text' && (<ChangeTextModal id={id} oldValue={text}/>)}
          {type === 'image' && (<ChangeImageModal id={id} src={src}/>)}
        </>
      )}
      {type === 'text' && text}
      {type === 'image' && children}
    </div>
  );
}

export default Edited;
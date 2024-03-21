import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Host = () => {
  const [htmls, setHtmls] = useState('');
  const [styles, setStyles] = useState('');
  const { pageId } = useParams();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}pages/build/${pageId}/content`)
      .then((res) => {
        setHtmls(res.data['mycustom-html']);
        setStyles(res.data['mycustom-css']);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pageId]);
    
  return (
    <div>
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{ __html: htmls }} />
    </div>
  );
};

export default Host;

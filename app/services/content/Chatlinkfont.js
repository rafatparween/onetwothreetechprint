// pages/index.js
import Head from 'next/head';
import Chatlink from './Chatlink';


const Chatlinkfont = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      
      <h1>Welcome to the Chat App</h1>
      <Chatlink/>
    </div>
  );
};

export default Chatlinkfont;

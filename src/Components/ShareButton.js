// ShareButtons.js
import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
    return (
        <div style={{display : "flex", alignItems  :"center", gap : "10px"}}>
            {/* <h3>Share this article:</h3> */}
            <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            {/* Add more platforms as needed */}
        </div>
    );
};

export default ShareButtons;

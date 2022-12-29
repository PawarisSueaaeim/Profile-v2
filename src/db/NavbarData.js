/* eslint-disable jsx-a11y/anchor-has-content */
import * as FaIcons from "react-icons/fa";

/* eslint-disable jsx-a11y/alt-text */
export const headNavbar = [
    {
        name: 'Pawaris Suea-aeim',
        title: 'Computer Engineering',
        image: <img src={require("../img/profile.png")} />
    },
];

export const listMenu = [
    {
        lable: 'Home',
        icon: <FaIcons.FaHome />,
        link: '/'
    },{
        lable: 'Skills',
        icon: <FaIcons.FaCode />,
        link: '/Skills'
    },{
        lable: 'Experience',
        icon: <FaIcons.FaSuitcase />,
        link: '/Experience'
    },{
        lable: 'Certificate',
        icon: <FaIcons.FaCertificate />,
        link: '/Certificate'
    },{
        lable: 'Comment',
        icon: <FaIcons.FaSmile />,
        link: '/Comment'
    },
];

export const footerNavbar = [
    {
        item: <a href="https://github.com/PawarisSueaaeim" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/glyph-neue/40/000000/github.png"/></a>
    },{
        item: <a href="https://web.facebook.com/profile.php?id=100006235390790" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/40/000000/facebook-new.png"/></a>
    },{
        item: <a href="https://www.instagram.com/pleumqz/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"/></a>
    },{
        item: <a href="https://www.youtube.com/channel/UChRwgbwyZU1eZFuqilV9bmg/featured" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/40/000000/youtube-play.png"/></a>
    },
];
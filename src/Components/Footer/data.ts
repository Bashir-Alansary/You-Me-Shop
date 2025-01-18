import visa from "../Assets/images/visa.png"
import mastercard from "../Assets/images/mastercard.png"
import paypal from "../Assets/images/paypal.png"
import amazon from "../Assets/images/amazon.png"
import ebay from "../Assets/images/ebay.png"
import discover from "../Assets/images/discover.png"
import facebook from "../Assets/images/facebook.png"
import instagram from "../Assets/images/instagram.png"
import whatsapp from "../Assets/images/whatsapp.png"
import youtube from "../Assets/images/youtube.png"
import twitter from "../Assets/images/twitter.png"
import google from "../Assets/images/google.png"

export const pages = [
    {
        id: 1,
        link: '/about',
        name: "About",
    },
    {
        id: 2,
        link: '/contact',
        name: "Contact",
    },
    {
        id: 3,
        link: '/cart',
        name: "Cart",
    },
    {
        id: 4,
        link: '/shop',
        name: "Shop",
    },
]

export const media = [
    {
        id: 1,
        link: 'https://www.facebook.com/profile.php?id=100074865132929',
        icon: facebook,
    },
    {
        id: 2,
        link: '#',
        icon: instagram,
    },
    {
        id: 3,
        link: '#',
        icon: whatsapp,
    },
    {
        id: 4,
        link: 'https://www.youtube.com/@let_x',
        icon: youtube,
    },
    {
        id: 5,
        link: '#',
        icon: twitter,
    },
    {
        id: 6,
        link: 'mailto:bashiralansary306@gmail.com',
        icon: google,
    },
]
export const paymentWays = [
    {
        id:1,
        name: "visa",
        img: visa,
    },
    {
        id:2,
        name: "mastercard",
        img: mastercard,
    },
    {
        id:3,
        name: "paypal",
        img: paypal,
    },
    {
        id:4,
        name: "amazon",
        img: amazon,
    },
    {
        id:5,
        name: "ebay",
        img: ebay,
    },
    {
        id:6,
        name: "discover",
        img: discover,
    },
]

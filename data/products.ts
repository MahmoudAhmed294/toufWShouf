
import img1 from '@/assets/images/products/1.jpg'
import img2 from '@/assets/images/products/2.jpg'
import img3 from '@/assets/images/products/3.jpg'
import img4 from '@/assets/images/products/4.jpg'
import img5 from '@/assets/images/products/5.jpg'
import img6 from '@/assets/images/products/6.jpg'

interface Product{
    id:number;
title: string;
rating: number;
price: number;
mainImage: string;
offerPrice: number | null;
}

export const products :Product[] = [
    {
        id:1,
        title:"The Egyptian Gulf (Hospice of the Sultan)",
        rating:1.5,
        price:850,
        mainImage:img1.src,
        offerPrice:700
    },
    {
        id:2,
        title:"The Egyptian Gulf (Hospice of the Sultan)",
        rating:4.5,
        price:850,
        mainImage:img2.src,
        offerPrice:700
    },
    {
        id:3,
        title:"The Egyptian Gulf (Hospice of the Sultan)",
        rating:3.5,
        price:850,
        mainImage:img3.src,
        offerPrice:700
    },
    {
        id:4,
        title:"The Egyptian Gulf (Hospice of the Sultan)",
        rating:3,
        price:850,
        mainImage:img4.src,
        offerPrice:700
    },
    {
        id:5,
        title:"The Egyptian Gulf (Hospice of the Sultan)",
        rating:2,
        price:850,
        mainImage:img5.src,
        offerPrice:700
    },
    {
        id:6,
        title:"The Egyptian Gulf (Hospice of the Sultan)",
        rating:4,
        price:850,
        mainImage:img6.src,
        offerPrice:700
    },

]
import { clientReviewArrType, newsArrType } from './../../types/index';
import { Breadcrumb_card_img1, Breadcrumb_card_img2, Breadcrumb_card_img3, Breadcrumb_card_img4 } from "@/assets/LandingPage/breadcrumb";
import { serviceImg1, serviceImg2, serviceImg3, serviceImg4, serviceImg5 } from "@/assets/LandingPage/service";
import { breadcrumbArrType, serviceArrType } from "@/types";
import { billBoard, planning } from '@/assets/LandingPage/news';

export const breadcrumbArr:breadcrumbArrType[] = [
    {
        id:1,
        price:"$23/install",
        title:"brand activation",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis!",
        img: Breadcrumb_card_img1
    },
    {
        id:2,
        price:"$27/install",
        title:"DOOH",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis!",
        img: Breadcrumb_card_img2
    },
    {
        id:3,
        price:"$31/install",
        title:"digital engagement",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis!",
        img: Breadcrumb_card_img3
    },
    {
        id:4,
        price:"$36/install",
        title:"add engagement",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis!",
        img: Breadcrumb_card_img4
    },
]

export const serviceArr:serviceArrType[] =[
    {
        id:1,
        img:serviceImg1,
        title:"business solutions",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, magni.",
        mt:'0'
    },
    {
        id:2,
        img:serviceImg2,
        title:"marketing strategy",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, magni.",
        mt:'16'
    },
    {
        id:3,
        img:serviceImg3,
        title:"business planing",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, magni.",
        mt:'0'
    },
    {
        id:4,
        img:serviceImg4,
        title:"social branding",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, magni.",
        mt:"0"
    },
    {
        id:5,
        img:serviceImg5,
        title:"risk marketing",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, magni.",
        mt:'16'
    },
    {
        id:6,
        img:serviceImg5,
        title:"risk marketing",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, magni.",
        mt:"0"
    },
]

export const clientReviewArr:clientReviewArrType[]=[
    {
        id:1,
        title:"project",
        amount:"1,219",
        description:"successfully project"
    },
    {
        id:2,
        title:"years",
        amount:"47",
        description:"year experience"
    },
    {
        id:3,
        title:"awards",
        amount:"25",
        description:"winning awards"
    },
    {
        id:4,
        title:"clients",
        amount:"481",
        description:"satisfied clients"
    },
]
export const newsArr:newsArrType[]=[
 {
    id:1,
    img:billBoard,
    title:"tips for choosing a strategic billboard location",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet recusandae at nam autem quidem, laborum architecto?",
    tag:"billboard"
 },
 {
    id:2,
    img:planning,
    title:"how to organize files at a design agency before  printing",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet recusandae at nam autem quidem, laborum architecto?",
    tag:"advertising"
 },
]
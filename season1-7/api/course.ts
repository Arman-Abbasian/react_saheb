export interface ICourse{
    id:number;
    title:string;
    text:string;
    badges:string[];
    date:string;
    score:number;
    condition:"All"|"Upcoming"|"Active"|"Completed"
    image:string
}
export const courses:ICourse[]=[
    {id:1,title:"course 1",text:"this course is a new course and is very important this course is a new course and is very important this course is a new course and is very important this course is a new course and is very important",
badges:["react","vue","angular"],date:"2022-05-04T12:00:53.307Z",score:3.2,condition:"Upcoming",
image:"https://vastphotos.com/files/uploads/social/good-morning-new-york.jpg"},
{id:2,title:"course 1",text:"this course is a new course and is very important this course is a new course and is very important this course is a new course and is very important this course is a new course and is",
badges:["react","vue","angular"],date:"2022-05-04T12:00:53.307Z",score:4.2,condition:"Active",
image:"https://vastphotos.com/files/uploads/photos/10990/autumn-landscape-and-lake-l.jpg?v=20220712073521"},
{id:3,title:"course 1",text:"this course is a new course and is very important",
badges:["react","vue","angular"],date:"2022-05-04T12:00:53.307Z",score:5,condition:"Completed",
image:"https://vastphotos.com/files/uploads/heroes/11365/hero-1600x800.jpg?v=20221031140451-1668626095"}
]
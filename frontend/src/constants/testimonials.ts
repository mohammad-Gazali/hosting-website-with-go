import { basic } from ".";
import img1 from "../assets/person/person1.jpg";
import img2 from "../assets/person/person2.jpg";
import img3 from "../assets/person/person3.jpg";

export default [
    {
        id: 1,
        image: img1,
        name: "Jack Smith",
        work: "Microsoft Software Engineer",
        content: `I have been using ${basic.name} hosting for the past year and I am extremely satisfied with the service. The team is always quick to respond to any issues I have. The user interface is easy to use and the pricing is very competitive. I highly recommend ${basic.name} hosting to anyone.`
    },
    {
        id: 2,
        image: img2,
        name: "David Johnson",
        work: "Facebob's CEO",
        content: `I switched to ${basic.name} hosting a few months ago and I couldn't be happier. The customer service is top-notch and the pricing is very reasonable. My websites are always up and running smoothly thanks to ${basic.name} hosting. I highly recommend giving them a try.`
    },
    {
        id: 3,
        image: img3,
        name: "Michael Williams",
        work: "Senior Twitter Developer",
        content: `I have been using ${basic.name} hosting for all of my websites and have never had any issues. The support team is always available and helpful, and the loading speeds are fast. I highly recommend Gazali hosting to anyone in need of a dependable hosting solution.`
    }
] satisfies Testimonial[];


export interface Testimonial {
    id: number;
    image: string;
    name: string;
    work: string;
    content: string;
}
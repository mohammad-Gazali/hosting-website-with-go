import postgres from "../assets/databases/postgres.svg";
import mysql from "../assets/databases/mysql.svg";
import microsoftsql from "../assets/databases/microsoftsql.svg";
import redis from "../assets/databases/redis.svg";
import mongodb from "../assets/databases/mongodb.svg";

export default [
    {
        image: postgres,
        name: "Postgres",
        price: 30,
        description: "An open-source relational database known for robustness, extensibility, and advanced features, ideal for complex applications.",
    },
    {
        image: mysql,
        name: "MySQL",
        price: 25,
        description: "A popular open-source relational database management system favored for its speed, ease of use, and scalability.",
    },
    {
        image: microsoftsql,
        name: "Microsoft SQL Server",
        price: 30,
        description: "A relational database system designed for enterprise-level data management, with strong integration with Microsoft products.",
    },
    {
        image: redis,
        name: "Redis",
        price: 15,
        description: "An in-memory data store, commonly used for caching and real-time analytics, prized for its lightning-fast performance and simplicity.",
    },
    {
        image: mongodb,
        name: "MongoDB",
        price: 20,
        description: "A NoSQL database renowned for scalability and handling unstructured data, making it ideal for modern, data-rich applications.",
    },
] satisfies Database[];

interface Database {
    image: string;
    name: string;
    price: number;
    description: string;
}
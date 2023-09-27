export default [
    {
        name: "com",
        price: 15,
    },
    {
        name: "net",
        price: 12,
    },
    {
        name: "org",
        price: 10,
    },
    {
        name: "ai",
        price: 40,
    },
    {
        name: "co",
        price: 30,
    },
    {
        name: "xyz",
        price: 20,
    },
] satisfies Domain[];

interface Domain {
    name: string;
    price: number;
}
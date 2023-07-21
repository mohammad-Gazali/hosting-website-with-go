import { basic } from ".";


export default [
    {
        id: 1,
        question: `How does ${basic.name} Hosting differ from other hosting providers?`,
        answer: `${basic.name} Hosting offers fast and reliable hosting at an affordable price. Our servers are optimized for speed and performance, and our team is available 24/7 to provide support and assistance. We also offer a variety of hosting plans to fit your specific needs, including wordpress hosting, VPS hosting, and cloud hosting.`
    },
    {
        id: 2,
        question: `How do I get started with ${basic.name} Hosting?`,
        answer: `To get started with ${basic.name} Hosting, simply select the hosting plan that best fits your needs and follow the prompts to complete the sign-up process. Once your account is set up, you can start building and hosting your website right away. If you need any assistance, our team is available to help you get started.`
    },
    {
        id: 3,
        question: "Is there a money-back guarantee?",
        answer: "Yes, we offer a 30-day money-back guarantee on all of our hosting plans. If you are not satisfied with our service for any reason, you can request a full refund within the first 30 days of your account activation."
    },
    {
        id: 4,
        question: "Do you offer a control panel?",
        answer: "Yes, we offer a control panel with all of our hosting plans. The control panel allows you to easily manage your hosting account, including creating and managing websites, setting up email accounts, and accessing logs and statistics."
    },
    {
        id: 5,
        question: "Do you offer email hosting?",
        answer: "Yes, we offer email hosting with all of our hosting plans. You can create and manage email accounts through your control panel, and access your email through a webmail interface or by using an email client such as Microsoft Outlook or Apple Mail."
    },
    {
        id: 6,
        question: "Do you offer a free domain?",
        answer: "We offer a free domain name with certain hosting plans. This can be a convenient way to register a domain and set up hosting for your website in one place."
    },
    {
        id: 7,
        question: "Do you offer a website builder?",
        answer: "We don't offer a website builder tool but you can check our website professional template with wordpress hosting which is included to our wordpress hosting plan."
    },
    {
        id: 8,
        question: "Do you offer SSL certificates?",
        answer: "SSL (Secure Sockets Layer) certificates are used to encrypt data transmitted between a website and its visitors. Having an SSL certificate is important for the security and credibility of your website, and we offer SSL certificates for all our plans."
    },
    {
        id: 9,
        question: "Do you offer database support?",
        answer: "If you are building a website that requires a database, we offer also database support. Common database options include MySQL, PostgreSQL, and MongoDB."
    },
    {
        id: 10,
        question: "Do you offer server backups?",
        answer: "Yes, Server backups are important to ensure the security and availability of your website's data. We offer automatic backup services to ensure that your data is regularly backed up and can be restored in the event of a problem."
    }
] satisfies Question[];


export interface Question {
    id: number;
    question: string;
    answer: string;
}
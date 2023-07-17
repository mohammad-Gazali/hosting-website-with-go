import WordpressIcon from "../assets/wordpress.svg";
import VPSIcon from "../assets/vps.svg";
import CloudIcon from "../assets/cloud.svg";
import DatabaseIcon from "../assets/databases.svg";
import DomainsIcon from "../assets/domains.svg";

export default [
	{
		id: 1,
		icon: WordpressIcon,
		title: "Wordpress",
		content:
			"Powerful and user-friendly platform for creating and managing websites with customizable themes and plugins.",
		link: "/services/hosting/wordpress",
		features: [
			{
				id: 1,
				title: "WordPress Hosting",
				description:
					"Specialized hosting environment optimized for seamless WordPress performance and security, empowering you to focus on content creation.",
			},
			{
				id: 2,
				title: "Managed WordPress",
				description:
					"Enjoy hassle-free WordPress hosting with automated updates, backups, and security measures, leaving you free to focus on your content.",
			},
			{
				id: 3,
				title: "WordPress Themes",
				description:
					"Choose from a vast library of professionally designed themes to customize the look and feel of your WordPress website effortlessly.",
			},
			{
				id: 4,
				title: "WordPress Plugins",
				description:
					"Extend the functionality of your WordPress website with a vast selection of plugins, allowing for custom features and enhancements.",
			},
			{
				id: 5,
				title: "WordPress Security",
				description:
					"Protect your website from vulnerabilities and malicious attacks with robust security measures and proactive monitoring.",
			},
		],
	},
	{
		id: 2,
		icon: CloudIcon,
		title: "Cloud Hosting",
		content:
			"Reliable and flexible hosting solution utilizing virtual servers distributed across multiple data centers for high availability and scalability.",
		link: "/services/hosting/cloud",
		features: [
			{
				id: 1,
				title: "Cloud Infrastructure",
				description:
					"Harness the power of scalable and resilient cloud infrastructure to ensure your website is always available and can handle high traffic loads.",
			},
			{
				id: 2,
				title: "Cloud Performance",
				description:
					"Experience exceptional website speed and performance with cloud hosting's distributed infrastructure and advanced caching mechanisms.",
			},
			{
				id: 3,
				title: "Cloud Scalability",
				description:
					"Scale your website effortlessly with cloud hosting, allowing you to adapt to changing demands and accommodate rapid growth.",
			},
			{
				id: 4,
				title: "Cloud Reliability",
				description:
					"Rely on the stability and redundancy of cloud hosting to minimize downtime and ensure uninterrupted access to your website.",
			},
			{
				id: 5,
				title: "Cloud Backup",
				description:
					"Safeguard your website data with automated and reliable cloud backups, providing easy restoration in case of data loss or corruption.",
			},
		],
	},
	{
		id: 3,
		icon: VPSIcon,
		title: "VPS Hosting",
		content:
			"Virtual Private Server hosting provides dedicated resources, scalability, and control for optimal website performance and security.",
		link: "/services/hosting/vps",
		features: [
			{
				id: 1,
				title: "VPS Servers",
				description:
					"Empower your website with dedicated resources, root access, and customizable configurations for enhanced control and performance.",
			},
			{
				id: 2,
				title: "VPS Scalability",
				description:
					"Scale your resources on-demand with VPS hosting, allowing your website to handle traffic spikes and grow alongside your business.",
			},
			{
				id: 3,
				title: "VPS Security",
				description:
					"Benefit from enhanced security features and isolated environments with VPS hosting, safeguarding your website from potential threats.",
			},
			{
				id: 3,
				title: "VPS Customization",
				description:
					"Tailor your server environment to meet your specific requirements and preferences, maximizing performance and efficiency.",
			},
			{
				id: 4,
				title: "VPS Flexibility",
				description:
					"Enjoy full root access and the ability to install custom applications, allowing you to create a tailored hosting environment.",
			},
		],
	},
	{
		id: 4,
		icon: DatabaseIcon,
		title: "Databases",
		content:
			"Efficient storage and retrieval systems for organizing and managing structured information, crucial for dynamic websites and applications.",
		link: "/services/databases",
		features: [
			{
				id: 1,
				title: "Database Management",
				description:
					"Efficiently organize and maintain your data with advanced database management tools, ensuring reliability and data integrity.",
			},
			{
				id: 2,
				title: "Database Integration",
				description:
					"Seamlessly integrate databases into your website or application, enabling efficient data storage, retrieval, and manipulation.",
			},
			{
				id: 3,
				title: "Database Backups",
				description:
					"Ensure the safety and integrity of your data with regular automated backups, providing peace of mind against potential data loss.",
			},
			{
				id: 4,
				title: "Database Optimization",
				description:
					"Fine-tune your databases for improved performance and faster query execution, enhancing your website's responsiveness.",
			},
			{
				id: 5,
				title: "Database Replication",
				description:
					"Ensure data availability and fault tolerance by setting up database replication, enabling seamless failover and disaster recovery.",
			},
		],
	},
	{
		id: 5,
		icon: DomainsIcon,
		title: "Domains",
		content:
			"Register and manage your unique online identity with a wide range of domain extensions, ensuring your brand stands out in the digital world.",
		link: "/services/domains",
		features: [
			{
				id: 1,
				title: "Domain Registration",
				description:
					"Secure your online presence by registering your desired domain name, helping you establish a unique and memorable website address.",
			},
			{
				id: 2,
				title: "Domain Transfers",
				description:
					"Transfer your existing domains to our platform with ease, consolidating your management and enjoying competitive pricing and support.",
			},
			{
				id: 3,
				title: "Domain Privacy",
				description:
					"Protect your personal information from public access by opting for domain privacy, keeping your identity confidential.",
			},
			{
				id: 4,
				title: "Domain Management",
				description:
					"Streamline the management of your domains with intuitive tools for DNS configuration, subdomains, and domain forwarding.",
			},
			{
				id: 5,
				title: "Domain Extensions",
				description:
					"Explore a wide variety of domain extensions to find the perfect fit for your website, reflecting your industry or location.",
			},
		],
	},
] satisfies Service[];

export interface Service {
	id: number;
	icon: string;
	title: string;
	content: string;
	link: string;
	features: Feature[];
}

export interface Feature {
	id: number;
	title: string;
	description: string;
}

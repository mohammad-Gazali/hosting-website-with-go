import WordpressIcon from "../assets/wordpress.svg";
import VPSIcon from "../assets/vps.svg";
import CloudIcon from "../assets/cloud.svg";
import DatabaseIcon from "../assets/databases.svg";
import DomainsIcon from "../assets/domains.svg";
import { Feature, cloudHostingFeatures, databasesFeatures, domainsFeatures, vpsHostingFeatures, wordpressHostingFeatures } from "./services-features";
import { WhenToUseCase, cloudWhenToUse, vpsWhenToUse, wordpressWhenToUse } from "./hosting-when-to-use";
import { HostingPlan, cloudPlans, vpsPlans, wordpressPlans } from "./hosting-plans";



const services: Service[] = [
	{
		id: 1,
		icon: WordpressIcon,
		title: "WordPress Hosting",
		content: "Powerful and user-friendly platform for creating and managing websites with customizable themes and plugins.",
		link: "/services/hosting/wordpress",
		features: wordpressHostingFeatures,
		hostingPlans: wordpressPlans,
		whenToUse: wordpressWhenToUse,
	},
	{
		id: 2,
		icon: CloudIcon,
		title: "Cloud Hosting",
		content: "Reliable and flexible hosting solution utilizing virtual servers distributed across multiple data centers for high availability and scalability.",
		link: "/services/hosting/cloud",
		features: cloudHostingFeatures,
		hostingPlans: cloudPlans,
		whenToUse: cloudWhenToUse,
	},
	{
		id: 3,
		icon: VPSIcon,
		title: "VPS Hosting",
		content: "Virtual Private Server hosting provides dedicated resources, scalability, and control for optimal website performance and security.",
		link: "/services/hosting/vps",
		features: vpsHostingFeatures,
		hostingPlans: vpsPlans,
		whenToUse: vpsWhenToUse,
	},
	{
		id: 4,
		icon: DatabaseIcon,
		title: "Databases",
		content: "Efficient storage and retrieval systems for organizing and managing structured information, crucial for dynamic websites and applications.",
		link: "/services/databases",
		features: databasesFeatures,
	},
	{
		id: 5,
		icon: DomainsIcon,
		title: "Domains",
		content: "Register and manage your unique online identity with a wide range of domain extensions, ensuring your brand stands out in the digital world.",
		link: "/services/domains",
		features: domainsFeatures,
	},
];

export default services;

export const wordpressService = services[0];
export const cloudService = services[1];
export const vpsService = services[2];
export const databasesService = services[3];
export const domainsService = services[4];

export interface Service {
	id: number;
	icon: string;
	title: string;
	content: string;
	link: string;
	features: Feature[];
	hostingPlans?: HostingPlan<string>[];
	whenToUse?: WhenToUseCase[];
}

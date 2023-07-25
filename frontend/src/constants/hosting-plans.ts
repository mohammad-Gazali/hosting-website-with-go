type WordPressComparedFeatures =
	| "storage"
	| "freeDomain"
	| "emailAccounts"
	| "support"
	| "backups"
	| "ssl"
	| "installer"
	| "customThemes"
	| "pluginSupport"
	| "seoTools";

type CloudComparedFeatures =
	| "storage"
	| "bandwidth"
	| "websites"
	| "ssl"
	| "dedicatedIP"
	| "support"
	| "backups"
	| "scalability"
	| "cdn"
	| "firewall";

type VPSComparedFeatures =
	| "storage"
	| "CPU"
	| "RAM"
	| "bandwidth"
	| "dedicatedIP"
	| "rootAccess"
	| "support"
	| "storageType"
	| "operatingSystem"
	| "backups";


export interface PlanFeature {
	id: string;
	content: string;
	note?: string;
}

export interface ComparedPlanFeature {
	id: string;
	value: string | boolean;
	note?: string;
}

export type ComparedFeatures<T extends string> = {
	[key in T]: ComparedPlanFeature;
}

export interface HostingPlan<T extends string> {
	id: string;
	name: string;
	monthlyPricing: number;
	yearlyPricing: number;
	twoYearsPricing: number;
	features: PlanFeature[];
	comparedFeatures: ComparedFeatures<T>;
}

// WordPress Hosting Plans
const wordpressPlan1: HostingPlan<WordPressComparedFeatures> = {
	id: "wp1",
	name: "WordPress Basic",
	monthlyPricing: 10,
	yearlyPricing: 100,
	twoYearsPricing: 180,
	features: [
		{ id: "wp1f1", content: "5 GB Storage" },
		{ id: "wp1f2", content: "Free Domain for 1 Year", note: "Only for 1 year or 2 year subscriptions" },
		{ id: "wp1f3", content: "10 Email Accounts" },
		{ id: "wp1f4", content: "24/7 Support" },
		{ id: "wp1f5", content: "Free SSL Certificate" },
		{ id: "wp1f6", content: "WordPress Installer" },
		{ id: "wp1f7", content: "Plugin Support" },
	],
	comparedFeatures: {
		storage: { id: "wp1cf1", value: "5 GB" },
		freeDomain: { id: "wp1cf2", value: true, note: "Only for 1 year or 2 year subscriptions" },
		emailAccounts: { id: "wp1cf3", value: "10" },
		support: { id: "wp1cf4", value: true },
		backups: { id: "wp1cf5", value: false },
		ssl: { id: "wp1cf6", value: true },
		installer: { id: "wp1cf7", value: true },
		customThemes: { id: "wp1cf8", value: false },
		pluginSupport: { id: "wp1cf9", value: true },
		seoTools: { id: "wp1cf10", value: false },
	},
};

const wordpressPlan2: HostingPlan<WordPressComparedFeatures> = {
	id: "wp2",
	name: "WordPress Pro",
	monthlyPricing: 20,
	yearlyPricing: 200,
	twoYearsPricing: 360,
	features: [
		{ id: "wp2f1", content: "10 GB Storage" },
		{ id: "wp2f2", content: "Free Domain for 1 Year", note: "Only for 1 year or 2 year subscriptions" },
		{ id: "wp2f3", content: "20 Email Accounts" },
		{ id: "wp2f4", content: "24/7 Support" },
		{ id: "wp2f5", content: "Automatic Backups" },
		{ id: "wp2f6", content: "Free SSL Certificate" },
		{ id: "wp2f7", content: "WordPress Installer" },
		{ id: "wp2f8", content: "Plugin Support" },
		{ id: "wp2f9", content: "SEO Tools" },
	],
	comparedFeatures: {
		storage: { id: "wp2cf1", value: "10 GB" },
		freeDomain: { id: "wp2cf2", value: true, note: "Only for 1 year or 2 year subscriptions" },
		emailAccounts: { id: "wp2cf3", value: "20" },
		support: { id: "wp2cf4", value: true },
		backups: { id: "wp2cf5", value: true },
		ssl: { id: "wp2cf6", value: true },
		installer: { id: "wp2cf7", value: true },
		customThemes: { id: "wp2cf8", value: false },
		pluginSupport: { id: "wp2cf9", value: true },
		seoTools: { id: "wp2cf10", value: true },
	},
};

const wordpressPlan3: HostingPlan<WordPressComparedFeatures> = {
	id: "wp3",
	name: "WordPress Business",
	monthlyPricing: 30,
	yearlyPricing: 300,
	twoYearsPricing: 540,
	features: [
		{ id: "wp3f1", content: "20 GB Storage" },
		{ id: "wp3f2", content: "Free Domain for 1 Year", note: "Only for 1 year or 2 year subscriptions" },
		{ id: "wp3f3", content: "50 Email Accounts" },
		{ id: "wp3f4", content: "24/7 Support" },
		{ id: "wp3f5", content: "Automatic Backups" },
		{ id: "wp3f6", content: "Free SSL Certificate" },
		{ id: "wp3f7", content: "WordPress Installer" },
		{ id: "wp3f8", content: "Custom Themes" },
		{ id: "wp3f9", content: "Plugin Support" },
		{ id: "wp3f10", content: "SEO Tools" },
	],
	comparedFeatures: {
		storage: { id: "wp3cf1", value: "20 GB" },
		freeDomain: { id: "wp3cf2", value: true, note: "Only for 1 year or 2 year subscriptions" },
		emailAccounts: { id: "wp3cf3", value: "50" },
		support: { id: "wp3cf4", value: true },
		backups: { id: "wp3cf5", value: true },
		ssl: { id: "wp3cf6", value: true },
		installer: { id: "wp3cf7", value: true },
		customThemes: { id: "wp3cf8", value: true },
		pluginSupport: { id: "wp3cf9", value: true },
		seoTools: { id: "wp3cf10", value: true },
	},
};

// Cloud Hosting Plans
const cloudPlan1: HostingPlan<CloudComparedFeatures> = {
	id: "cloud1",
	name: "Cloud Basic",
	monthlyPricing: 15,
	yearlyPricing: 150,
	twoYearsPricing: 270,
	features: [
		{ id: "cloud1f1", content: "10 GB Storage" },
		{ id: "cloud1f2", content: "100 GB Bandwidth" },
		{ id: "cloud1f3", content: "Unlimited Websites" },
		{ id: "cloud1f4", content: "Free SSL Certificate" },
		{ id: "cloud1f5", content: "Dedicated IP Address" },
		{ id: "cloud1f6", content: "24/7 Support" },
		{ id: "cloud1f7", content: "Automatic Backups" },
		{ id: "cloud1f8", content: "Scalable Resources" },
		{ id: "cloud1f9", content: "CDN Integration" },
		{ id: "cloud1f10", content: "Security Firewall" },
	],
	comparedFeatures: {
		storage: { id: "cloud1cf1", value: "10 GB" },
		bandwidth: { id: "cloud1cf2", value: "100 GB" },
		websites: { id: "cloud1cf3", value: "Unlimited" },
		ssl: { id: "cloud1cf4", value: true },
		dedicatedIP: { id: "cloud1cf5", value: true },
		support: { id: "cloud1cf6", value: true },
		backups: { id: "cloud1cf7", value: true },
		scalability: { id: "cloud1cf8", value: true },
		cdn: { id: "cloud1cf9", value: true },
		firewall: { id: "cloud1cf10", value: true },
	},
};

const cloudPlan2: HostingPlan<CloudComparedFeatures> = {
	id: "cloud2",
	name: "Cloud Pro",
	monthlyPricing: 25,
	yearlyPricing: 250,
	twoYearsPricing: 450,
	features: [
		{ id: "cloud2f1", content: "20 GB Storage" },
		{ id: "cloud2f2", content: "200 GB Bandwidth" },
		{ id: "cloud2f3", content: "Unlimited Websites" },
		{ id: "cloud2f4", content: "Free SSL Certificate" },
		{ id: "cloud2f5", content: "Dedicated IP Address" },
		{ id: "cloud2f6", content: "24/7 Support" },
		{ id: "cloud2f7", content: "Automatic Backups" },
		{ id: "cloud2f8", content: "Scalable Resources" },
		{ id: "cloud2f9", content: "CDN Integration" },
		{ id: "cloud2f10", content: "Security Firewall" },
	],
	comparedFeatures: {
		storage: { id: "cloud2cf1", value: "20 GB" },
		bandwidth: { id: "cloud2cf2", value: "200 GB" },
		websites: { id: "cloud2cf3", value: "Unlimited" },
		ssl: { id: "cloud2cf4", value: true },
		dedicatedIP: { id: "cloud2cf5", value: true },
		support: { id: "cloud2cf6", value: true },
		backups: { id: "cloud2cf7", value: true },
		scalability: { id: "cloud2cf8", value: true },
		cdn: { id: "cloud2cf9", value: true },
		firewall: { id: "cloud2cf10", value: true },
	},
};

const cloudPlan3: HostingPlan<CloudComparedFeatures> = {
	id: "cloud3",
	name: "Cloud Business",
	monthlyPricing: 40,
	yearlyPricing: 400,
	twoYearsPricing: 720,
	features: [
		{ id: "cloud3f1", content: "50 GB Storage" },
		{ id: "cloud3f2", content: "500 GB Bandwidth" },
		{ id: "cloud3f3", content: "Unlimited Websites" },
		{ id: "cloud3f4", content: "Free SSL Certificate" },
		{ id: "cloud3f5", content: "Dedicated IP Address" },
		{ id: "cloud3f6", content: "24/7 Support" },
		{ id: "cloud3f7", content: "Automatic Backups" },
		{ id: "cloud3f8", content: "Scalable Resources" },
		{ id: "cloud3f9", content: "CDN Integration" },
		{ id: "cloud3f10", content: "Security Firewall" },
	],
	comparedFeatures: {
		storage: { id: "cloud3cf1", value: "50 GB" },
		bandwidth: { id: "cloud3cf2", value: "500 GB" },
		websites: { id: "cloud3cf3", value: "Unlimited" },
		ssl: { id: "cloud3cf4", value: true },
		dedicatedIP: { id: "cloud3cf5", value: true },
		support: { id: "cloud3cf6", value: true },
		backups: { id: "cloud3cf7", value: true },
		scalability: { id: "cloud3cf8", value: true },
		cdn: { id: "cloud3cf9", value: true },
		firewall: { id: "cloud3cf10", value: true },
	},
};

// VPS Hosting Plans
const vpsPlan1: HostingPlan<VPSComparedFeatures> = {
	id: "vps1",
	name: "VPS Basic",
	monthlyPricing: 30,
	yearlyPricing: 300,
	twoYearsPricing: 540,
	features: [
		{ id: "vps1f1", content: "50 GB Storage" },
		{ id: "vps1f2", content: "2 CPU Cores" },
		{ id: "vps1f3", content: "4 GB RAM" },
		{ id: "vps1f4", content: "5 TB Bandwidth" },
		{ id: "vps1f5", content: "Dedicated IP Address" },
		{ id: "vps1f6", content: "Full Root Access" },
		{ id: "vps1f7", content: "24/7 Support" },
		{ id: "vps1f8", content: "SSD Storage" },
		{ id: "vps1f9", content: "Operating System Choices" },
		{ id: "vps1f10", content: "Data Backup Options" },
	],
	comparedFeatures: {
		storage: { id: "vps1cf1", value: "50 GB" },
		CPU: { id: "vps1cf2", value: "2 Cores" },
		RAM: { id: "vps1cf3", value: "4 GB" },
		bandwidth: { id: "vps1cf4", value: "5 TB" },
		dedicatedIP: { id: "vps1cf5", value: true },
		rootAccess: { id: "vps1cf6", value: true },
		support: { id: "vps1cf7", value: true },
		storageType: { id: "vps1cf8", value: "SSD" },
		operatingSystem: { id: "vps1cf9", value: true },
		backups: { id: "vps1cf10", value: true },
	},
};

const vpsPlan2: HostingPlan<VPSComparedFeatures> = {
	id: "vps2",
	name: "VPS Pro",
	monthlyPricing: 50,
	yearlyPricing: 500,
	twoYearsPricing: 900,
	features: [
		{ id: "vps2f1", content: "100 GB Storage" },
		{ id: "vps2f2", content: "4 CPU Cores" },
		{ id: "vps2f3", content: "8 GB RAM" },
		{ id: "vps2f4", content: "10 TB Bandwidth" },
		{ id: "vps2f5", content: "Dedicated IP Address" },
		{ id: "vps2f6", content: "Full Root Access" },
		{ id: "vps2f7", content: "24/7 Support" },
		{ id: "vps2f8", content: "SSD Storage" },
		{ id: "vps2f9", content: "Operating System Choices" },
		{ id: "vps2f10", content: "Data Backup Options" },
	],
	comparedFeatures: {
		storage: { id: "vps2cf1", value: "100 GB" },
		CPU: { id: "vps2cf2", value: "4 Cores" },
		RAM: { id: "vps2cf3", value: "8 GB" },
		bandwidth: { id: "vps2cf4", value: "10 TB" },
		dedicatedIP: { id: "vps2cf5", value: true },
		rootAccess: { id: "vps2cf6", value: true },
		support: { id: "vps2cf7", value: true },
		storageType: { id: "vps2cf8", value: "SSD" },
		operatingSystem: { id: "vps2cf9", value: true },
		backups: { id: "vps2cf10", value: true },
	},
};

const vpsPlan3: HostingPlan<VPSComparedFeatures> = {
	id: "vps3",
	name: "VPS Business",
	monthlyPricing: 80,
	yearlyPricing: 800,
	twoYearsPricing: 1440,
	features: [
		{ id: "vps3f1", content: "200 GB Storage" },
		{ id: "vps3f2", content: "8 CPU Cores" },
		{ id: "vps3f3", content: "16 GB RAM" },
		{ id: "vps3f4", content: "20 TB Bandwidth" },
		{ id: "vps3f5", content: "Dedicated IP Address" },
		{ id: "vps3f6", content: "Full Root Access" },
		{ id: "vps3f7", content: "24/7 Support" },
		{ id: "vps3f8", content: "SSD Storage" },
		{ id: "vps3f9", content: "Operating System Choices" },
		{ id: "vps3f10", content: "Data Backup Options" },
	],
	comparedFeatures: {
		storage: { id: "vps3cf1", value: "200 GB" },
		CPU: { id: "vps3cf2", value: "8 Cores" },
		RAM: { id: "vps3cf3", value: "16 GB" },
		bandwidth: { id: "vps3cf4", value: "20 TB" },
		dedicatedIP: { id: "vps3cf5", value: true },
		rootAccess: { id: "vps3cf6", value: true },
		support: { id: "vps3cf7", value: true },
		storageType: { id: "vps3cf8", value: "SSD" },
		operatingSystem: { id: "vps3cf9", value: true },
		backups: { id: "vps3cf10", value: true },
	},
};

// exports
export const wordpressPlans: HostingPlan<WordPressComparedFeatures>[] = [
	wordpressPlan1,
	wordpressPlan2,
	wordpressPlan3,
];

export const cloudPlans: HostingPlan<CloudComparedFeatures>[] = [cloudPlan1, cloudPlan2, cloudPlan3];

export const vpsPlans: HostingPlan<VPSComparedFeatures>[] = [vpsPlan1, vpsPlan2, vpsPlan3];

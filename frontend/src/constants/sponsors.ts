import GoogleIcon from "../assets/sponsors/google.svg";
import GithubIcon from "../assets/sponsors/github.svg";
import AppwriteIcon from "../assets/sponsors/appwrite.svg";
import DjangoIcon from "../assets/sponsors/django.svg";
import DigitalOceanIcon from "../assets/sponsors/digital_ocean.svg";
import WebpackIcon from "../assets/sponsors/webpack.svg";
import JetbrainsIcon from "../assets/sponsors/jetbrains.svg";



export default [
    {
		id: 1,
		icon: GoogleIcon,
		name: "Google",
	},
	{
		id: 2,
		icon: GithubIcon,
		name: "Github",
	},
	{
		id: 3,
		icon: AppwriteIcon,
		name: "Appwrite",
	},
	{
		id: 4,
		icon: DjangoIcon,
		name: "Django",
	},
	{
		id: 5,
		icon: DigitalOceanIcon,
		name: "Digital Ocean",
	},
	{
		id: 6,
		icon: WebpackIcon,
		name: "Webpack",
	},
	{
		id: 7,
		icon: JetbrainsIcon,
		name: "Jetbrains",
	}
] satisfies Sponsor[];

export interface Sponsor {
    id: number;
    icon: string;
    name: string;
}
import { Language, Person, Storage } from "@mui/icons-material";

export default [    
    {
        id: 1,
        icon: <Person sx={{ width: 60, height: 60 }} />,
        title: "Our Users",
        value: "13M"
    },
    {
        id: 2,
        icon: <Language sx={{ width: 60, height: 60 }} />,
        title: "Our Hosted Sites",
        value: "340K"
    },
    {
        id: 3,
        icon: <Storage sx={{ width: 60, height: 60 }} />,
        title: "Our Data Centers",
        value: "160"
    }
] satisfies NumberData[];


export interface NumberData {
    id: number;
    icon: JSX.Element;    
    title: string;
    value: string;
}
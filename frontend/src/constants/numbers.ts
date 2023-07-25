import { Language, Person, Storage } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export default [    
    {
        id: 1,
        Icon: Person,
        title: "Our Users",
        value: "13M"
    },
    {
        id: 2,
        Icon: Language,
        title: "Our Hosted Sites",
        value: "340K"
    },
    {
        id: 3,
        Icon: Storage,
        title: "Our Data Centers",
        value: "160"
    }
] satisfies NumberData[];


export interface NumberData {
    id: number;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;    
    title: string;
    value: string;
}
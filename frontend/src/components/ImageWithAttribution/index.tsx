import { Box, Link, Typography } from "@mui/material"
import { ImgHTMLAttributes } from "react"



interface ImageWithAttributionProps extends ImgHTMLAttributes<HTMLImageElement> {
    attributionUrl: string;   
    storyset?: boolean;
    storysetText?: string;
    centerCaption?: boolean;
    onlyBig?: boolean;
}

const ImageWithAttribution = ({ attributionUrl, storyset = false, storysetText, centerCaption = false, onlyBig = false, ...imageProps }: ImageWithAttributionProps) => {
  return (
    <Box display={onlyBig ? { xs: "none", md: "flex" } : "flex"} flexDirection="column" alignItems={centerCaption ? "center" : "end"} gap={1}>
        <img {...imageProps} />
        <Typography variant="caption">
            {
                storyset
                ?
                <>
                    <Link target="_blank" href={attributionUrl}>{storysetText}</Link>
                </>
                :
                <>
                    Image by <Link target="_blank" href={attributionUrl}>Freepik</Link>
                </>
            }
        </Typography>
    </Box>
  )
}

export default ImageWithAttribution
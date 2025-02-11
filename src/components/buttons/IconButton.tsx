import {
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  GlobeIcon,
  ExclamationTriangleIcon,
  VideoIcon,
  GridIcon,
  RowsIcon,
} from "@radix-ui/react-icons";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

type IconButtonProps = {
  icon: string;
  link?: string;
  handleClick?: () => void;
};

function IconButton({ icon, link, handleClick }: IconButtonProps) {
  switch (icon) {
    case "github":
      return (
        <Button
          type={'button'}
          variant="outline"
          size="icon"
          onClick={() => window.open(link, "_blank")}
        >
          <GitHubLogoIcon className="h-4 w-4" />
        </Button>
      );
    case "email":
      return (
        <Button
            type={'button'}
          variant="outline"
          size="icon"
          onClick={() => window.open(link, "_self")}
        >
          <EnvelopeClosedIcon className="h-4 w-4" />
        </Button>
      );
    case "linkedin":
      return (
        <Button
            type={'button'}
          variant="outline"
          size="icon"
          onClick={() => window.open(link, "_blank")}
        >
          <LinkedInLogoIcon className="h-4 w-4" />
        </Button>
      );
    case "globe":
      return (
        <Button
            type={'button'}
          variant="outline"
          size="icon"
          onClick={() => window.open(link, "_blank")}
        >
          <GlobeIcon className="h-4 w-4" />
        </Button>
      );
    case "youtube":
      return (
        <Button
            type={'button'}
          variant="outline"
          size="icon"
          onClick={() => window.open(link, "_blank")}
        >
          <VideoIcon className="h-4 w-4" />
        </Button>
      );
    
    case "filter":
      return (
        <Button type={'button'} variant="outline" size="icon" onClick={handleClick}>
          <Filter strokeWidth={'1.75px'} size={15} />
        </Button>
      );

    case "grid":
        return (
            <Button type={'button'} variant="outline" size="icon" onClick={handleClick}>
                <GridIcon strokeWidth={'1.75px'} />
            </Button>
        );
    case "rows":
        return (
            <Button type={'button'} variant="outline" size="icon" onClick={handleClick}>
                <RowsIcon strokeWidth={'1.75px'} />
            </Button>
        );

    default:
      return (
        <Button type={'button'} variant="outline" size="icon">
          <ExclamationTriangleIcon className="h-4 w-4" />
        </Button>
      );
  }
}

export default IconButton;

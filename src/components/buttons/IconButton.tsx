import {
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  GlobeIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

type IconButtonProps = {
  icon: string;
  link: string;
};

function IconButton({ icon, link }: IconButtonProps) {
  switch (icon) {
    case "github":
      return (
        <Button
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
          variant="outline"
          size="icon"
          onClick={() => window.open(link, "_blank")}
        >
          <GlobeIcon className="h-4 w-4" />
        </Button>
      );

    default:
      return (
        <Button variant="outline" size="icon">
          <ExclamationTriangleIcon className="h-4 w-4" />
        </Button>
      );
  }
}

export default IconButton;

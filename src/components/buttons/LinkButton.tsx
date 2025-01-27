import { Button } from "@/components/ui/button";

type LinkButtonProps = {
  link: string;
  target?: string;
  text: string;
  disabled?: boolean;
};

function LinkButton({ link, text, target, disabled }: LinkButtonProps) {
  if (disabled) {
    return (
      <Button variant="outline" disabled>
        <a href={`${link}`} target={target}>{text}</a>
      </Button>
    );
  } else {
    return (
      <Button variant="outline">
        <a
          href={`${link}`}
          target={target}
          rel="noreferrer noopener" 
        >
          {text}
        </a>
      </Button>
    );
  }
}

export default LinkButton;

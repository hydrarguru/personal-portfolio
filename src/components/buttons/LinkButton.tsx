import { Button } from "@/components/ui/button";

type LinkButtonProps = {
  link: string;
  target?: string;
  text: string;
};

function LinkButton({ link, text, target }: LinkButtonProps) {
  return (
    <Button asChild variant="outline">
      <a href={`${link}`} target={target}>{text}</a>
    </Button>
  );
}

export default LinkButton;

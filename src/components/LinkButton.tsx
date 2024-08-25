import { Button } from "@/components/ui/button"

type LinkButtonProps = {
    link: string;
    text: string;
}

function LinkButton({ link, text }: LinkButtonProps) {
  return (
    <Button asChild variant="outline">
      <a href={`${link}`}>{text}</a>
    </Button>
  )
}

export default LinkButton;

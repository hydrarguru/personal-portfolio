import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type LinkToolTipProps = {
  link: string;
  children: JSX.Element;
};

function LinkToolTip({ link, children }: LinkToolTipProps) {
  return (
    <TooltipProvider delayDuration={400}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{link}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default LinkToolTip;

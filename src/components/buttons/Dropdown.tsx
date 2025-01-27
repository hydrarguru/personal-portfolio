import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import LinkToolTip  from '@/components/buttons/LinkToolTip';
import type { ResumeItem } from '@/types/types';


interface DropdownProps {
  label: string;
  resumeItems: ResumeItem[];
}

function Dropdown({ label, resumeItems }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>{label}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>View resumés</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {resumeItems.map((item) => (
          <DropdownMenuItem key={item.text} disabled={item.disabled}>
            <LinkToolTip link={item.tooltip}>
                <a href={item.link} target='_blank' rel='noreferrer noopener'>
                  {item.text}
                </a>
            </LinkToolTip>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;

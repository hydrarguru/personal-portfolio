import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { EmailItem } from '@/types/types';
import IconButton from './IconButton';

interface EmailDropdownProps {
  emailItems: EmailItem[];
}

export function EmailDropdown({ emailItems }: EmailDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IconButton icon='email' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Contact me via email:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {emailItems.map((item) => (
            <DropdownMenuItem key={item.email}>
              <a href={`mailto:${item.email}`} target='_blank'>{item.email}</a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

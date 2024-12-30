import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Calendar } from './calendar';
import { Button } from './Button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

interface DatePickerProps {
  mode?: 'single' | 'range';
  onSelect?: (date: Date | { from: Date; to: Date } | undefined) => void;
}

export function DatePicker({ mode = 'single', onSelect }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [range, setRange] = React.useState<{ from: Date; to: Date } | undefined>(undefined);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' className='w-[280px] justify-start text-left font-normal'>
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? format(date, 'PPP') : range ? `${format(range.from, 'PPP')} - ${format(range.to, 'PPP')}` : 'Pick a date'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode={mode}
          selected={mode === 'single' ? date : range}
          onSelect={(selected) => {
            if (mode === 'single') {
              setDate(selected as Date);
              onSelect?.(selected as Date);
            } else {
              setRange(selected as { from: Date; to: Date });
              onSelect?.(selected as { from: Date; to: Date });
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

// src/components/ui/DatePicker.tsx

'use client';

import * as React from 'react';
import { format, isDate, addYears } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import type { DateRange } from 'react-day-picker';
import { cn } from '../../lib/utils';
import { Button } from './Button';
import { Calendar } from './Calendar';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

function isDateRange(value: unknown): value is DateRange {
  return !!value && typeof value === 'object' && 'from' in value && 'to' in value;
}

export interface DatePickerProps {
  value?: Date | DateRange;
  onChange: (date: Date | DateRange | undefined) => void;
  className?: string;
  mode?: 'single' | 'range';
  required?: boolean;
}

export function DatePicker({ value, onChange, className, mode = 'single', required = false }: DatePickerProps) {
  const selectedDate = mode === 'single' && value && isDate(value) ? value : undefined;
  const selectedRange = mode === 'range' && value && isDateRange(value) ? value : undefined;

  const displayValue = React.useMemo(() => {
    if (!value) return 'Pick a date';
    if (isDate(value)) return format(value, 'PPP');
    if (isDateRange(value)) {
      return value.from && value.to ? `${format(value.from, 'PPP')} - ${format(value.to, 'PPP')}` : 'Invalid date range';
    }
    return 'Invalid date';
  }, [value]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' className={cn('w-full justify-start text-left font-normal', !value && 'text-gray-500', className)}>
          <CalendarIcon className='mr-2 h-4 w-4' />
          {displayValue}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[280px] p-0' align='start'>
        {mode === 'range' ? (
          <Calendar
            mode='range'
            selected={selectedRange}
            onSelect={onChange}
            initialFocus
            required={required}
            fromDate={new Date()}
            toDate={addYears(new Date(), 1)}
            numberOfMonths={2}
          />
        ) : (
          <Calendar mode='single' selected={selectedDate} onSelect={onChange} initialFocus />
        )}
      </PopoverContent>
    </Popover>
  );
}

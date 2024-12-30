import { DatePicker } from '../../../../../components/ui/DatePicker';
import { Button } from '../../../../../components/ui/Button';
import { CalendarDays, Download, ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../../../../../components/ui/Popover';
import { addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, subDays } from 'date-fns';

interface FilterBarProps {
  onDateRangeChange: (startDate: Date, endDate: Date) => void;
  onExport: () => void;
}

const predefinedPeriods = [
  { label: 'Today', getRange: () => ({ from: new Date(), to: new Date() }) },
  { label: 'Yesterday', getRange: () => ({ from: subDays(new Date(), 1), to: subDays(new Date(), 1) }) },
  { label: 'Last 7 Days', getRange: () => ({ from: subDays(new Date(), 7), to: new Date() }) },
  { label: 'Last 30 Days', getRange: () => ({ from: subDays(new Date(), 30), to: new Date() }) },
  { label: 'This Month', getRange: () => ({ from: startOfMonth(new Date()), to: endOfMonth(new Date()) }) },
  { label: 'Last Month', getRange: () => ({ from: startOfMonth(subDays(new Date(), 30)), to: endOfMonth(subDays(new Date(), 30)) }) },
  { label: 'This Week', getRange: () => ({ from: startOfWeek(new Date()), to: endOfWeek(new Date()) }) },
];

export function FilterBar({ onDateRangeChange, onExport }: FilterBarProps) {
  const handlePeriodSelect = (period: { from: Date; to: Date }) => {
    onDateRangeChange(period.from, period.to);
  };

  return (
    <div className='flex items-center gap-4 p-4 bg-white rounded-lg shadow'>
      <div className='flex items-center gap-2'>
        <CalendarDays className='w-5 h-5 text-gray-500' />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='outline' className='gap-2'>
              Quick Periods
              <ChevronDown className='w-4 h-4' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-48 p-2'>
            <div className='flex flex-col'>
              {predefinedPeriods.map((period) => (
                <Button key={period.label} variant='ghost' className='justify-start' onClick={() => handlePeriodSelect(period.getRange())}>
                  {period.label}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <DatePicker
          mode='range'
          onSelect={(dateOrRange) => {
            if (dateOrRange && typeof dateOrRange === 'object' && 'from' in dateOrRange && 'to' in dateOrRange) {
              onDateRangeChange(dateOrRange.from, dateOrRange.to);
            }
          }}
        />
      </div>

      <Button
        variant='outline'
        onClick={() => {
          const format = window.prompt('Enter export format (pdf or excel):');
          if (format === 'pdf' || format === 'excel') {
            onExport();
          } else {
            alert("Invalid format. Please enter 'pdf' or 'excel'.");
          }
        }}
      >
        <Download className='mr-2 h-4 w-4' />
        Export Data
      </Button>
    </div>
  );
}

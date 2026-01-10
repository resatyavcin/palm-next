"use client";

import * as React from "react";
import { format, isSameDay } from "date-fns";
import { tr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

/* ------------------ TYPES ------------------ */
export type DateHourPickerProps = {
  onChange?: (value: { date: Date; hour: number }) => void;
};

type HourButtonProps = {
  hour: number;
  isSelected: boolean;
  isBooked: boolean;
  onClick: () => void;
};

/* ------------------ CONSTANTS ------------------ */
const WORKING_HOURS_START = 8;
const WORKING_HOURS_END = 18;
const WORKING_HOURS_COUNT = WORKING_HOURS_END - WORKING_HOURS_START + 1;

const HOURS = Array.from(
  { length: WORKING_HOURS_COUNT },
  (_, i) => WORKING_HOURS_START + i
);

const FULLY_BOOKED_DAYS = [
  new Date(2026, 0, 10),
  new Date(2026, 0, 15),
] as const;

const BOOKED_HOURS_BY_DATE: Record<string, number[]> = {
  "2026-01-12": [9, 10, 14],
  "2026-01-13": [8, 11, 16],
};

/* ------------------ UTILITIES ------------------ */
const formatHour = (hour: number): string => {
  return `${String(hour).padStart(2, "0")}:00`;
};

const getDateKey = (date: Date | undefined): string | null => {
  return date ? format(date, "yyyy-MM-dd") : null;
};

const isDayDisabled = (day: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dayToCheck = new Date(day);
  dayToCheck.setHours(0, 0, 0, 0);

  return (
    dayToCheck < today ||
    FULLY_BOOKED_DAYS.some((bookedDay) => isSameDay(bookedDay, day))
  );
};

/* ------------------ COMPONENTS ------------------ */
function HourButton({ hour, isSelected, isBooked, onClick }: HourButtonProps) {
  return (
    <Button
      type="button"
      variant={isSelected ? "default" : "outline"}
      disabled={isBooked}
      onClick={onClick}
      className={`h-9 ${
        isBooked ? "opacity-50 line-through cursor-not-allowed" : ""
      }`}
    >
      {formatHour(hour)}
    </Button>
  );
}

type DatePickerProps = {
  date: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

function DatePicker({
  date,
  onDateSelect,
  isOpen,
  onOpenChange,
}: DatePickerProps) {
  const handleDateSelect = (selectedDate: Date | undefined) => {
    onDateSelect(selectedDate);
    onOpenChange(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-48 justify-between font-normal"
          onClick={() => onOpenChange(true)}
        >
          <span className="truncate">
            {date
              ? format(date, "dd MMMM yyyy", { locale: tr })
              : "Tarih seçiniz"}
          </span>
          <CalendarIcon className="h-4 w-4 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          disabled={isDayDisabled}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

type HourGridProps = {
  date: Date;
  selectedHour: number | null;
  bookedHours: number[];
  onHourSelect: (hour: number) => void;
};

function HourGrid({
  date,
  selectedHour,
  bookedHours,
  onHourSelect,
}: HourGridProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {HOURS.map((hour) => (
        <HourButton
          key={hour}
          hour={hour}
          isSelected={selectedHour === hour}
          isBooked={bookedHours.includes(hour)}
          onClick={() => onHourSelect(hour)}
        />
      ))}
    </div>
  );
}

/* ------------------ MAIN COMPONENT ------------------ */
/**
 * Date and hour picker component for appointment booking.
 * Features:
 * - Fixed width trigger button and popover
 * - Layout doesn't expand when date is selected
 * - Displays available hours based on selected date
 */
const DateHourPicker = ({ onChange }: DateHourPickerProps) => {
  const [date, setDate] = React.useState<Date | undefined>();
  const [hour, setHour] = React.useState<number | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  const dateKey = getDateKey(date);
  const bookedHours = dateKey ? BOOKED_HOURS_BY_DATE[dateKey] ?? [] : [];

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setHour(null);
  };

  const handleHourSelect = (selectedHour: number) => {
    if (!date) return;

    setHour(selectedHour);
    onChange?.({ date, hour: selectedHour });
  };

  return (
    <div className="space-y-4 w-full max-w-sm">
      <DatePicker
        date={date}
        onDateSelect={handleDateSelect}
        isOpen={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
      />

      {date && (
        <HourGrid
          date={date}
          selectedHour={hour}
          bookedHours={bookedHours}
          onHourSelect={handleHourSelect}
        />
      )}
    </div>
  );
};

export default DateHourPicker;

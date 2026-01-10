"use client";

import { useState } from "react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { ScissorsIcon, ArrowLeftRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DateHourPicker from "./DateHourPickerComponent";
import AppointmentForm from "./AppointmentForm";
import SuccessCardComponent from "@/components/feature/auth/SuccessCard";

/* ------------------ TYPES ------------------ */
export type Employee = {
  id: string;
  name: string;
  img: string;
};

export type Appointment = {
  date?: Date;
  hour?: number;
};

export type CreatedAppointment = {
  employee: Employee;
  appointment: {
    date: Date;
    hour: number;
  };
  customer: {
    fullName: string;
    phoneNumber: string;
  };
};

/* ------------------ CONSTANTS ------------------ */
const TENANT_NAME = "Altın Güzellik Salonu";
const TENANT_DESCRIPTION = "Randevu oluşturmak için adımları takip ediniz";

const EMPLOYEES: Employee[] = [
  { id: "ahmet", name: "Ahmet K. Bey", img: "https://github.com/shadcn.png" },
  {
    id: "mustafa",
    name: "Mustafa Ş. Bey",
    img: "https://github.com/shadcn.png",
  },
  { id: "ayca", name: "Ayça B. Hanım", img: "https://github.com/shadcn.png" },
];

/* ------------------ COMPONENTS ------------------ */
type HeaderProps = {
  name: string;
  description: string;
};

function Header({ name, description }: HeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-orange-100 p-2">
        <ScissorsIcon className="size-7 text-orange-600" />
      </div>
      <div>
        <h2 className="text-2xl font-extrabold">{name}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

type SelectedEmployeeCardProps = {
  employee: Employee;
  appointment: Appointment;
  onReset: () => void;
};

function SelectedEmployeeCard({
  employee,
  appointment,
  onReset,
}: SelectedEmployeeCardProps) {
  const formatAppointmentTime = () => {
    if (appointment.date && appointment.hour !== undefined) {
      return `${format(appointment.date, "dd MMMM", { locale: tr })} · ${String(
        appointment.hour
      ).padStart(2, "0")}:00`;
    }
    return "Tarih ve saat seçilmedi";
  };

  return (
    <Card className="rounded-2xl border-2 border-orange-600">
      <CardContent className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            <AvatarImage src={employee.img} />
            <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <p className="font-medium">{employee.name}</p>
            <p className="text-xs text-muted-foreground">
              {formatAppointmentTime()}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="flex items-center gap-2"
        >
          <ArrowLeftRight className="size-4" />
          Değiştir
        </Button>
      </CardContent>
    </Card>
  );
}

type EmployeeSelectionProps = {
  employees: Employee[];
  onSelect: (employee: Employee) => void;
};

function EmployeeSelection({ employees, onSelect }: EmployeeSelectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Çalışan Seçimi</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {employees.map((employee) => (
          <Card
            key={employee.id}
            onClick={() => onSelect(employee)}
            className="cursor-pointer rounded-none transition hover:shadow-md"
          >
            <CardContent className="flex flex-col items-center gap-3 p-5">
              <Avatar className="size-24">
                <AvatarImage src={employee.img} />
                <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <p className="text-sm font-medium text-center">{employee.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

type DateHourPickerSectionProps = {
  hasSelectedEmployee: boolean;
  onAppointmentChange: (appointment: Appointment) => void;
};

function DateHourPickerSection({
  hasSelectedEmployee,
  onAppointmentChange,
}: DateHourPickerSectionProps) {
  return (
    <div className="max-w-sm">
      <h3 className="mb-3 text-lg font-semibold">Tarih ve Saat</h3>

      {!hasSelectedEmployee ? (
        <div className="rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
          Tarih ve saat seçmek için önce çalışan seçiniz
        </div>
      ) : (
        <DateHourPicker onChange={onAppointmentChange} />
      )}
    </div>
  );
}

type AppointmentFormSectionProps = {
  hasSelectedEmployee: boolean;
  hasAppointment: boolean;
  onSubmit: (data: { fullName: string; phoneNumber: string }) => void;
  isLoading?: boolean;
};

function AppointmentFormSection({
  hasSelectedEmployee,
  hasAppointment,
  onSubmit,
  isLoading,
}: AppointmentFormSectionProps) {
  if (!hasSelectedEmployee || !hasAppointment) {
    return null;
  }

  return (
    <div className="max-w-sm">
      <h3 className="mb-3 text-lg font-semibold">İletişim Bilgileri</h3>
      <AppointmentForm onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
}

/* ------------------ PAGE ------------------ */
export default function TenantAppointmentPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [appointment, setAppointment] = useState<Appointment>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdAppointment, setCreatedAppointment] =
    useState<CreatedAppointment | null>(null);

  const handleEmployeeSelect = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  const handleResetSelection = () => {
    setSelectedEmployee(null);
    setAppointment({});
    setCreatedAppointment(null);
  };

  const handleAppointmentChange = (newAppointment: Appointment) => {
    setAppointment(newAppointment);
  };

  const handleFormSubmit = async (data: {
    fullName: string;
    phoneNumber: string;
  }) => {
    if (
      !selectedEmployee ||
      !appointment.date ||
      appointment.hour === undefined
    ) {
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: API call to create appointment
      console.log("Appointment data:", {
        employee: selectedEmployee,
        appointment,
        customer: data,
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Save created appointment
      setCreatedAppointment({
        employee: selectedEmployee,
        appointment: {
          date: appointment.date,
          hour: appointment.hour,
        },
        customer: data,
      });
    } catch (error) {
      console.error("Appointment creation failed:", error);
      // TODO: Handle error (show toast, etc.)
      alert("Randevu oluşturulurken bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasCompleteAppointment =
    selectedEmployee &&
    appointment.date !== undefined &&
    appointment.hour !== undefined;

  // Show success card if appointment is created
  if (createdAppointment) {
    const appointmentDate = format(
      createdAppointment.appointment.date,
      "dd MMMM yyyy",
      { locale: tr }
    );
    const appointmentTime = `${String(
      createdAppointment.appointment.hour
    ).padStart(2, "0")}:00`;

    return (
      <div className="flex flex-col gap-10">
        <Header name={TENANT_NAME} description={TENANT_DESCRIPTION} />
        <div className="flex justify-center">
          <SuccessCardComponent
            title="Randevunuz Oluşturuldu!"
            description={`${createdAppointment.customer.fullName}, randevunuz başarıyla oluşturuldu.`}
            extraInfo="Gelmeyi unutmayın! Randevu saatinden 15 dakika önce gelmenizi öneririz."
            actions={
              <div className="w-full space-y-3 text-left">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Avatar className="size-10">
                    <AvatarImage src={createdAppointment.employee.img} />
                    <AvatarFallback>
                      {createdAppointment.employee.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {createdAppointment.employee.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {appointmentDate} · {appointmentTime}
                    </p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 space-y-1">
                  <p className="text-xs text-muted-foreground">İletişim</p>
                  <p className="text-sm font-medium">
                    {createdAppointment.customer.phoneNumber}
                  </p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <Header name={TENANT_NAME} description={TENANT_DESCRIPTION} />

      {selectedEmployee && (
        <SelectedEmployeeCard
          employee={selectedEmployee}
          appointment={appointment}
          onReset={handleResetSelection}
        />
      )}

      {!selectedEmployee && (
        <EmployeeSelection
          employees={EMPLOYEES}
          onSelect={handleEmployeeSelect}
        />
      )}

      <DateHourPickerSection
        hasSelectedEmployee={!!selectedEmployee}
        onAppointmentChange={handleAppointmentChange}
      />

      <AppointmentFormSection
        hasSelectedEmployee={!!selectedEmployee}
        hasAppointment={!!hasCompleteAppointment}
        onSubmit={handleFormSubmit}
        isLoading={isSubmitting}
      />
    </div>
  );
}

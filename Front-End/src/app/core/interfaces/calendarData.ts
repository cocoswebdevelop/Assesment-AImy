import { appointments } from "./appointments";
import { staff } from "./staff";

export interface calendarData  {
    staff : Array<staff>,
    appointments : Array<appointments>
}
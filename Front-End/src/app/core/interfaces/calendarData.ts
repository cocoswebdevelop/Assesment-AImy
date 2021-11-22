import { appointments } from "./appointments";
import { staff } from "./staff";

export interface calendarData  {
    staff : staff,
    appointments : Array<appointments>
}
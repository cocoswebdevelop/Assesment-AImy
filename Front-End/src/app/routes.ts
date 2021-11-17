import { Routes } from "@angular/router";

export const routes : Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'calendar'
    },
    {
        path: 'calendar',
            loadChildren: async () => await (await import ('./modules/calendar/calendar.module')).CalendarModule
    }
]


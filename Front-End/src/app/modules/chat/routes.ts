import { Routes } from "@angular/router";
import { ChatBarComponent } from "../../ui-organisms/chat-bar/chat-bar.component";
import { ChatComponent } from "./chat/chat.component";

export const routes: Routes = [
    {
        path: 'chats',
        component: ChatComponent
    }
] 

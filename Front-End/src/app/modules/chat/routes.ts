import { Routes } from "@angular/router";
import { ChatBarComponent } from "./chat-bar/chat-bar.component";
import { ChatComponent } from "./chat/chat.component";

export const routes: Routes = [
    {
        path: 'chats',
        component: ChatComponent
    },
    {
        path: 'chat-bar',
        component : ChatBarComponent
    }
] 

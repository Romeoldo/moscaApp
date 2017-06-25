import { Component } from "@angular/core";

@Component({
    selector: "logo",
    template: `
        <div class="logo">
            <div class="logo-sec logo-sec-1 round"></div>
            <div class="logo-sec logo-sec-2 round"></div>
            <div class="logo-sec logo-sec-3 round"></div>
            <div class="logo-sec logo-sec-4 round"></div>
            <div class="logo-sec logo-sec-5"></div>
        </div>
    `
})
export class LogoComponent {
}

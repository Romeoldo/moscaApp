import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class NotificationService {
    constructor(private alertController: AlertController) {
    }

    public alert(info: string, title: string = "Info"): void {
        this.alertController.create({
            title: title,
            subTitle: info,
            buttons: ["OK"]
        }).present();
    }

    public prompt(message: string, title: string): Observable<any> {
        const subject = new Subject();

        this.alertController.create({
            title: title,
            message: message,
            inputs: [
                {
                    name: "input"
                }
            ],
            buttons: [
                {
                    text: "Cancelar",
                    handler: () => subject.next({ cancelled: true })
                },
                {
                    text: "Consultar",
                    handler: (data: { input: string }) => subject.next({ text: data.input })
                }
            ]
        }).present();

        return subject;
    }
}

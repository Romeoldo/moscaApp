import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LogoComponent } from "../components/logo/logo.component";
import { NotificationService } from "../services/notification.service";
import { DetailsPage } from "../pages/details/details";
import { AppConstants } from "./app.contants";
import { ArticleService } from "../services/article.service";
import { HttpModule } from "@angular/http";
import "rxjs/add/operator/map";
import { BranchesPage } from "../pages/branches/branches";
import { IonicStorageModule } from "@ionic/storage";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        DetailsPage,
        LogoComponent,
        BranchesPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        DetailsPage,
        LogoComponent,
        BranchesPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BarcodeScanner,
        NotificationService,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        AppConstants,
        ArticleService
    ]
})
export class AppModule {
}

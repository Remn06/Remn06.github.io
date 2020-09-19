import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './ui/app-root/app.component';
import { GameObjectComponent } from './ui/html-renderer/game-object/game-object.component';
import { HtmlRendererComponent } from './ui/html-renderer/html-renderer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
	AppComponent,
	GameObjectComponent,
	HtmlRendererComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public offText = "Off Text";
    public size = "normal";
    public animate = false;
    public animated = false;
    public disabled = false;
    public readonly = false;
    public indeterminate = false;
    public inverse:boolean = true;
    public color:string = "default";
    public onText:string = "";
    public offColor:string = ""
    public labelText: string = "";
    public state:boolean = true;
    public value:boolean = true;
    public inverseValue:boolean = false;
    public handleWidth:string = "auto";
    public labelWidth:string = "auto";
    public offColorValue:boolean = false;
    public offTextValue:boolean = false;

    getAlert(value: any):void {
        alert(value);
    }

    onChange(event) {
        console.log(event);
    }
}

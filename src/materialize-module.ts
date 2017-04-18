import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeDirective } from "./materialize-directive";

@NgModule({
    declarations: [
        MaterializeDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
    	MaterializeDirective
    ]
})
export class MaterializeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MaterializeModule
        };
    }
}
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  Carousel,
  Chips,
  Collapsible,
  Dropdown,
  Dialogs,
  Tabs,
  //TabsRouting,
  Forms,
  SideNav,
  DatePicker,
  ModelBindings,
  Parallax
} from './components/index';

import { ButtonsComponent } from "app/buttons/buttons.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'Buttons',
		pathMatch: 'full'
	},
	{
		path: 'Buttons',
		component: ButtonsComponent
	},
	{
		path: 'Carousel',
		component: Carousel
	},
	{
		path: 'Chips',
		component: Chips
	},
	{
		path: 'Collapsible',
		component: Collapsible
	},
	{
		path: 'Dialogs',
		component: Dialogs
	},
	{
		path: 'Dropdown',
		component: Dropdown
	},
	{
		path: 'Forms',
		component: Forms
	},
	{
		path: 'Tabs',
		component: Tabs
	},
	// {
	// 	path: 'TabsRouting',
	// 	component: TabsRouting
	// },
	{
		path: 'DatePicker',
		component: DatePicker
	},
	{
		path: 'Parallax',
		component: Parallax
	},
	{
		path: 'ModelBindings',
		component: ModelBindings
	}
];


export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 

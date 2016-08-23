import { Routes, RouterModule } from '@angular/router';
import {
  Buttons,
  Collapsible,
  Dropdown,
  Dialogs,
  Tabs,
  //TabsRouting,
  Forms,
  SideNav,
  DatePicker,
  ModelBindings
} from './components/index';


const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'Buttons',
		pathMatch: 'full'
	},
	{
		path: 'Buttons',
		component: Buttons
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
		path: 'ModelBindings',
		component: ModelBindings
	}
];

export const routing = RouterModule.forRoot(appRoutes);
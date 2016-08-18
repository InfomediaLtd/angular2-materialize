import { Routes, RouterModule } from '@angular/router';
import {
  Buttons,
  Collapsible,
  Dropdown,
  Dialogs,
  Tabs,
  TabsRouting,
  Forms,
  SideNav,
  DatePicker,
  ModelBindings
} from './components/index';


const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'buttons',
		pathMatch: 'full'
	},
	{
		path: 'buttons',
		component: Buttons
	},
	{
		path: 'collapsible',
		component: Collapsible
	},
	{
		path: 'dialogs',
		component: Dialogs
	},
	{
		path: 'dropdowns',
		component: Dropdown
	},
	{
		path: 'forms',
		component: Forms
	},
	{
		path: 'tabs',
		component: Tabs
	},
	{
		path: 'tabs-routing/...',
		component: TabsRouting
	},
	{
		path: 'datepicker',
		component: DatePicker
	},
	{
		path: 'modelbindings',
		component: ModelBindings
	}
];

export const routing = RouterModule.forRoot(appRoutes);
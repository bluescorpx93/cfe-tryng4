import { RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core';

import { VideoListComponent} from './video-list/video-list.component';
import { VideoDetailComponent} from './video-detail/video-detail.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
{
	path: '',
	component: HomeComponent
},
{
	path: "videos",
	component: VideoListComponent
},
{
	path: "videos/:slug",
	component: VideoDetailComponent
}
]

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ], 
	exports: [ RouterModule	]
})

export class AppRoutingModule{}
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FoodClientModule } from './client/client.module';
import { FoodCategoryModule } from './category/category.module';
import { FoodClientCategoryModule } from './client-category/client-category.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        FoodClientModule,
        FoodCategoryModule,
        FoodClientCategoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FoodEntityModule {}

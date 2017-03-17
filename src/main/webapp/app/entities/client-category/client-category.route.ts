import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Client_categoryComponent } from './client-category.component';
import { Client_categoryDetailComponent } from './client-category-detail.component';
import { Client_categoryPopupComponent } from './client-category-dialog.component';
import { Client_categoryDeletePopupComponent } from './client-category-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Client_categoryResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const client_categoryRoute: Routes = [
  {
    path: 'client-category',
    component: Client_categoryComponent,
    resolve: {
      'pagingParams': Client_categoryResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Client_categories'
    }
  }, {
    path: 'client-category/:id',
    component: Client_categoryDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Client_categories'
    }
  }
];

export const client_categoryPopupRoute: Routes = [
  {
    path: 'client-category-new',
    component: Client_categoryPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Client_categories'
    },
    outlet: 'popup'
  },
  {
    path: 'client-category/:id/edit',
    component: Client_categoryPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Client_categories'
    },
    outlet: 'popup'
  },
  {
    path: 'client-category/:id/delete',
    component: Client_categoryDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Client_categories'
    },
    outlet: 'popup'
  }
];

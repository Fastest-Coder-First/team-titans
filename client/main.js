"use strict";
(self["webpackChunkteam_titans_frontend"] = self["webpackChunkteam_titans_frontend"] || []).push([["main"],{

/***/ 789:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ApiService {
  constructor() {}
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)();
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 459);




function AppComponent_router_outlet_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
  }
}
function AppComponent_app_home_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-home");
  }
}
class AppComponent {
  constructor() {
    this.isLoggedIn = false;
    if (localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_app_home_1_Template, 1, 0, "app-home", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _charts_pie_pie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts/pie/pie.component */ 13);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-charts */ 6673);
/* harmony import */ var _charts_bar_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts/bar/bar.component */ 948);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 14);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ 844);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 459);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api.service */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot([{
    path: '',
    component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent
  }, {
    path: 'login',
    component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
  }, {
    path: 'register',
    component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }], {
    useHash: true
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _charts_pie_pie_component__WEBPACK_IMPORTED_MODULE_2__.PieComponent, _charts_bar_bar_component__WEBPACK_IMPORTED_MODULE_3__.BarComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.DashboardComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 948:
/*!*********************************************!*\
  !*** ./src/app/charts/bar/bar.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarComponent: () => (/* binding */ BarComponent)
/* harmony export */ });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ 6673);
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-datalabels */ 709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




class BarComponent {
  constructor() {
    this.barChartOptions = {
      responsive: true,
      elements: {
        line: {
          tension: 0.4
        }
      },
      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        x: {},
        y: {
          min: 10
        }
      },
      plugins: {
        legend: {
          display: true
        },
        datalabels: {
          anchor: 'end',
          align: 'end'
        }
      }
    };
    this.barChartType = 'line';
    this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__["default"]];
    this.barChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        data: [28000, 18000, 40000, 19000, 86000, 27000],
        label: 'Expense'
      }, {
        data: [50000, 50000, 50000, 60000, 60000, 60000],
        label: 'Income'
      }]
    };
  }
  // events
  chartClicked({
    event,
    active
  }) {
    console.log(event, active);
  }
  chartHovered({
    event,
    active
  }) {
    console.log(event, active);
  }
}
BarComponent.ɵfac = function BarComponent_Factory(t) {
  return new (t || BarComponent)();
};
BarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BarComponent,
  selectors: [["app-bar"]],
  viewQuery: function BarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  decls: 2,
  vars: 4,
  consts: [[1, "bar-chart"], ["baseChart", "", 1, "chart", 3, "data", "options", "plugins", "type", "chartHover", "chartClick"]],
  template: function BarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "canvas", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("chartHover", function BarComponent_Template_canvas_chartHover_1_listener($event) {
        return ctx.chartHovered($event);
      })("chartClick", function BarComponent_Template_canvas_chartClick_1_listener($event) {
        return ctx.chartClicked($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.barChartData)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("type", ctx.barChartType);
    }
  },
  dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective],
  styles: [".bar-chart[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 800px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hhcnRzL2Jhci9iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmJhci1jaGFydCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogODAwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 13:
/*!*********************************************!*\
  !*** ./src/app/charts/pie/pie.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PieComponent: () => (/* binding */ PieComponent)
/* harmony export */ });
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-datalabels */ 709);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ 6673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




class PieComponent {
  constructor() {
    // Pie
    this.pieChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'left'
        },
        datalabels: {
          formatter: (value, ctx) => {
            if (ctx.chart.data.labels) {
              return ctx.chart.data.labels[ctx.dataIndex];
            }
          }
        }
      }
    };
    this.pieChartData = {
      labels: ['Groceries', 'Rent', 'Bills', 'Entertainment', 'Travel', 'Other'],
      datasets: [{
        data: [3000, 15000, 10000, 2000, 3000, 2800]
      }]
    };
    this.pieChartType = 'pie';
    this.pieChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__["default"]];
  }
  // events
  chartClicked({
    event,
    active
  }) {
    console.log(event, active);
  }
  chartHovered({
    event,
    active
  }) {
    console.log(event, active);
  }
  toggleLegend() {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.display = !this.pieChartOptions.plugins.legend.display;
    }
    this.chart?.render();
  }
}
PieComponent.ɵfac = function PieComponent_Factory(t) {
  return new (t || PieComponent)();
};
PieComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PieComponent,
  selectors: [["app-pie"]],
  viewQuery: function PieComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  decls: 2,
  vars: 4,
  consts: [[1, "pie-chart"], ["baseChart", "", 1, "chart", 3, "data", "type", "options", "plugins"]],
  template: function PieComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.pieChartData)("type", ctx.pieChartType)("options", ctx.pieChartOptions)("plugins", ctx.pieChartPlugins);
    }
  },
  dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective],
  styles: [".pie-chart[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hhcnRzL3BpZS9waWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnBpZS1jaGFydCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 225:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DashboardComponent {}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)();
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 2,
  vars: 0,
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class HomeComponent {
  constructor(router) {
    this.router = router;
    if (!localStorage.getItem("token")) {
      this.router.navigate(["/login"]);
    }
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 1,
  vars: 0,
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 14:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 849);



class LoginComponent {
  constructor(router) {
    this.router = router;
    if (localStorage.getItem("token")) {
      this.router.navigate(["/"]);
    }
  }
  validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
      alert("Please fill in all the fields.");
      return false;
    }
    fetch(`http://localhost:3000/api/XUsers/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => res.json()).then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        localStorage.setItem("token", data.id);
        this.router.navigate(["/"]);
      }
    }).catch(err => {
      console.log(err);
      alert("Something went wrong. Please try again later.");
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 18,
  vars: 0,
  consts: [[1, "container"], [1, "login-container"], [1, "circle", "circle-one"], [1, "form-container"], ["src", "https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png", "alt", "illustration", 1, "illustration"], [1, "opacity"], ["type", "text", "placeholder", "Email", "id", "email"], ["type", "password", "placeholder", "Password", "id", "password"], ["type", "button", 1, "opacity", 3, "click"], [1, "register-forget", "opacity"], ["href", "#", "routerLink", "/register"], [1, "circle", "circle-two"], [1, "theme-btn-container"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body")(1, "section", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LOGIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6)(10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() {
        return ctx.validateForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "REGISTER");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: [":root {\n  --background: #1a1a2e;\n  --color: #ffffff;\n  --primary-color: #0f3460;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"poppins\";\n  background: var(--background);\n  color: var(--color);\n  letter-spacing: 1px;\n  transition: background 0.2s ease;\n  -webkit-transition: background 0.2s ease;\n  -moz-transition: background 0.2s ease;\n  -ms-transition: background 0.2s ease;\n  -o-transition: background 0.2s ease;\n}\n\na {\n  text-decoration: none;\n  color: var(--color);\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.login-container {\n  position: relative;\n  width: 22.2rem;\n}\n\n.form-container {\n  border: 1px solid hsla(0, 0%, 65%, 0.158);\n  box-shadow: 0 0 36px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  z-index: 99;\n  padding: 2rem;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  -ms-border-radius: 10px;\n  -o-border-radius: 10px;\n}\n\n.login-container form input {\n  display: block;\n  padding: 14.5px;\n  width: 100%;\n  margin: 2rem 0;\n  color: var(--color);\n  outline: none;\n  background-color: rgba(145, 145, 145, 0.1215686275);\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  font-size: 15px;\n  -webkit-backdrop-filter: blur(15px);\n          backdrop-filter: blur(15px);\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n}\n\n.login-container form input:focus {\n  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.2);\n  animation: wobble 0.3s ease-in;\n  -webkit-animation: wobble 0.3s ease-in;\n}\n\n.login-container form button {\n  background-color: var(--primary-color);\n  color: var(--color);\n  display: block;\n  padding: 13px;\n  border-radius: 5px;\n  outline: none;\n  font-size: 18px;\n  letter-spacing: 1.5px;\n  font-weight: bold;\n  width: 100%;\n  cursor: pointer;\n  margin-bottom: 2rem;\n  transition: all 0.1s ease-in-out;\n  border: none;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n  -webkit-transition: all 0.1s ease-in-out;\n  -moz-transition: all 0.1s ease-in-out;\n  -ms-transition: all 0.1s ease-in-out;\n  -o-transition: all 0.1s ease-in-out;\n}\n\n.login-container form button:hover {\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);\n  transform: scale(1.02);\n  -webkit-transform: scale(1.02);\n  -moz-transform: scale(1.02);\n  -ms-transform: scale(1.02);\n  -o-transform: scale(1.02);\n}\n\n.circle {\n  width: 8rem;\n  height: 8rem;\n  background: var(--primary-color);\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  position: absolute;\n}\n\n.illustration {\n  position: absolute;\n  top: -14%;\n  right: -2px;\n  width: 90%;\n}\n\n.circle-one {\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transform: translate(-45%, -45%);\n  -webkit-transform: translate(-45%, -45%);\n  -moz-transform: translate(-45%, -45%);\n  -ms-transform: translate(-45%, -45%);\n  -o-transform: translate(-45%, -45%);\n}\n\n.circle-two {\n  bottom: 0;\n  right: 0;\n  z-index: -1;\n  transform: translate(45%, 45%);\n  -webkit-transform: translate(45%, 45%);\n  -moz-transform: translate(45%, 45%);\n  -ms-transform: translate(45%, 45%);\n  -o-transform: translate(45%, 45%);\n}\n\n.register-forget {\n  margin: 1rem 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.opacity {\n  opacity: 0.6;\n}\n\n.theme-btn-container {\n  position: absolute;\n  left: 0;\n  bottom: 2rem;\n}\n\n.theme-btn {\n  cursor: pointer;\n  transition: all 0.3s ease-in;\n}\n\n.theme-btn:hover {\n  width: 40px !important;\n}\n\n@keyframes wobble {\n  0% {\n    transform: scale(1.025);\n    -webkit-transform: scale(1.025);\n    -moz-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    -o-transform: scale(1.025);\n  }\n  25% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n  }\n  75% {\n    transform: scale(1.025);\n    -webkit-transform: scale(1.025);\n    -moz-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    -o-transform: scale(1.025);\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUNBO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FBRUo7O0FBQ0E7RUFDSSw0Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FBRUo7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUFHSjs7QUFBQTtFQUNJLHNCQUFBO0FBR0o7O0FBQUE7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsK0JBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0lBQ0EsMEJBQUE7RUFHTjtFQURFO0lBQ0ksbUJBQUE7SUFDQSwyQkFBQTtJQUNBLHdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtFQUdOO0VBREU7SUFDSSx1QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNEJBQUE7SUFDQSwyQkFBQTtJQUNBLDBCQUFBO0VBR047RUFERTtJQUNJLG1CQUFBO0lBQ0EsMkJBQUE7SUFDQSx3QkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUFHTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tYmFja2dyb3VuZDogIzFhMWEyZTtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzBmMzQ2MDtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjIuMnJlbTtcbn1cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsYSgwLCAwJSwgNjUlLCAwLjE1OCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDM2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIGlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxNC41cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MTkxOTExZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sb2dpbi1jb250YWluZXIgZm9ybSBpbnB1dDpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBhbmltYXRpb246IHdvYmJsZSAwLjNzIGVhc2UtaW47XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHdvYmJsZSAwLjNzIGVhc2UtaW47XG59XG5cbi5sb2dpbi1jb250YWluZXIgZm9ybSBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9naW4tY29udGFpbmVyIGZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbn1cblxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgaGVpZ2h0OiA4cmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbGx1c3RyYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNCU7XG4gICAgcmlnaHQ6IC0ycHg7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmNpcmNsZS1vbmUge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00NSUsIC00NSUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTQ1JSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDUlLCAtNDUlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTQ1JSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTQ1JSk7XG59XG5cbi5jaXJjbGUtdHdvIHtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUlLCA0NSUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUlLCA0NSUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUlLCA0NSUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0NSUsIDQ1JSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUlLCA0NSUpO1xufVxuXG4ucmVnaXN0ZXItZm9yZ2V0IHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5vcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbi50aGVtZS1idG4tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDJyZW07XG59XG5cbi50aGVtZS1idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xufVxuXG4udGhlbWUtYnRuOmhvdmVyIHtcbiAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIHdvYmJsZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});

/***/ }),

/***/ 844:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 849);



class RegisterComponent {
  constructor(router) {
    this.router = router;
    if (localStorage.getItem("token")) {
      this.router.navigate(["/"]);
    }
  }
  validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all the fields.");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please check and try again.");
      return false;
    }
    fetch(`http://localhost:3000/api/XUsers/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }).then(res => res.json()).then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        localStorage.setItem("token", data.id);
        this.router.navigate(["/"]);
      }
    }).catch(err => {
      console.log(err);
      alert("Something went wrong. Please try again later.");
    });
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 16,
  vars: 0,
  consts: [[1, "container"], [1, "login-container"], [1, "circle", "circle-one"], [1, "form-container"], [1, "opacity"], ["type", "name", "placeholder", "Name", "id", "name"], ["type", "email", "placeholder", "Email", "id", "email"], ["type", "password", "id", "password", "placeholder", "Password"], ["type", "password", "id", "confirmPassword", "placeholder", "Confirm Password"], ["type", "button", 1, "opacity", 3, "click"], [1, "circle", "circle-two"], [1, "theme-btn-container"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body")(1, "section", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register Here");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5)(9, "input", 6)(10, "input", 7)(11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_12_listener() {
        return ctx.validateForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: [":root {\n  --background: #1a1a2e;\n  --color: #ffffff;\n  --primary-color: #0f3460;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"poppins\";\n  background: var(--background);\n  color: var(--color);\n  letter-spacing: 1px;\n  transition: background 0.2s ease;\n  -webkit-transition: background 0.2s ease;\n  -moz-transition: background 0.2s ease;\n  -ms-transition: background 0.2s ease;\n  -o-transition: background 0.2s ease;\n}\n\na {\n  text-decoration: none;\n  color: var(--color);\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.login-container {\n  position: relative;\n  width: 22.2rem;\n}\n\n.form-container {\n  border: 1px solid hsla(0, 0%, 65%, 0.158);\n  box-shadow: 0 0 36px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  z-index: 99;\n  padding: 2rem;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  -ms-border-radius: 10px;\n  -o-border-radius: 10px;\n}\n\n.login-container form input {\n  display: block;\n  padding: 14.5px;\n  width: 100%;\n  margin: 2rem 0;\n  color: var(--color);\n  outline: none;\n  background-color: rgba(145, 145, 145, 0.1215686275);\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  font-size: 15px;\n  -webkit-backdrop-filter: blur(15px);\n          backdrop-filter: blur(15px);\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n}\n\n.login-container form input:focus {\n  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.2);\n  animation: wobble 0.3s ease-in;\n  -webkit-animation: wobble 0.3s ease-in;\n}\n\n.login-container form button {\n  background-color: var(--primary-color);\n  color: var(--color);\n  display: block;\n  padding: 13px;\n  border-radius: 5px;\n  outline: none;\n  font-size: 18px;\n  letter-spacing: 1.5px;\n  font-weight: bold;\n  width: 100%;\n  cursor: pointer;\n  margin-bottom: 2rem;\n  transition: all 0.1s ease-in-out;\n  border: none;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n  -webkit-transition: all 0.1s ease-in-out;\n  -moz-transition: all 0.1s ease-in-out;\n  -ms-transition: all 0.1s ease-in-out;\n  -o-transition: all 0.1s ease-in-out;\n}\n\n.login-container form button:hover {\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);\n  transform: scale(1.02);\n  -webkit-transform: scale(1.02);\n  -moz-transform: scale(1.02);\n  -ms-transform: scale(1.02);\n  -o-transform: scale(1.02);\n}\n\n.circle {\n  width: 8rem;\n  height: 8rem;\n  background: var(--primary-color);\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  position: absolute;\n}\n\n.illustration {\n  position: absolute;\n  top: -14%;\n  right: -2px;\n  width: 90%;\n}\n\n.circle-one {\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transform: translate(-45%, -45%);\n  -webkit-transform: translate(-45%, -45%);\n  -moz-transform: translate(-45%, -45%);\n  -ms-transform: translate(-45%, -45%);\n  -o-transform: translate(-45%, -45%);\n}\n\n.circle-two {\n  bottom: 0;\n  right: 0;\n  z-index: -1;\n  transform: translate(45%, 45%);\n  -webkit-transform: translate(45%, 45%);\n  -moz-transform: translate(45%, 45%);\n  -ms-transform: translate(45%, 45%);\n  -o-transform: translate(45%, 45%);\n}\n\n.register-forget {\n  margin: 1rem 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.opacity {\n  opacity: 0.6;\n}\n\n.theme-btn-container {\n  position: absolute;\n  left: 0;\n  bottom: 2rem;\n}\n\n.theme-btn {\n  cursor: pointer;\n  transition: all 0.3s ease-in;\n}\n\n.theme-btn:hover {\n  width: 40px !important;\n}\n\n@keyframes wobble {\n  0% {\n    transform: scale(1.025);\n    -webkit-transform: scale(1.025);\n    -moz-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    -o-transform: scale(1.025);\n  }\n  25% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n  }\n  75% {\n    transform: scale(1.025);\n    -webkit-transform: scale(1.025);\n    -moz-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    -o-transform: scale(1.025);\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUNBO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FBRUo7O0FBQ0E7RUFDSSw0Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FBRUo7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUFHSjs7QUFBQTtFQUNJLHNCQUFBO0FBR0o7O0FBQUE7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsK0JBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0lBQ0EsMEJBQUE7RUFHTjtFQURFO0lBQ0ksbUJBQUE7SUFDQSwyQkFBQTtJQUNBLHdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtFQUdOO0VBREU7SUFDSSx1QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNEJBQUE7SUFDQSwyQkFBQTtJQUNBLDBCQUFBO0VBR047RUFERTtJQUNJLG1CQUFBO0lBQ0EsMkJBQUE7SUFDQSx3QkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUFHTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tYmFja2dyb3VuZDogIzFhMWEyZTtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzBmMzQ2MDtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjIuMnJlbTtcbn1cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsYSgwLCAwJSwgNjUlLCAwLjE1OCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDM2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIGlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxNC41cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MTkxOTExZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sb2dpbi1jb250YWluZXIgZm9ybSBpbnB1dDpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBhbmltYXRpb246IHdvYmJsZSAwLjNzIGVhc2UtaW47XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHdvYmJsZSAwLjNzIGVhc2UtaW47XG59XG5cbi5sb2dpbi1jb250YWluZXIgZm9ybSBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9naW4tY29udGFpbmVyIGZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbn1cblxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgaGVpZ2h0OiA4cmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbGx1c3RyYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNCU7XG4gICAgcmlnaHQ6IC0ycHg7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmNpcmNsZS1vbmUge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00NSUsIC00NSUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTQ1JSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDUlLCAtNDUlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTQ1JSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTQ1JSk7XG59XG5cbi5jaXJjbGUtdHdvIHtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUlLCA0NSUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUlLCA0NSUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUlLCA0NSUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0NSUsIDQ1JSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUlLCA0NSUpO1xufVxuXG4ucmVnaXN0ZXItZm9yZ2V0IHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5vcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbi50aGVtZS1idG4tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDJyZW07XG59XG5cbi50aGVtZS1idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xufVxuXG4udGhlbWUtYnRuOmhvdmVyIHtcbiAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIHdvYmJsZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
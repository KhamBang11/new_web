import { createRouter,createWebHistory } from "vue-router";
import DashboardComponents from "./components/DashboardComponents.vue";
import LoginComponents from "./components/LoginComponents.vue";
import AdminComponents from "./components/AdminComponents.vue";
import ModuleComponects from "./components/ModuleComponects.vue";
import NoteComponects from "./components/NoteComponents.vue";
import IncomeComponects from "./components/IncomeComponects.vue";
import IncomeDetailComponents from "./components/IncomeDetailComponents.vue";
import ExpenseDetailComponents from "./components/ExpenseDetailComponents.vue";
import PlanComponents from "./components/PlanComponents.vue";
import PlanSuccessComponents from "./components/PlanSuccessComponents.vue";
import PlannotSuccessComponents from "./components/PlannotSuccessComponents.vue";
import SchoolTableComponents from "./components/SchoolTableComponents";
import DailiesComponents from "./components/DailiesComponents";
import DailiesComponentsdone from "./components/DailiesComponentsdone";
import DailiesComponentsdoing from "./components/DailiesComponentsdoing";
import DailiesComponents_recover from "./components/DailiesComponents_recover";
const routes =[
    {
        path:'/',
        name:'LoginComponents',
        component:LoginComponents
    },{
        path:'/Dashboard',
        name:'DashboardComponents',
        component:DashboardComponents,
        meta:{requireAuth:true}
    },{
        path:'/Admin',
        name:'AdminComponents',
        component:AdminComponents,
        meta:{requireAuth:true}
    },{
        path:'/Module',
        name:'ModuleComponects',
        component:ModuleComponects,
        meta:{requireAuth:true}
    },{
        path:'/Note',
        name:'NoteComponents',
        component:NoteComponects,
        meta:{requireAuth:true}
    },{
        path:'/Income',
        name:'IncomeComponects',
        component:IncomeComponects,
        meta:{requireAuth:true}
    },{
        path:'/IncomeDe',
        name:'IncomeDetailComponents',
        component:IncomeDetailComponents,
        meta:{requireAuth:true}
    },{
        path:'/ExpenseDe',
        name:'ExpenseDetailComponents',
        component:ExpenseDetailComponents,
        meta:{requireAuth:true}
    }
    ,{
        path:'/Plan',
        name:'PlanComponents',
        component:PlanComponents,
        meta:{requireAuth:true}
    } ,{
        path:'/PlanSuccess',
        name:'PlanSuccessComponents',
        component:PlanSuccessComponents,
        meta:{requireAuth:true}
    } ,{
        path:'/PlannotSuccess',
        name:'PlannotSuccessComponents',
        component:PlannotSuccessComponents,
        meta:{requireAuth:true}
    },{
        path:'/SchoolTable',
        name:'SchoolTableComponents',
        component:SchoolTableComponents,
        meta:{requireAuth:true}
    },{
        path:'/Dailies',
        name:'DailiesComponents',
        component:DailiesComponents,
        meta:{requireAuth:true}
    }
    ,{
        path:'/Dailiesdone',
        name:'DailiesComponentsdone',
        component:DailiesComponentsdone,
        meta:{requireAuth:true}
    },{
        path:'/Dailiesdoing',
        name:'DailiesComponentsdoing',
        component:DailiesComponentsdoing,
        meta:{requireAuth:true}
    },{
        path:'/Dailies_recover',
        name:'DailiesComponents_recover',
        component:DailiesComponents_recover,
        meta:{requireAuth:true}
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
});

router.beforeEach((to,from,next)=>{
    const isAuthenticated = !!localStorage.getItem('token');
    if(to.matched.some(record=>record.meta.requireAuth)){
        if(!isAuthenticated){
            next('/login');
        }else{
            next();
        }
    }else{
        next();
    }
});

export default router;
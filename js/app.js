(function(){
    var app = angular.module("store",[]);
    app.controller("StoreController",function(){
        this.products = gems;
        this.message = ""
    });
    app.controller("PanelController",function(){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    var gems = [{
        name: 'Dodecahedron',
        price: 2.57,
        description: 'This is a gem',
        canPurchase: true,
        soldOut: false
    },
    {
        name: 'Pentagonal Gem',
        price: 5.57,
        description: 'This is a gem',
        canPurchase: true,
        soldOut: false
    }];
})();
;(function ($,w) {

    'use strict';
    var Tabs = function (ele,opt) {

        this.$ele = ele;

        this.default = {

        };

        this.options = $.extend({},this.default,opt);

        var a,b,c;

        this.func1 = function () {

        };

        this.func2 = function () {

        }

    };

    Tabs.prototype = {
        init: function () {

        }
    };

    $.fn.tabs = function (opt) {
        var tabs = new Tabs();
        return tabs.init()
    }



})(jQuery,window,undefined);
$(function(){

    var $s = $("#test").select2({
        escapeMarkup: function (markup) { return markup; },
        templateResult: function (data) {
            if (data.loading){
                return data.text;
            }
            var markup = "";
            if(data.children){
                markup = "<div class='tree'><div class='triangle down'></div><span>" + data.text + "</span></div>";
            }else{
                markup = "<div class='treeitem'>" + data.text + "</div>";
            }
            return markup;
        },
        templateSelection: function (data) {
            return data.text;
        },
        //修改select2源码新增方法选项 源文件line:5335
        queryComplete: function(select2, term){

            //注册父元素点击事件
            select2.$results.children().click(function(){
                
                //三角变换
                var triangle = $(this).find(".triangle");
                if(triangle.hasClass("down")){
                    triangle.removeClass("down").addClass("right");
                }else{
                    triangle.removeClass("right").addClass("down");
                }
                
                //切换子元素隐藏显示
                $(this).children("ul").toggle();

            }).click();//收缩所有分组

            var highlighted = select2.$results.find('.select2-results__option--highlighted');

            //展开选择栏目的分组
            highlighted.parent().show();

            //切换选中栏目的三角
            var triangle = highlighted.parent().parent().find(".triangle");
            triangle.removeClass("right").addClass("down");
        }
        
    });

})
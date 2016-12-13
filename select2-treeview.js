$(function(){
    $("#test").select2({
        escapeMarkup: function (markup) { return markup; },
        templateResult: function (data) {
            if (data.loading){
                return data.text;
            }
            var markup = "";
            if(data.children){
                markup = "<div class='select2-treeview'><div class='select2-treeview-triangle select2-treeview-down'></div><span>" + data.text + "</span></div>";
            }else{
                markup = "<div class='select2-treeview-item'><span><img style='height: 15px;width: 18px; margin-right: 5px;' src='https://select2.github.io/vendor/images/flags/" + data.element.value.toLowerCase() + ".png' class='img-flag' />" + data.text + "</span></div>";
            }
            return markup;
        },
        templateSelection: function (data) {
            return data.text;
        },
        /*
        修改select2源码新增方法选项 源文件line:5335
        https://github.com/maliming/select2-treeview/blob/master/select2.js#L5335
        
        if (self.isOpen()) {
          self.options.options.queryComplete(self, params.term);
        }
        */
        queryComplete: function(select2, term){

            //注册父元素点击事件
            //Register the parent element click event
            select2.$results.children().click(function(){
                
                //三角变换
                //Triangle Transform position
                var triangle = $(this).find(".select2-treeview-triangle");
                if(triangle.hasClass("select2-treeview-down")){
                    triangle.removeClass("select2-treeview-down").addClass("select2-treeview-right");
                }else{
                    triangle.removeClass("select2-treeview-right").addClass("select2-treeview-down");
                }
                
                //切换子元素隐藏显示
                //Toggle child elements are hidden or displayed
                $(this).children("ul").toggle();

            }).click();//收缩所有分组 Shrink all groups

            var highlighted = select2.$results.find('.select2-results__option--highlighted');

            //展开选择栏目的分组
            //Expand the grouping of the selected columns
            highlighted.parent().show();

            //切换选中栏目的三角
            //Toggle the triangles of the selected section
            var triangle = highlighted.parent().parent().find(".select2-treeview-triangle");
            triangle.removeClass("select2-treeview-right").addClass("select2-treeview-down");

            //滚动条位置 
            //The scroll bar position
            // 35 = $(".select2-search--dropdown").outerHeight()
            // 29 = (".select2-results__option--highlighted").outerHeight()
            select2.$results.scrollTop(highlighted[0].offsetTop - 35 - 29);
        }
    });

})
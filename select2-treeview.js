$(function(){

    window.$s = $("#test").select2({
        data: [{"id":1,"text":"合同纠纷","children":[{"id":2,"text":"呵呵1","children":null},{"id":3,"text":"呵呵2","children":[{"id":4,"text":"呵呵3","children":null},{"id":5,"text":"haha4","children":null}]}]},{"id":6,"text":"合同纠纷2","children":[{"id":7,"text":"呵呵5","children":null},{"id":8,"text":"呵呵6","children":[{"id":9,"text":"呵呵3_1","children":null},{"id":10,"text":"呵呵3_2","children":[{"id":119,"text":"呵呵3_222","children":null},{"id":123,"text":"呵呵3_333","children":null}]}]}]}],
        placeholder: '请选择业务领域',
        allowClear: true,
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
            select2.$results.find("li").click(function(e){
                //三角变换
                var triangle = $(this).find(".triangle:first");
                if(triangle.hasClass("down")){
                    triangle.removeClass("down").addClass("right");
                }else{
                    triangle.removeClass("right").addClass("down");
                }

                //切换子元素隐藏显示
                $(this).children("ul").toggle();
                e.stopPropagation();

            }).click();//收缩所有分组

            var data = select2.data();
            if(data[data.length - 1].id != ""){
            }

            //select2.$results.find('[aria-selected="true"]') || 
            var selected = select2.$results.find(".select2-results__option--highlighted");
            selected.parents("li[role='group']").click();

            //滚动条位置 
            // 35 = $(".select2-search--dropdown").outerHeight()
            // 29 = (".select2-results__option--highlighted[aria-selected="true"]").outerHeight()
            select2.$results.scrollTop(selected[0].offsetTop - 35 - 29);
        }
        
    });

})
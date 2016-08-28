$(function(){

    var $s = $("#test").select2({
        data:
        [{"id":1,"text":"合同纠纷","children":[{"id":137,"text":"劳务合同","children":null},{"id":2,"text":"服务合同","children":null},{"id":3,"text":"承包合同","children":null},{"id":4,"text":"委托行纪合同","children":null},{"id":5,"text":"运输合同","children":null},{"id":6,"text":"保管仓储合同","children":null},{"id":7,"text":"建筑工程合同","children":null},{"id":8,"text":"承揽合同","children":null},{"id":9,"text":"租赁合同","children":null},{"id":10,"text":"保证合同","children":null},{"id":11,"text":"赠与合同","children":null},{"id":12,"text":"供水、电、气、热合同","children":null},{"id":13,"text":"矿产合同","children":null},{"id":14,"text":"买卖合同","children":null}]},{"id":15,"text":"公司事务","children":[{"id":16,"text":"股东权益","children":null},{"id":17,"text":"股权相关","children":null},{"id":18,"text":"公司营运","children":null},{"id":19,"text":"破产清算","children":null},{"id":20,"text":"合伙纠纷","children":null},{"id":21,"text":"企业纠纷","children":null}]},{"id":22,"text":"刑事案件","children":[{"id":23,"text":"危害国家安全","children":null},{"id":24,"text":"危害公共安全","children":null},{"id":25,"text":"破坏市场经济秩序","children":null},{"id":26,"text":"公民人身、民主权利","children":null},{"id":27,"text":"侵犯财产罪","children":null},{"id":28,"text":"妨害社会管理秩序","children":null},{"id":29,"text":"妨害国防利益","children":null},{"id":30,"text":"贪污贿赂罪","children":null},{"id":31,"text":"渎职罪","children":null},{"id":32,"text":"军人违反职责罪","children":null}]},{"id":33,"text":"行政案件","children":[{"id":34,"text":"公安行政管理","children":null},{"id":35,"text":"资源","children":null},{"id":36,"text":"城乡建设","children":null},{"id":37,"text":"计划生育","children":null},{"id":38,"text":"工商","children":null},{"id":39,"text":"商标、专利","children":null},{"id":40,"text":"质检","children":null},{"id":41,"text":"政府","children":null},{"id":42,"text":"教育、文化","children":null},{"id":43,"text":"其他行政管理","children":null},{"id":142,"text":"劳动、社会保障","children":null}]},{"id":44,"text":"婚姻继承","children":[{"id":45,"text":"离婚纠纷","children":null},{"id":46,"text":"离婚后财产纠纷","children":null},{"id":47,"text":"同居纠纷","children":null},{"id":48,"text":"抚养纠纷","children":null},{"id":49,"text":"赡养纠纷","children":null},{"id":50,"text":"收养纠纷","children":null},{"id":51,"text":"监护纠纷","children":null},{"id":52,"text":"继承纠纷","children":null},{"id":53,"text":"分家析产","children":null}]},{"id":54,"text":"劳动人事","children":[{"id":55,"text":"劳动合同","children":null},{"id":56,"text":"社会保险","children":null},{"id":57,"text":"劳动者福利","children":null},{"id":58,"text":"人事争议","children":null}]},{"id":59,"text":"知识产权、竞争纠纷","children":[{"id":60,"text":"知识产权合同纠纷","children":null},{"id":61,"text":"知识产权权属纠纷","children":null},{"id":62,"text":"知识产权侵权纠纷","children":null},{"id":63,"text":"不正当竞争纠纷","children":null},{"id":64,"text":"垄断纠纷","children":null}]},{"id":65,"text":"特殊程序案件","children":[{"id":66,"text":"选民资格","children":null},{"id":67,"text":"宣告失踪、死亡","children":null},{"id":68,"text":"行为能力认定","children":null},{"id":69,"text":"财产无主认定","children":null},{"id":70,"text":"督促程序","children":null},{"id":71,"text":"财产保全申请","children":null},{"id":72,"text":"公示催告","children":null},{"id":73,"text":"仲裁程序案件","children":null},{"id":74,"text":"海事诉讼","children":null},{"id":75,"text":"执行案件","children":null}]},{"id":76,"text":"侵权纠纷","children":[{"id":77,"text":"其他侵权责任","children":null},{"id":78,"text":"产品责任","children":null},{"id":79,"text":"交通事故","children":null},{"id":80,"text":"医疗损害","children":null},{"id":81,"text":"环境污染","children":null},{"id":82,"text":"高度危险责任","children":null},{"id":83,"text":"物件损害责任","children":null},{"id":84,"text":"侵犯人格权","children":null},{"id":141,"text":"财产所有权","children":null}]},{"id":85,"text":"债权债务","children":[{"id":136,"text":"不当得利返还","children":null},{"id":143,"text":"资产转让","children":null},{"id":86,"text":"金融借款","children":null},{"id":87,"text":"同业拆借","children":null},{"id":88,"text":"企业借贷","children":null},{"id":89,"text":"民间借贷","children":null},{"id":90,"text":"不良资产","children":null},{"id":91,"text":"小额借款","children":null},{"id":92,"text":"债权人撤销权","children":null},{"id":93,"text":"债权转让","children":null},{"id":94,"text":"债务转移","children":null}]},{"id":95,"text":"金融证券","children":[{"id":96,"text":"保险","children":null},{"id":97,"text":"证券","children":null},{"id":98,"text":"私募基金","children":null},{"id":99,"text":"信用证","children":null},{"id":100,"text":"票据","children":null},{"id":101,"text":"信托","children":null},{"id":102,"text":"期货交易","children":null},{"id":103,"text":"银行卡","children":null},{"id":104,"text":"互联网金融","children":null}]},{"id":105,"text":"拆迁安置","children":[{"id":106,"text":"房屋拆迁安置补偿","children":null}]},{"id":107,"text":"涉外纠纷","children":[{"id":108,"text":"海商海事","children":null},{"id":109,"text":"国际贸易","children":null},{"id":110,"text":"外商投资","children":null},{"id":111,"text":"合资合作","children":null},{"id":112,"text":"WTO事务","children":null},{"id":113,"text":"两反一保","children":null},{"id":114,"text":"涉外仲裁","children":null}]},{"id":115,"text":"房产土地","children":[{"id":116,"text":"土地承包","children":null},{"id":117,"text":"建设用地","children":null},{"id":118,"text":"宅基地","children":null},{"id":119,"text":"房地产开发","children":null},{"id":120,"text":"借名买房","children":null},{"id":121,"text":"房屋所有权确认","children":null},{"id":122,"text":"房屋共有","children":null},{"id":123,"text":"房屋侵占","children":null},{"id":124,"text":"相邻权纠纷","children":null},{"id":125,"text":"房屋买卖","children":null},{"id":126,"text":"房屋租赁","children":null},{"id":144,"text":"房屋抵押","children":null}]},{"id":127,"text":"物权纠纷","children":[{"id":128,"text":"物权保护","children":null},{"id":129,"text":"业主相关","children":null},{"id":130,"text":"相邻关系","children":null},{"id":131,"text":"共有纠纷","children":null},{"id":132,"text":"用益物权","children":null},{"id":133,"text":"担保物权","children":null},{"id":134,"text":"占有保护","children":null}]},{"id":138,"text":"损害赔偿","children":[{"id":139,"text":"人身损害赔偿","children":null},{"id":140,"text":"财产损害赔偿","children":null}]},{"id":145,"text":"国际事务","children":[{"id":146,"text":"国际贸易","children":null},{"id":147,"text":"涉外投资","children":null},{"id":148,"text":"WTO/两反一保","children":null}]}],
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

            //滚动条位置 
            // 35 = $(".select2-search--dropdown").outerHeight()
            // 29 = (".select2-results__option--highlighted").outerHeight()
            select2.$results.scrollTop(highlighted[0].offsetTop - 35 - 29);
        }
        
    });

})
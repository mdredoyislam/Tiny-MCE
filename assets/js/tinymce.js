;(function(){
    tinyMCE.PluginManager.add('tmcd_plugin', function(editor, url){
        editor.addButton('tmcd_button_one', {
           // text:'B1',
            icon:'insertdatetime',
            //image: url + "/../images/cart.png",
            onclick:function(){
                editor.insertContent("Hello World");
            }
        });
        editor.addButton('tmcd_button_two', {
           text:'B2',
            //icon:'insertdatetime',
            //image: url + "/../images/cart.png",
            onclick:function(){
                editor.insertContent("Hello World");
            }
        });
        editor.addButton('tmcd_listbox_one', {
            type:'listbox',
            text:'Select Somthing',
            values: [
                {text:'Apple', value: 'You have selected <b>Apple</b>'},
                {text:'Orange', value: 'You have selected <em>Orange</em>'},
                {text:'Banana', value: 'You have selected <u>Banana</u>'},
            ],
            onselect:function(){
                editor.insertContent( this.value() );
            },
            onPostRender:function(){
                this.value('You have selected <em>Orange</em>');
            }
        });
        editor.addButton('tmcd_form_button', {
            text:'Form',
            onclick: function(){
                editor.windowManager.open({
                    title:'User Input Form', 
                    body:[
                        {
                            type:'textbox',
                            name:'userinput1',
                            label:'Some Text',
                            value:'Redoy Islam'
                        },
                        {
                            type:'colorpicker',
                            name:'userinput2',
                            label:'Color',
                            value:'#00a0ff'
                        },
                    ],
                    onsubmit:function(e){
                        editor.insertContent('Text = ' + e.data.userinput1 + 'Color = ' + e.data.userinput2);
                    }
                });
            },

        });
        editor.addButton('tmcd_menu_one', {
            type:'menubutton',
            text:'Choices',
            menu: [
                {
                    text:'Option A',
                    menu:[
                        {
                            text:'Option -- A',
                            onclick: function(){
                                console.log('Option -- A');
                            }
                        }
                    ]
                },
                {
                    text:'Option B',
                    onclick: function(){
                        console.log('Option B');
                    }
                }
            ],
        });
    });
})(jQuery);
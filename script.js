
                var flag
                function insert(num){
                    document.form.textview.value = document.form.textview.value+num
                }
                function equal(){
                    var exp = document.form.textview.value
                    
                    if(exp){
                        console.log(exp%1)
                        document.form.textview.value = eval(exp)
                        flag = 1
                    }
                }
                function clean(){
                    

                }
                function back(){
                    var exp = document.form.textview.value
                    if(flag === 1){
                        document.form.textview.value = ""
                        flag = 0
                    }
                    else{
                        document.form.textview.value = exp.substring(0,exp.length-1)
                    }
                }
        
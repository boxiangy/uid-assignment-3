     let _del=document.querySelectorAll('.del');
        [..._del].forEach(_del=>{
            _del.onclick=function(){
                _del.parentNode.parentNode.remove()
                sumTotal()
            }
        });
        let _cals=document.querySelectorAll('.cal')
        _cals.forEach(_cal=>{
            _cal.onclick=function(){
                let opera=_cal.innerHTML
                let _input=this.parentNode.childNodes[1]
                if(_input.value<=1&&opera=='-'){
                    return
                }
                let num=eval(_input.value*1+opera+1)
                _input.value=num
                let price=this.parentNode.previousElementSibling.innerHTML*1
                let total=price*num
                this.parentNode.nextElementSibling.innerHTML=total
                sumTotal()
            }
        })
        let _all=document.querySelector('#all')
        let _check=document.querySelectorAll('#check')
        _all.onclick=function(){
            _check.forEach(_check=>{
                _check.checked=_all.checked
        })
        sumTotal()
        }
        _check.forEach(radio=>{
            radio.onclick=function(){
                let _checkedboxes=document.querySelectorAll('input:checked:not(#all)')
                if(_check.length==_checkedboxes.length){
                    _all.checked=true
                }else{
                    _all.checked=false
                }
                sumTotal()
            } 
        })
 
        let _sumTotal=document.querySelector('.sumTotal')
        function sumTotal() {
            let _checkedboxes=document.querySelectorAll('input:checked:not(#all)')
            let sumTotal=0
            _checkedboxes.forEach(_checkedbox=>{
                sumTotal+=_checkedbox.parentNode.parentNode.children[5].innerText * 1
            })
            _sumTotal.innerHTML=sumTotal
        }
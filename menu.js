const nav = document.querySelector('.nav');

    window.addEventListener('scroll',function(){
        nav.classList.toggle('active', window.scrollY >0)
    });

    let listElements = document.querySelectorAll('.list__button--click');
    listElements.forEach(listElement => {
        listElement.addEventListener('click', () => {
            
            listElement.classList.toggle('arrow');
            
            let height = 0;
            let menu = listElement.nextElementSibling;
            console.log(menu.scrollHeight)
            if(menu.clientHeight == '0'){
                height = menu.scrollHeight;
            }
            
            menu.style.height = `${height}px`
        })
        
    });

 /*** Exemplo 1: percorrendo todos botoes
        let openButtons = document.querySelectorAll('.open-modal')
        console.log(openButtons)

        openButtons.forEach(b => {
            b.addEventListener('click', function(e) {
                e.preventDefault()

                let modalId = b.getAttribute('data-modal');
                console.log(modalId)
            })
        })
        */

        /*** Exemplo 2 
        let openButtons = document.querySelectorAll('.open-modal')
        console.log(openButtons)

        openButtons.forEach(b => {
            b.addEventListener('click', function(e) {
                e.preventDefault()

                let modalId = b.getAttribute('data-modal');
                console.log(modalId)

                const modal = document.getElementById(modalId)
                console.log(modal)

                //modal.show()
                modal.showModal()
            })
        })
        */
        
        /**
         *  para Abrir os modal
        */
        let openButtons = document.querySelectorAll('.open-modal')
        console.log(openButtons)

        openButtons.forEach(b => {
            b.addEventListener('click', function(e) {
                e.preventDefault()

                let modalId = b.getAttribute('data-modal');
                console.log(modalId)

                const modal = document.getElementById(modalId)
                console.log(modal)

                //modal.show()
                modal.showModal()
            })
        })

        /**
         *  para fechar os modal
        */
        let closeButtons = document.querySelectorAll('.close-modal')
        console.log(closeButtons)

        closeButtons.forEach(b => {
            b.addEventListener('click', (e) =>  {
                e.preventDefault()

                const modalId = b.getAttribute('data-modal');
                const modal = document.getElementById(modalId);

                modal.close();
            })
        })
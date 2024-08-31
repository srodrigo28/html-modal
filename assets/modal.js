/**  para Abrir os modal */
let openButtons = document.querySelectorAll('.open-modal')
openButtons.forEach(b => {
    b.addEventListener('click', function(e) {
        e.preventDefault()

        let modalId = b.getAttribute('data-modal');
        const modal = document.getElementById(modalId)
        modal.showModal()
    })
})

/** para fechar os modal */
let closeButtons = document.querySelectorAll('.close-modal')
closeButtons.forEach(b => {
    b.addEventListener('click', (e) =>  {
        e.preventDefault()

        const modalId = b.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close();
    })
})
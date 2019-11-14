let app = {
    init: function () {
        this.addEvents();
    },
    addEvents: function () {
        let form = document.forms.saveMateria;

        form.addEventListener('submit', function (event) {
            //event.preventDefault();
            
        });

    }
};
window.onload = () => app.init();
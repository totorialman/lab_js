export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="card" style="width: 450px; margin-left:35%;">
                    <img class="card-img-top" src="${data.src}" alt="картинка" style="object-fit:cover; width:450px; height: 300px;">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        
                        <div class="btn-group" role="group" aria-label="кнопки">
                            <button type="button" class="btn btn-primary" id="left-${data.id}" data-id="-10">Предыдущая</button>
                            <button type="button" class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Информация о фото</button>
                            <button type="button" class="btn btn-primary" id="right-${data.id}" data-id="10">Следующая</button>
                        </div>
                    </div>
                </div>
            `
        )
    }
    
    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
        document
            .getElementById(`right-${data.id}`)
            .addEventListener("click", listener)
        document
            .getElementById(`left-${data.id}`)
            .addEventListener("click", listener)
    }
    
    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}
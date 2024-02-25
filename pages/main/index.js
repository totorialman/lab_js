import {ProductCardComponent} from "../../components/product-card/index.js";
import {ButtonComponent} from "../../components/button/index.js";
import {RightButtonComponent} from "../../components/right-button/index.js";
import {ProductPage} from "../product/index.js";
let pos = 0
export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    getData() {
        return [
            {
                id: 1,
                src: "https://vokrug.tv/pic/news/2/3/3/2/2332834042bb876b99712de60f33f61e.jpg",
                title: "Фото1",
                idr: 1,
            },
            {
                id: 2,
                src: "https://cdn-m.sport24.ru/m/4f49/953b/70c2/4be3/85b2/54d0/c60f/a04e/1200_10000_max.jpeg",
                title: "Фото2",
                idr: 2,
            },
            {
                id: 3,
                src: "https://www.meme-arsenal.com/memes/637ac10e4fc03e57b4b06f44419d8b73.jpg",
                title: "Фото3",
                idr: 3,
            },
        ]
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
    clickCard(e) {
        const cardId = e.target.dataset.id
        //pos++
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
        //this.render()
    }
    clickR(e) {
        const cardId = e.target.dataset.id
        //alert(typeof(cardId))
        if(cardId === "10"){
            pos++
            
            this.render()
        }
        else if(cardId === "-10"){
            pos--
            
            this.render()
        }
        else{
            const data = this.getData()
            //alert(data.length)
            for(let i=0;i<data.length;i++){
                
                if(data[i].id == parseInt(cardId)){
                    const productPage = new ProductPage(this.parent, cardId, data[i].src)
                    productPage.render()
                }
            }
            //const productPage = new ProductPage(this.parent, cardId, data.src)
            //productPage.render()
        }
    }
    render() {
        
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        
        const data = this.getData()
        const productCard = new ProductCardComponent(this.pageRoot)
        if(pos>data.length-1) pos=0
        else if(pos<0) pos=data.length-1
        //alert(pos)
        productCard.render(data[pos], this.clickR.bind(this))
        //data.forEach((item) => {
            //const productCard = new ProductCardComponent(this.pageRoot)
            //productCard.render(item, this.clickCard.bind(this))
        //})
    }
    
}

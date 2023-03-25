class ProductManager {
    constructor(){
        this.products = []
        this.productId=1
    }

    addProduct(title,description,price,thumbnail,code,stock){
        const prodWithSameCode=this.products.findIndex((prod)=>prod.code===code)
        if(!title||!description||!price||!thumbnail||!code||!stock||prodWithSameCode!==-1){
            if(prodWithSameCode!==-1){
                console.log("Error el codigo de producto ya existe");
            }else{
                console.log("Error Alguno de los campos esta incompleto");
            }
        }else{
            let product={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id:this.productId
        }
            this.products.push(product)
            this.productId++  
        }
    }
    getProducts(){
        return this.products
    }
    getProductById(id){
        const productFindById=this.products.findIndex((prod)=>prod.id===id)
        if(productFindById===-1){
            console.log("Not Found");
        }else{
            return productFindById
        }
    }
}
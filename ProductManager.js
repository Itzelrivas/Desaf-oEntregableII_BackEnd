const fs = require('fs');
const dirName = './products'

class ProductManager {
    constructor() {
        this.path = dirName + "/array.json"
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        //Esto es para que, si quiero agregar un producto nuevo tras haber eliminado uno, no se me repitan las id´s:
        let idValue = products.length+1
        const productsId = products.map(product => product.id)
        if(productsId.includes(idValue)){idValue++}

        const newProduct = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: idValue
        };

        const productsCodes = products.map(product => product.code);
        if(!newProduct.title || !newProduct.description || !newProduct.price || !newProduct.thumbnail || !newProduct.code || !newProduct.stock){
            console.log("Para poder agregar un producto, todos los campos deben haber sido completados. No dejes ningún campo vacío, porfa");
        }
        else if (productsCodes.includes(newProduct.code)) {
            console.log("Oh no, el producto que deseas agregar, ya ha sido agregado anteriormente.");
        } 
        else {
            products.push(newProduct);
            try {
                fs.mkdirSync(dirName,{ recursive: true })
                fs.writeFileSync(this.path, JSON.stringify(products, null, 2))
                fs.readFileSync(this.path, "utf-8")
                console.log(`Has agregado un nuevo producto exitosamente: `, newProduct);

            } catch (error) {
                console.log("No se pudo cumplir la promesa, error: " + error);
            }
        }
    }

    getProducts() {
        console.log("Los productos que has agregado son:");
        let resultado = fs.readFileSync(this.path, "utf-8")
        resultado = JSON.parse(resultado)
        console.log(resultado)
    }

    getProductById(id) {
        let result = fs.readFileSync(this.path, "utf-8")
        result = JSON.parse(result)
        const productSearch = result.find(product => product.id === id);
        if (productSearch === undefined) {
            console.log(`El id introducido no corresponde a ningún producto :(`);
        } 
        else {
            console.log(`El producto con el id = ${id} es`, productSearch);
        }
    }

    deleteProduct(id){
        let result = fs.readFileSync(this.path, "utf-8")
        result = JSON.parse(result)
        try {
            let productSearch = result.find(product => product.id === id);
            if (productSearch === undefined) {
                console.log(`El id introducido no corresponde a ningún producto :(`);
            } 
            else {
                result = result.filter(product => product !== productSearch)
                let productsUpdate = JSON.stringify(result, null, 2)
                fs.writeFileSync(this.path, productsUpdate)
                fs.readFileSync(this.path, "utf-8")
                productsUpdate=JSON.parse(productsUpdate)
                console.log(`Se ha borrado con éxito el producto con el id = ${id}, ahora ya solo estan agregados los siguientes productos: `)
                console.log(productsUpdate)
                products = products.filter(product => product.id !== id)
            }
        } catch (error) {
            console.error(`No se pudo borrar el producto con el id = ${id}, debido al error: ` + error)
        }
    
    }

    updateProduct(id, prop, data){
        let result = fs.readFileSync(this.path, "utf-8")
        result = JSON.parse(result)
        try {
            const productSearch = result.find(product => product.id === id);
            if (productSearch === undefined) {
                console.log(`El id introducido no corresponde a ningún producto :(`);
            } 
            else {
                if(prop.toLowerCase() === "title"){
                    productSearch.title = data
                    let productsUpdate = JSON.stringify(result, null, 2)
                    fs.writeFileSync(this.path, productsUpdate)
                    fs.readFileSync(this.path, "utf-8")
                    productsUpdate=JSON.parse(productsUpdate)
                    console.log(`Se ha actualizado con éxito el campo ${prop.toLowerCase()} del producto con el id = ${id}, ahora así ha quedado: `)
                    console.log(productSearch)
                }
                else if(prop.toLowerCase() === "description"){
                    productSearch.description = data
                    let productsUpdate = JSON.stringify(result, null, 2)
                    fs.writeFileSync(this.path, productsUpdate)
                    fs.readFileSync(this.path, "utf-8")
                    productsUpdate=JSON.parse(productsUpdate)
                    console.log(`Se ha actualizado con éxito el campo ${prop.toLowerCase()} del producto con el id = ${id}, ahora así ha quedado: `)
                    console.log(productSearch)
                }
                else if(prop.toLowerCase() === "price"){
                    productSearch.price = data
                    let productsUpdate = JSON.stringify(result, null, 2)
                    fs.writeFileSync(this.path, productsUpdate)
                    fs.readFileSync(this.path, "utf-8")
                    productsUpdate=JSON.parse(productsUpdate)
                    console.log(`Se ha actualizado con éxito el campo ${prop.toLowerCase()} del producto con el id = ${id}, ahora así ha quedado: `)
                    console.log(productSearch)
                }
                else if(prop.toLowerCase() === "thumbnail"){
                    productSearch.thumbnail = data
                    let productsUpdate = JSON.stringify(result, null, 2)
                    fs.writeFileSync(this.path, productsUpdate)
                    fs.readFileSync(this.path, "utf-8")
                    productsUpdate=JSON.parse(productsUpdate)
                    console.log(`Se ha actualizado con éxito el campo ${prop.toLowerCase()} del producto con el id = ${id}, ahora así ha quedado: `)
                    console.log(productSearch)
                }
                else if(prop.toLowerCase() === "code"){
                    productSearch.code = data
                    let productsUpdate = JSON.stringify(result, null, 2)
                    fs.writeFileSync(this.path, productsUpdate)
                    fs.readFileSync(this.path, "utf-8")
                    productsUpdate=JSON.parse(productsUpdate)
                    console.log(`Se ha actualizado con éxito el campo ${prop.toLowerCase()} del producto con el id = ${id}, ahora así ha quedado: `)
                    console.log(productSearch)
                }
                else if(prop.toLowerCase() === "stock"){
                    productSearch.stock = data
                    let productsUpdate = JSON.stringify(result, null, 2)
                    fs.writeFileSync(this.path, productsUpdate)
                    fs.readFileSync(this.path, "utf-8")
                    productsUpdate=JSON.parse(productsUpdate)
                    console.log(`Se ha actualizado con éxito el campo ${prop.toLowerCase()} del producto con el id = ${id}, ahora así ha quedado: `)
                    console.log(productSearch)
                }
                else if(prop.toLowerCase() === "id"){
                    console.log("OH OHHHH, tu no puedes modificar el id :( Los unicos campos que puedes cambiar son: title, description, price, thumbnail, code, stock.")
                }
                else{
                    console.error(`El campo ${prop.toLowerCase()} no corresponde a ninguno del Producto, por lo tanto, no se pudo actualizar. Los campos son: title, description, price, thumbnail, code, stock.`)
                }

                products=result //Esto es para que, los cambios que hagamos en el archivo, se vean reflejados tambien en el array.
            }
        } catch (error) {
            console.error(`No se pudo actualizar el campo ${prop.toLowerCase()} del producto con el id = ${id}, debido al error: ` + error)
        }
    }
}

let products = []

//Pruebas:

const newProducto = new ProductManager();

newProducto.addProduct("Vestido rojo", "Vestido color rojo con piedritas plateadas", 234, "www.url.de.un.vestido.com", 2342, 3);

newProducto.addProduct("Vestido azul", "Vestido color azul con flores", 789, "www.url.de.un.vestido.com", 5322, 1);

newProducto.addProduct("Vestido rojo", "Vestido color rojo con piedritas plateadas", 234, "www.url.de.un.vestido.com", 2342, 3);

newProducto.getProducts();

newProducto.getProductById(3); 

newProducto.addProduct("", "Playera tipo polo azul", 580, "www.url.fake.imaginacion.com", 1522, 1);

newProducto.addProduct("Playera azul", "Playera tipo polo azul", 580, "www.url.fake.imaginacion.com", 1522, 1);

newProducto.getProducts();

newProducto.addProduct("Playera amarilla", "Playera amarilla con rayas", 670, "www.url.fake.imaginacion.com", 1789, 2);

newProducto.getProducts();

newProducto.deleteProduct(3);

newProducto.updateProduct(1, "TITULO", "Vestido morado")

newProducto.updateProduct(3, "TITLE", "Vestido morado")

newProducto.updateProduct(2, "TITLE", "Vestido morado")

newProducto.addProduct("Plantalon morado", "Pantalon de vestir color morado oscuro", 480, "www.url.fake.pantalon.com", 1934, 1);

newProducto.updateProduct(2, "Description", "Vestido morado con flores y tipo corset")

newProducto.updateProduct(5, "ID", 7)
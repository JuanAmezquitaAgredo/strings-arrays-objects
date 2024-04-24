colecciondeproductos = [];
blacklistedProducts = [];
let id = 0;
i = true;
var cantidadmasbarata;
var cantidadmascara;
var cantidadconmenorcantidad;
var cantidadmayorcantidad;
do{
    var option = prompt(`INGRESE: 
                        1. Si desea crear producto 
                        2. Si desea duplicar producto 
                        3. Visualizar y buscar productos 
                        4. Actualizar productos 
                        5. Eliminar productos 
                        6. Verificar existencia de productos 
                        7. Vender producto 
                        8. Comprar producto 
                        9. Ver el valor total de inventario 
                        10. ordenar productos 
                        11. Productos con malas palabras 
                        12. Reporte general de productos
                        13. Salir`);
    switch(option){
        case "1":
            let nom = prompt("Ingrese el nombre del producto");
            let precio = Number(prompt("Ingrese el precio del producto"));
            let cantidad = Number(prompt("Ingrese la cantidad del producto"));
            let descripcion = prompt("Ingrese la descripción del producto");
            const producto = Object.assign({},{
                id: ++id,
                nom,
                precio,
                cantidad,
                descripcion
            })
            colecciondeproductos.push(producto);
            break;
        case "2":
            console.log("Lista de productos para duplicar:")
            colecciondeproductos.forEach((producto,index) => {
                console.log(`Producto ${index + 1} es: ${producto.nom} - ${producto.precio} - ${producto.cantidad} - ${producto.descripcion}`)
            });
            const idDeObjetoADuplicar = prompt("Ingrese el ID del objeto a duplicar");
            let productoduplicado = colecciondeproductos[idDeObjetoADuplicar-1];
            let cont = 0;
            colecciondeproductos.forEach(Element=>{
                if (Element.nom.startsWith(productoduplicado.nom)){
                    cont ++;
                }
            })
            
            let nombreproductoduplicado;
            if (cont > 1){
                nombreproductoduplicado = productoduplicado.nom+' copy'+(cont-1);
            }
            else{
                nombreproductoduplicado = productoduplicado.nom+' copy';
            }
            const productoDupilcadoaSubir = Object.assign({},{
                id:id++,
                nom:nombreproductoduplicado,
                precio:productoduplicado.precio,
                cantidad:productoduplicado.cantidad,
                descripcion:productoduplicado.descripcion
            })
            colecciondeproductos.push(productoDupilcadoaSubir);
            break;
        
        case "3":
            console.log("Lista de productos para buscar:")
            colecciondeproductos.forEach((producto,index)=>{
                console.log(`Producto ${index+1} es: ${producto.nom} - ${producto.precio} - ${producto.cantidad} - ${producto.descripcion}`);
            })
            let Opbcionesdebuscar = prompt("Ingrese: \n1.Si desea buscar por nombre \n2.Si desea buscar por precio");
            if (Opbcionesdebuscar == "1"){
                let productobuscarpornombre = prompt("Ingrese el nombre del producto a buscar");
                colecciondeproductos.forEach(Element=>{
                    if (Element.nom.startsWith(productobuscarpornombre)){
                        console.log(`El producto fue encontrado: ${Element.nom} - ${Element.precio} - ${Element.cantidad} - ${Element.descripcion}`);
                    }
                });
            }
            else if (Opbcionesdebuscar == "2"){
                let buscarproductopreciominimo = prompt("Ingrese el valor minimo");
                let buscarproductopreciomaximo = prompt("Ingrese el valor maximo");

                let rango = colecciondeproductos.filter(element => element.precio >= buscarproductopreciominimo && element.precio <= buscarproductopreciomaximo);
                console.log(`Los productos entre ${buscarproductopreciominimo} y ${buscarproductopreciomaximo} son:`);
                rango.forEach((producto,index)=>{
                    console.log(`Producto ${index+1} es: ${producto.nom} - ${producto.precio} - ${producto.cantidad} - ${producto.descripcion}`);
                })
            }
            break;
        case "4":
            console.log("Lista de productos para actualizar:")
            colecciondeproductos.forEach((producto,index)=>{
                console.log(`Producto ${index+1} es: ${producto.nom} - ${producto.precio} - ${producto.cantidad} - ${producto.descripcion}`);
            });

            const idactualiza = prompt("Ingrese el ID del producto que desea actualizar");
            const nuevonom = prompt("Ingrese el nuevo nombre");
            const nuevoprecio = Number(prompt("Ingrese el nuevo precio"));
            const nuevocantidad = Number(prompt("Ingrese la nueva cantidad"));
            const nuevodescrip = prompt("Ingrese la nueva descripción");

            if (nuevonom){
                colecciondeproductos[idactualiza-1].nom =  nuevonom;
            }
            if (nuevoprecio){
                colecciondeproductos[idactualiza-1].precio = nuevoprecio;
            }
            if (nuevocantidad){
                colecciondeproductos[idactualiza-1].cantidad = nuevocantidad;
            }
            if (nuevodescrip){
                colecciondeproductos[idactualiza-1].nuevodescrip = nuevodescrip;
            }
            break;
        case "5":
            console.log("Lista de productos para eliminar:")
            colecciondeproductos.forEach((producto,index)=>{
                console.log(`Producto ${index+1} es: ${producto.nom} - ${producto.precio} - ${producto.cantidad} - ${producto.descripcion}`);
            });
            const productoaeliminar = prompt("Ingrese el ID del producto que desea eliminar");
            colecciondeproductos.splice((productoaeliminar-1),1);
            break;

        case "6":
            let objetoencontrado;
            let productoverificarpornombre = prompt("Ingrese el nombre del producto a buscar");
                colecciondeproductos.forEach(Element=>{
                    if (Element.nom.startsWith(productoverificarpornombre)){
                        objetoencontrado = colecciondeproductos.find(obj => obj.nom == productoverificarpornombre);
                    }
                });
            console.log(objetoencontrado)
            if (objetoencontrado && (objetoencontrado.cantidad)>0){
                console.log(`El producto fue encontrado: ${objetoencontrado.nom} - ${objetoencontrado.precio} - cantidad sufuciente: ${objetoencontrado.cantidad} - ${objetoencontrado.descripcion}`);
            }
            else{
                alert("No tienes suficiente cantidad o no existe el producto");
            }

            break;
        case "7":
            console.log("Lista de productos para vender:")
            colecciondeproductos.forEach((producto,index)=>{
                console.log(`Producto ${index+1} es: ${producto.nom} - ${producto.precio} - ${producto.cantidad} - ${producto.descripcion}`);
            });

            const idproductoVender = prompt("Ingrese el ID del producto que va a vender");
            const  CantidadParavender = parseInt(prompt("Ingrese la cantidad que venderá"));

            if (CantidadParavender){
                colecciondeproductos[idproductoVender-1].cantidad -= CantidadParavender;
            };

            break;
        case "8":
            console.log("Lista de productos para añadirle:")
            colecciondeproductos.forEach((producto,index)=>{
                console.log(`Producto ${index+1} es: ${producto.nom} - ${producto.precio} - ${producto.cantidad} - ${producto.descripcion}`);
            });

            const idproductocomprar = prompt("Ingrese el ID del producto que va a vender");
            const  CantidadParacomprar = parseInt(prompt("Ingrese la cantidad que venderá"));

            if (CantidadParacomprar){
                colecciondeproductos[idproductocomprar-1].cantidad += CantidadParacomprar;
            };
            break;
        case "9":
            var SumaTotaldeinventario = 0;
            colecciondeproductos.forEach((producto)=>{
                SumaTotaldeinventario += producto.precio
            }); 
            console.log(`La suma total del inventario disponible es: ${SumaTotaldeinventario}`);            
            break;
        case "10":
            const cantidadoprecio = prompt(`Ingrese:
                                            1. Si desea organizar por precio
                                            2. Si desea organizar por cantidad`);
            const acendenteodecendente = prompt(`Ingrese:
                                            1. Si desea organizar de forma Acendente
                                            2. Si desea organizar de forma Decendente`);
            switch(cantidadoprecio){
                case "1":
                    if (acendenteodecendente == "1"){
                        console.log("Organizado por precio de menor a mayor");
                        let organizadosacendente = colecciondeproductos.sort(function(a,b){
                            return a.precio - b.precio;
                        });    
                        organizadosacendente.forEach((producto,index)=>{
                            console.log(`Producto ${index+1} es: ${producto.nom} - ${producto.precio} - ${producto.cantidad} - ${producto.descripcion}`);
                            //Esto es para el punto 12:
                            let longitud1 = Math.ceil(organizadosacendente.length/2);
                            let orgporpreciomasbarato = organizadosacendente.slice(0,longitud1);
                            cantidadmasbarata = orgporpreciomasbarato.length
                        });    
                    };
                    if (acendenteodecendente == "2"){
                        console.log("Organizado por precio de mayor a menor");
                        let organizadosdecendente = colecciondeproductos.sort(function(a,b){
                            return b.precio - a.precio;
                        });    
                        organizadosdecendente.forEach((producto,index)=>{
                            console.log(`Producto ${index+1} es: ${producto.nom} - ${producto.precio} - ${producto.cantidad} - ${producto.descripcion}`);
                            //Esto es para el punto 12:
                            let longitud2 = Math.ceil(organizadosdecendente.length/2);
                            let orgporpreciomascaro = organizadosdecendente.slice(longitud2);
                            cantidadmascara = orgporpreciomascaro.length
                        }); 
                    };
                    break;
                case "2":
                    if (acendenteodecendente == "1"){
                        console.log("Organizado por cantidad de menor a mayor");
                        let organizadosacendente = colecciondeproductos.sort(function(a,b){
                            return a.cantidad - b.cantidad;
                        });    
                        organizadosacendente.forEach((producto,index)=>{
                            console.log(`Producto ${index+1} es: ${producto.nom} - ${producto.precio} - ${producto.cantidad} - ${producto.descripcion}`);
                            //Esto es para el punto 12:
                            let longitud1 = Math.ceil(organizadosacendente.length/2);
                            let orgmenoscant = organizadosacendente.slice(0,longitud1);
                            cantidadconmenorcantidad = orgmenoscant.length
                        });    
                    };
                    if (acendenteodecendente == "2"){
                        console.log("Organizado por cantidad de mayor a menor");
                        let organizadosdecendente = colecciondeproductos.sort(function(a,b){
                            return b.cantidad - a.cantidad;
                        });    
                        organizadosdecendente.forEach((producto,index)=>{
                            console.log(`Producto ${index+1} es: ${producto.nom} - ${producto.precio} - ${producto.cantidad} - ${producto.descripcion}`);
                            //Esto es para el punto 12:
                            let longitud2 = Math.ceil(organizadosdecendente.length/2);
                            let orgmascant = organizadosdecendente.slice(longitud2);
                            cantidadmayorcantidad = orgmascant.length
                        }); 
                    };
                    break;    

            };
            break;
        case "11":
            id = 0;
            const malaspalabras = ["hp","marica","bobada","loca","puto"];
            contmalaspa = 0;
            malaspalabras.forEach((palabra)=>{
                colecciondeproductos.forEach((descrip)=>{
                    if (descrip.descripcion.includes(palabra)){
                        contmalaspa ++;
                        const productoconmalapalabra = Object.assign({},{
                            id:id++,
                            nom:descrip.nom,
                            precio:descrip.precio,
                            cantidad:descrip.cantidad,
                            descripcion:descrip.descripcion
                        })
                        blacklistedProducts.push(productoconmalapalabra);

                    };
                });
            });
            if (contmalaspa>0){
                console.log("Lista de productos con malas palabras en la descripción");
                blacklistedProducts.forEach((producto,index)=>{
                console.log(`Producto ${index} es: ${producto.nom} y la descripcion ${producto.descripcion}`);
                });
            }
            else{
                console.log("No se encontraron malas palabras en las descripciones");
            };
            break;
        case "12":

            console.log(`INVENTARIO GENERAL:
                         Cantidad de productos: ${colecciondeproductos.length}
                         Valor total inventario: ${SumaTotaldeinventario}
                         Cantidad de productos mas caros: ${cantidadmascara}
                         Cantidad de productos mas baratos: ${cantidadmasbarata}
                         Cantidad de productos con mayor cantidad: ${cantidadmayorcantidad}
                         cantidad de productos con menor cantidad: ${cantidadconmenorcantidad}
                         Cantidad de productos con posibles malas palabras: ${blacklistedProducts.length}`);    
        case "13":
            i = false;
            break;
    }
}while(i == true);

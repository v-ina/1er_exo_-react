function Products(){

    const productsFromDb = [
        "Mocassin à glands" , "Charenaises" , "Talons aiguilles"
    ] //pour boucler, on plutot utilise .map() au JSX
    const productsList = [
        {   
            title : "Paillasson",
            price : 20,
            isPublished : true
        },
        {   
            title : "Aspirateur",
            price : 340,
            isPublished : true
        },
        {   
            title : "Lampe",
            price : 50,
            isPublished : true
        },
        {   
            title : "Casque velo",
            price : 60,
            isPublished : true
        }
    ]

    return(
        /*
        <div className="product">
            {productsFromDb.map((product)=>{
                return (
                    <article>
                        <h3>{product}</h3>
                        <p>Lorem ipsum dolor sit amet, <strong>{product}</strong> consectetur adipiscing elit. Maecenas sit amet magna at sem luctus blandit ut vitae felis.</p>
                        <button>en savoir {product} +</button>
                    </article>
                )
            })}
        </div>
        */
        <div className="product">
            {productsList.map((el)=>{
                return (
                <>
                    {el.isPublished ? (
                        <article>
                            <h3>{el.title}</h3> 
                            <p> Prix : {el.price} Euros</p>
                        </article>
                       
                    ):(
                        <article>
                            <h3>ce produit est en preparation</h3>
                            <p>-</p>
                        </article>
                    )}
                </>

                )
            })}
        </div>

    )
}

export default Products
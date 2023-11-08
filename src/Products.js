function Products(){

    const productsFromDb = [
        "Mocassin à glands" , "Charenaises" , "Talons aiguilles"
    ] //pour boucler, on plutot utilise .map() au JSX

    return(
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
    )
}

export default Products
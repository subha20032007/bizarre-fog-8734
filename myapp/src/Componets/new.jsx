function Show({name,des,cost,url}){

    return<>
    <div>
        <img src={`https://silly-plum-drawers.cyclic.app/${url}`} alt={name}/>
        <h1>{name}</h1>
        <p>{des}</p>
        <h3>{cost}</h3>
    </div>
    
    </>
}
export default Show
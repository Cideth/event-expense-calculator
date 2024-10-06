export default function IdPathVariable2(
    {params} : { params : { id2 : string, id : string} }
)
{   
    console.log(params);
    return (
        <>
        <div>
        id : {params.id}
        </div>
        id2 : {params.id2} 
        </>
    );
}
  


export default function IdPathVariable({params} : {params : { id : string }}) {
    const {id} = params;
    
    return (
      <>id {id} V1</>
    );
}

// export default function Page({ params }: { params: { slug: string } }) {
//   return <div>My Post: {params.slug}</div>
// }
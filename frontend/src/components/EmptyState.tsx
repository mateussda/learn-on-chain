export default function EmptyState({title,desc}:{title:string, desc:string}){
  return (
    <div className='card' style={{textAlign:'center'}}>
      <div className='placeholder' style={{height:100, marginBottom:12}}>No Data</div>
      <h3 style={{margin:'6px 0'}}>{title}</h3>
      <p className='subtle'>{desc}</p>
    </div>
  )
}
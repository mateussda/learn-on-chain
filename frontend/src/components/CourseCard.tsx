import Button from './Button'
import Card from './Card'

type Props = {
  id:number; title:string; price:number; onOpen:(id:number)=>void; teacher?:string; level?:string
}
export default function CourseCard({id,title,price,onOpen,teacher='Unknown',level='Beginner'}:Props){
  return (
    <Card>
      <div className='placeholder'>Course #{id} • {level}</div>
      <h3>{title}</h3>
      <p className='subtle small'>by {teacher}</p>
      <div className='row' style={{justifyContent:'space-between'}}>
        <div><span className='badge'>Price</span> <span className='price'>{price.toFixed(2)} ICP</span></div>
        <Button onClick={()=>onOpen(id)}>Details</Button>
      </div>
    </Card>
  )
}
import {GoodsItem} from './GoodsItem'
function GoodsList(props) {
  const {goods = []} = props;

  if (!goods.length) {
    <h3>nothing here</h3>
  }

  return <div className="goods">
    {goods.map(item => (
        <GoodsItem key={item.id} {...item}/>
    ))}
  </div>
}




export {GoodsList};